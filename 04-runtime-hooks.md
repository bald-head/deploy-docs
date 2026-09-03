# Runtime Hook 使用指南

Runtime Hooks 是 Skills Framework 的核心基础设施，提供跨客户端的行为内核、项目记忆、TODO 工作流和命令防护。

## Runtime Hook 概览

### Hook 类型

| Hook | 触发时机 | 主要功能 |
|------|----------|----------|
| **SessionStart** | 会话开始时 | 自修复配置、检查 MCP 注册 |
| **UserPromptSubmit** | 用户输入前 | 注入行为内核、项目记忆、TODO 提醒 |
| **SubagentStart** | 子智能体启动 | 继承上下文、确保项目记忆 |
| **PreToolUse** | 工具调用前 | 命令防护、流程门禁 |
| **Stop** | 主会话结束 | TODO 状态机、交付对账 |
| **SubagentStop** | 子智能体结束 | Handoff 验证、状态回传 |

### 核心能力

1. **Harness-first 最小行为内核**：跨客户端统一的行为原则
2. **命令与流程写入防护**：PreToolUse 门禁拦截破坏性操作
3. **当前开发者唯一 TODO**：Feature 状态机和依赖管理
4. **新需求阶段状态机**：从需求到交付的完整流程
5. **项目记忆自动初始化**：确保单一 PROJECT-MEMORY.md 存在
6. **Skill 原生发现兜底**：配合客户端原生路由
7. **中文状态提示音**：确认、回复完成、任务完成三类提示

## 安装与配置

### 安装 Runtime Hooks

```bash
cd ~/.agent-workflow/skills
node runtime-hooks/scripts/install.mjs
```

安装器会：
- 检测当前使用的客户端（Claude Code 或 Codex）
- 合并现有配置（不覆盖）
- 自动备份（修改前）
- 生成基于当前系统的命令路径
- 不修改 PATH 或客户端二进制

### Codex 额外步骤

安装后必须运行：
```bash
/hooks
```

审查并信任以下 Hook：
- `SessionStart`
- `PreToolUse`
- `UserPromptSubmit`
- `SubagentStart`
- `SubagentStop`
- `Stop`

**注意**：只修改脚本内容不会改变 Hook 定义哈希；重新运行 `/hooks` 只在 Hook 定义变化时需要。

### 验证安装

```bash
# 检查 Runtime Hook 状态
node runtime-hooks/scripts/install.mjs --check --json

# 检查 Skill 目录完整性
node runtime-hooks/scripts/skill-catalog-context.cjs --check

# 检查 Penpot MCP 注册（如需要）
node project-manager/scripts/penpot-mcp-setup.mjs --check --json
```

### 环境变量配置

```bash
# 仅在 Git identity 与系统用户名都不可用时提供
export AGENT_DEVELOPER_NAME=alice-chen

# 仅允许指向当前 Git 根内当前 developer 的规范目录
export AGENT_TODO_DIR=/repo/docs/alice-chen/tasks/todo

# 仅在 Harness 未提供 session_id/agent_id 时显式兜底
export AGENT_RUNTIME_INSTANCE_ID=worker-a

# 本机 repoId 到 checkout 的映射
export AGENT_REPO_ROOTS='{"backend":"/checkout/backend"}'

# 禁用功能（不推荐）
export AGENT_RUNTIME_HOOKS_DISABLED=1          # 禁用所有 Hook
export AGENT_COMMAND_GUARD=0                    # 仅禁用命令防护
export AGENT_RUNTIME_HOOKS_AUTO_UPDATE=0       # 禁用 SessionStart 自动更新
export AGENT_COMPLETION_SOUND=0                 # 禁用提示音

# 自定义提示音
export AGENT_CONFIRMATION_SOUND_FILE=/path/to/confirm.wav
export AGENT_REPLY_COMPLETION_SOUND_FILE=/path/to/reply.wav
export AGENT_TASK_COMPLETION_SOUND_FILE=/path/to/task.wav
```

## 行为内核 (Behavior Kernel)

位于 `runtime-hooks/behavior-kernel.md`，是跨客户端唯一的行为原则源。

### 核心原则

```markdown
- 事实先行：先读取适用规则、仓库事实和已批准边界；信息不足时明确缺口，不猜测。
- 简单优先：选择满足目标的最简单方案，不为假设需求增加抽象、兼容层或流程。
- 最小写集：只修改目标直接需要的文件与行为，保留无关现状。
- 目标驱动：以可观察用户结果、验收和新鲜证据判断完成，不以文档、代码量或自报状态替代。
- 按需加载：Harness 原生提供 Skill 路由元数据；Hook 不重复注入清单，命中后再读取对应规则。
- 有界推进：已授权且边界明确时直接执行；只有真实决策、越界或高风险不可逆动作才停门。
- 人工接续提醒：任务必须等待用户确认、重启服务、操作设备或执行其他人工步骤后才能继续时，明确说明所需动作，并触发确认类语音通知；普通状态更新和可选建议不触发。
- 项目记忆：每次请求确保并按需读取唯一 PROJECT-MEMORY.md；稳定事实、复用 Owner 和边界当轮原位归并，状态只写 TODO。
```

### 上下文预算

行为内核注入严格控制在预算内：

| 组件 | 预算 | 内容 |
|------|------|------|
| 行为内核 | 1500 bytes | 8 条核心原则 |
| 项目记忆 | 3000 bytes | 当前问题相关章节 |
| TODO 上下文 | 2000 bytes | 当前 Feature 状态 |
| **总计** | **8000 bytes** | 防止 Hook 卡死 |

**记忆轻量化策略**：
- 每轮完整读取 `PROJECT-MEMORY.md` 用于相关性判断
- 只注入 `Quick facts`、`Reuse map`、`Boundaries` 各一条最相关事实
- 命中时再注入一个相关章节事实
- 不截断事实，不因 additional context 达到某个大小而让 Hook 失败

## PreToolUse 命令防护

`scripts/pre-tool-use.cjs` 在工具调用前执行门禁检查。

### 防护范围

#### 1. 破坏性 Bash 命令

拦截高置信度破坏性操作：
- `rm -rf /`
- `git reset --hard`
- `git clean -fd`
- `git push --force`
- `git push -f`
- `docker system prune -a`

#### 2. 流程写入门禁

存在未完成的新需求状态机时，在推进到 `business-development` 且原子领取 Feature 前，只允许：
- 只读调查（Read、Bash 只读命令）
- 状态机命令（`--plan-*` 系列）
- 规划文档写入

**拦截的工具**：
- `Write`
- `Edit`
- `MultiEdit`
- `NotebookEdit`
- `apply_patch`
- 等价 Shell 写入命令（`echo >`, `cat >`, `sed -i`, ...）

**错误示例**：
```
❌ 在 requirements-analysis 阶段尝试编辑 src/api/user.ts
→ 错误：必须先完成需求确认、技术方案和任务拆分
```

**正确流程**：
```
requirements-analysis
  → requirements-confirmation (--confirmed)
  → technical-plan
  → technical-confirmation (--confirmed)
  → task-breakdown
  → code-generation
  → business-development
  → 原子领取 Feature
  → ✓ 现在可以编辑生产代码
```

### 绕过防护（慎用）

```bash
# 临时禁用命令防护
export AGENT_COMMAND_GUARD=0

# 临时禁用所有 Hook
export AGENT_RUNTIME_HOOKS_DISABLED=1
```

## TODO 工作流状态机

`scripts/todo-continuation.cjs` 管理 Feature 生命周期。

### TODO 路径规范

**唯一路径**：`docs/<developer-id>/tasks/todo/<原文件名>.md`

**developer-id 来源**（优先级从高到低）：
1. 当前 Git 根的 `git config user.name`
2. 系统登录用户名
3. `AGENT_DEVELOPER_NAME` 环境变量

**规则**：
- 每个开发者只能有一个活动 Markdown TODO
- 其他开发者目录完全只读
- 非规范任务目录只用于迁移提示
- `AGENT_TODO_DIR` 只有精确指向当前 Git 根的规范 developer 目录时才生效

### Feature 状态

```markdown
## Tasks

### [ ] FEAT-001: 未开始的功能
- 依赖: 无
- Owner: alice-chen

### [~] FEAT-002: 进行中的功能
- 依赖: `FEAT-001`
- Owner: alice-chen
- 执行实例: main-abc123
- 写集: `/src/auth/`, `/src/api/login.ts`

### [!] FEAT-003: 外部阻塞的功能
- 依赖: `FEAT-002`
- Owner: alice-chen
- 最后执行实例: main-def456
- 阻塞原因: 等待第三方 API 接入

### [x] FEAT-004: 已完成的功能
- 依赖: 无
- Owner: alice-chen
- 写集: `/src/utils/format.ts`
- Git: abc1234 (feat: 实现格式化工具)
```

### Feature 结构

```markdown
### [~] FEAT-ID: Feature 标题
- 依赖: `FEAT-A` | 无
- Owner: developer-id
- 执行实例: runtime-instance-id
- 写集: `/path/to/file1.ts`, `/path/to/dir/`
- AC-001: 验收标准1 -> 证据1
- AC-002: 验收标准2 -> 开发中
- Review: pass | findings待修复
- 验证: Lite | Standard | High-risk
- Git: commit-oid (commit message)
- 规划: 技术方案、复用决策
- 结果: 实现摘要、遗留风险
```

**字段说明**：
- **依赖**：`无` 或反引号 ID（如 `FEAT-001`）
- **Owner**：developer-id
- **执行实例**：runtime instance ID（进行中时有）
- **写集**：文件路径或目录路径，用于并发互斥检查
- **AC-***：验收标准和证据
- **Review**：code-review 结果
- **验证**：Lite / Standard / High-risk
- **Git**：commit OID 和 message
- **规划**：技术决策记录
- **结果**：完成摘要

### Epic 结构

```markdown
### [x] EPIC-001: Epic 标题
Epic 只是完成汇总，不可领取

#### [x] FEAT-001: 子功能1
...

#### [x] FEAT-002: 子功能2
...
```

**规则**：
- Epic 只是同一 TODO 内的完成汇总
- 不可领取，不保存执行实例、依赖、写集
- 最后一个子 Feature 完成时自动变为 `[x]`
- 依赖 Epic 等价于依赖其全部直接子 Feature
- 子 Feature 禁止依赖自己的 Epic

### 依赖管理

**依赖语法**：
```markdown
- 依赖: 无
- 依赖: `FEAT-001`
- 依赖: `FEAT-001`, `FEAT-002`
```

**依赖规则**：
- 每个 ID 必须存在于同一 TODO
- 不能自依赖
- 包含 Epic 汇总边的完整依赖图必须无环
- 若 B 依赖 A，A 为 `[ ]`、`[~]` 或 `[!]` 时 B 都不可领取

### 并发与写集

**写集互斥**：
- 同一 TODO 可以有多个 `[~]`
- 必须是不同 Feature、不同执行实例
- 全部依赖已经 `[x]`
- 写集两两互斥

**写集语法**：
```markdown
- 写集: `/src/auth/login.ts`                    # 单文件
- 写集: `/src/auth/`, `/src/api/auth.ts`        # 目录 + 文件
- 写集: `/src/features/user/`                   # 整个目录
```

**互斥检查**：
- `/src/auth/login.ts` 与 `/src/auth/` 冲突
- `/src/auth/` 与 `/src/api/` 不冲突
- `/src/` 与任何 `/src/` 下的路径冲突

### 状态机命令

#### 领取 Feature

```bash
node runtime-hooks/scripts/todo-continuation.cjs \
  --claim FEAT-ID \
  --instance RUNTIME-ID
```

**前置条件**：
- Feature 状态为 `[ ]`（未开始）
- 全部依赖已 `[x]`
- 写集与其他进行中 Feature 互斥
- 当前实例没有其他进行中 Feature

**效果**：
- 状态变为 `[~]`
- 记录 `执行实例`
- 锁定写集

#### 完成 Feature

```bash
node runtime-hooks/scripts/todo-continuation.cjs \
  --complete FEAT-ID \
  --instance RUNTIME-ID \
  --result 'AC-001 -> evidence; Review: pass'
```

**前置条件**：
- Feature 状态为 `[~]`
- 执行实例匹配
- 每个 `AC-*` 都有 `-> evidence`
- Review: pass
- 写集内确有待提交业务或必要文档改动

**效果**：
- 状态变为 `[x]`
- 清除 `执行实例`
- 记录 Git commit（后续 commit 时）
- 如果是 Epic 最后一个子 Feature，Epic 也变为 `[x]`

**注意**：
- 必须在 commit 前执行
- 不接受 `--commit`
- commit&push 后状态机只读核验，不再写入

#### 阻塞 Feature

```bash
node runtime-hooks/scripts/todo-continuation.cjs \
  --block FEAT-ID \
  --instance RUNTIME-ID \
  --result '等待第三方 API key'
```

**效果**：
- 状态变为 `[!]`
- 记录 `最后执行实例`
- 记录阻塞原因
- 释放写集

#### 释放 Feature

```bash
node runtime-hooks/scripts/todo-continuation.cjs \
  --release FEAT-ID \
  --instance MAIN-ID \
  --supervisor
```

**用途**：
- 旧实例异常退出后主 Agent 释放
- 不按时间自动释放（避免误判长任务）

### Stop Hook 自动状态机

`Stop` Hook 在会话结束时：

1. **检查当前 Feature**：
   - 读取当前实例的 `[~]` Feature
   - 检查是否满足完成条件

2. **完成门禁**：
   - 全部 `AC-*` 都有 `-> evidence`
   - Review: pass
   - 声明验证档位
   - 写集内有待提交业务或必要文档改动

3. **原子完成**：
   - 在锁内把 `[~]` 改为 `[x]`
   - 最后一个 Epic 子 Feature 同时汇总父项 `[x]`

4. **远端交付对账**：
   - `[x]` 尚未进入 upstream 与 remote ref 时返回 `delivery-pending`
   - 禁止领取后继，禁止第二个并行 Feature 准备完成
   - push 后只核验远端 TODO/OID，不再修改 TODO

5. **续作或停止**：
   - 有 Ready Feature → 原子领取继续
   - 无可执行项 → 停止
   - 存在阻塞 → 报告并停止

## 新需求阶段状态机

新项目或尚未规划的新功能必须先建立阶段状态机。

### 阶段流程

```
intake (需求接收)
  ↓
requirements-analysis (需求分析)
  ↓
requirements-confirmation (需求确认) ← 需要 --confirmed
  ↓
technical-plan (技术方案)
  ↓
technical-confirmation (技术确认) ← 需要 --confirmed
  ↓
task-breakdown (任务拆分)
  ↓
code-generation (代码生成)
  ↓
business-development (业务开发) ← 开始领取 Feature
  ↓
code-review (代码审查)
  ↓
test-generation (测试生成)
  ↓
test-run (测试运行)
  ↓
user-acceptance (用户验收)
  ↓
git-delivery (Git 交付)
  ↓
complete (完成)
```

### 状态机命令

#### 启动流程

```bash
node runtime-hooks/scripts/todo-continuation.cjs --plan-start
```

**效果**：
- 在 TODO 中建立 `## 流程状态机`
- 初始阶段：`intake`
- 记录启动时间

#### 推进阶段

```bash
# 普通推进
node runtime-hooks/scripts/todo-continuation.cjs --plan-advance

# 确认推进（requirements-confirmation / technical-confirmation）
node runtime-hooks/scripts/todo-continuation.cjs --plan-advance --confirmed
```

**效果**：
- 原子追加当前阶段产物和结果
- 下一阶段的当前产物与结果重置为 `待生成`
- `已完成阶段` 必须是当前阶段之前的完整前缀

#### 等待确认

```bash
node runtime-hooks/scripts/todo-continuation.cjs --plan-await
```

**用途**：
- 在 `requirements-confirmation` / `technical-confirmation` 等待用户确认

#### 记录阻塞

```bash
node runtime-hooks/scripts/todo-continuation.cjs \
  --plan-block \
  --reason '等待产品经理确认优先级'
```

#### 恢复流程

```bash
node runtime-hooks/scripts/todo-continuation.cjs --plan-resume
```

### PreToolUse 流程门禁

在状态机未到 `business-development` 前，PreToolUse 拒绝生产代码编辑：

```
❌ 在 requirements-analysis 阶段：
   Edit /src/api/user.ts
   → 拒绝：必须先完成需求确认和技术方案

✓ 在 requirements-analysis 阶段：
   Write docs/requirements.md
   → 允许：规划文档写入

✓ 在 business-development 阶段且已领取 Feature：
   Edit /src/api/user.ts
   → 允许：生产代码编辑
```

### 适用与跳过

**适用场景**：
- 新项目
- 尚未规划的新功能
- 需要完整需求和方案过程

**可跳过场景**（直接 Feature 执行）：
- Bug 修复
- 已有完整 PRD 和技术方案
- 简单维护任务

### High-risk 额外要求

TODO 声明为 `High-risk` 时：
- 必须有预算评估
- 必须有回滚方案
- 完成摘要必须包含风险边界、回滚、方案复核和发布检查
- 标记为 `Regression-required`

## 项目记忆自动初始化

### 自动确保机制

`UserPromptSubmit` / `SubagentStart` 自动：

1. **定位目标 Git 仓库**：
   ```bash
   git rev-parse --show-toplevel
   ```

2. **检查 PROJECT-MEMORY.md**：
   - 优先查找根目录 `PROJECT-MEMORY.md`
   - 如已有 `docs/PROJECT-MEMORY.md` 则沿用
   - 不存在则创建

3. **首次填充**：
   - 记忆新建或主要章节为空
   - 自动路由 `init-docs` 采集最小仓库事实
   - 路由 `project-details` 归并到 `PROJECT-MEMORY.md`

4. **按需读取**：
   - 已具备稳定事实后只按问题读取相关摘要
   - 注入预算 3000 bytes（最相关的章节事实）

### 记忆结构

```markdown
# Project Memory

## Quick facts
- 定位：...
- 技术栈：...
- 目录结构：...

## Reuse map
- 复用入口：...
- Owner：...
- 禁止重复实现边界：...

## Boundaries
- 架构边界：...
- 技术禁区：...
- 不引入：...

## Contracts
- Feature 状态约定
- 完成摘要格式
- 命令约定

## Commands
- 常用命令
- 验证命令

## Open decisions
- 待决策事项
```

### 不保存的内容

项目记忆只保存稳定事实，不保存：
- ❌ 任务状态（在 TODO 中）
- ❌ Feature checkbox
- ❌ 执行实例
- ❌ 进度统计
- ❌ HEAD 摘要
- ❌ Context JSON/JSONB
- ❌ 执行日志

## 中文状态提示音

### 三类提示

| 类型 | 触发条件 | 音频文件 | 内容 |
|------|----------|----------|------|
| 确认请求 | `<!-- CONFIRMATION_REQUIRED -->` | `audio/confirmation.wav` | 需要您确认 |
| 回复完成 | 普通回复结束 | `audio/reply-complete.wav` | 回复完成 |
| 任务完成 | `<!-- TASK_COMPLETE -->` | `audio/task-complete.wav` | 任务完成 |

### 使用标记

在回复末尾追加不可见标记：

```markdown
这是回复内容...

<!-- CONFIRMATION_REQUIRED -->
```

或

```markdown
功能已实现、审查通过并推送到远端。

<!-- TASK_COMPLETE -->
```

### 确认标记使用场景

**应该使用**：
- 需要用户决定、补充信息或授权
- 必须等待用户重启服务
- 必须等待用户操作设备
- 必须等待用户切换客户端

**不应该使用**：
- 普通状态更新
- 可选建议
- 部分完成
- 无需用户动作的阻塞汇报

### 任务完成标记使用场景

**应该使用**：
- 代码实现完成
- 必要验证完成
- Review 通过
- 授权 Git 交付完成
- 全部必做项完成

**不应该使用**：
- 部分功能完成
- 等待 Review
- 等待测试
- 等待推送

### 手动触发

```bash
node runtime-hooks/scripts/notify-complete.cjs \
  --source manual \
  '{"type":"confirmation-requested"}'
```

### 禁用提示音

```bash
export AGENT_COMPLETION_SOUND=0
```

或自定义音频文件：
```bash
export AGENT_CONFIRMATION_SOUND_FILE=/path/to/custom.wav
export AGENT_REPLY_COMPLETION_SOUND_FILE=/path/to/custom.wav
export AGENT_TASK_COMPLETION_SOUND_FILE=/path/to/custom.wav
```

## SessionStart 自修复

`scripts/session-start.cjs` 在会话开始时：

1. **检查配置版本**：
   - 比对托管 Hook 配置与仓库版本
   - 已是最新 → 静默
   - 存在差异 → 调用安装器修复

2. **合并、去重、备份**：
   - 不覆盖用户自定义配置
   - 自动备份原配置
   - 生成基于当前系统的命令路径

3. **检查 MCP 注册**：
   - 调用 `penpot-mcp-setup.mjs --check --json`
   - 只读取本地注册状态（`mcp get`）
   - 不执行远端探针或连接

4. **清理遗留**：
   - 移除旧版本遗留的 Penpot 启动命令
   - 保留显式的 Penpot Skill 和 MCP 配置

### 禁用自动更新

```bash
export AGENT_RUNTIME_HOOKS_AUTO_UPDATE=0
```

## 常见问题

### Q: Hook 不生效？
A: Codex 用户需要运行 `/hooks` 并信任 Hook。Claude Code 会自动加载。

### Q: 命令被拦截了？
A: 检查：
1. 是否在规划阶段尝试编辑生产代码
2. 是否有未关闭的 Review finding
3. 如确需绕过：`export AGENT_COMMAND_GUARD=0`

### Q: TODO 状态不更新？
A: 检查：
1. 路径是否为 `docs/<developer-id>/tasks/todo/`
2. developer-id 是否来自 `git config user.name`
3. Feature 是否满足完成条件

### Q: 项目记忆没有自动创建？
A: 检查：
1. 是否在 Git 仓库根目录
2. Hook 是否正确安装
3. 运行 `--check` 查看状态

### Q: 如何查看上下文预算？
A: 
```bash
node runtime-hooks/scripts/skill-catalog-context.cjs --check
```

## 参考资料

- [Runtime Hook README](../runtime-hooks/README.md)
- [behavior-kernel.md](../runtime-hooks/behavior-kernel.md)
- [项目记忆指南](05-project-memory.md)
- [最佳实践](06-best-practices.md)

---

**Runtime Hook 版本**：最新  
**最后更新**：2026-09-03
