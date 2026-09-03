# 入门指南

本指南帮助你快速上手 AI Software Engineering Skills Framework。

## 系统要求

- **Node.js**: >= 18.0.0
- **客户端**: Claude Code 或 Codex CLI
- **操作系统**: macOS / Linux / Windows
- **Git**: 用于项目版本管理

## 安装步骤

### 1. 获取 Skills 源码

Skills Framework 通常位于：
```bash
/Users/macos/.agent-workflow/skills  # macOS
```

如果你还没有，可以从源仓库克隆：
```bash
git clone <skills-repo-url> ~/.agent-workflow/skills
```

### 2. 安装 Runtime Hooks

Runtime Hooks 提供跨客户端的行为内核、项目记忆、TODO 工作流和命令防护。

```bash
cd ~/.agent-workflow/skills
node runtime-hooks/scripts/install.mjs
```

安装器会：
- 检测当前使用的客户端（Claude Code 或 Codex）
- 合并并去重现有配置
- 在修改前自动备份
- 注册 `PreToolUse`、`UserPromptSubmit`、`SubagentStart`、`Stop` 等 Hook

**Codex 用户额外步骤**：
```bash
# 在 Codex 中运行
/hooks

# 审查并信任新的非托管 Hook：
# - SessionStart
# - PreToolUse  
# - UserPromptSubmit
# - SubagentStart
# - SubagentStop
# - Stop
```

### 3. 配置 Skill 发现

让客户端能够发现所有 Skill：

**Claude Code**:
```bash
# 创建软链接到个人 Skill 目录
ln -s ~/.agent-workflow/skills ~/.claude/skills

# 或者如果使用镜像
cp -r ~/.agent-workflow/skills/* ~/.claude/skills/
```

**Codex**:
```bash
# 创建软链接到个人 Skill 目录
ln -s ~/.agent-workflow/skills ~/.agents/skills

# 或者如果使用镜像
cp -r ~/.agent-workflow/skills/* ~/.agents/skills/
```

**注意**：软链接适合开发者维护源码；镜像适合客户端主动管理目录的情况。

### 4. 验证安装

运行完整性检查：

```bash
cd ~/.agent-workflow/skills
node add-skill/scripts/validate-skill-catalog.mjs --check
```

检查内容：
- ✅ Runtime Hook 已安装
- ✅ Penpot MCP 已注册（如需要）
- ✅ Skill frontmatter 格式正确
- ✅ 目录结构完整
- ✅ 上下文预算控制有效

预期输出：
```
✓ Runtime Hooks installed
✓ 95 Skills discovered
✓ Frontmatter validation passed
✓ Context budget: 8000 bytes (behavior-kernel: 1500, project-memory: 3000, TODO: 2000)
✓ No conflicts detected
```

### 5. 可选：配置环境变量

根据需要添加到 `~/.zshrc` 或 `~/.bashrc`：

```bash
# 仅在 Git identity 与系统用户名都不可用时提供
export AGENT_DEVELOPER_NAME=alice-chen

# 仅允许指向当前 Git 根内当前 developer 的规范目录
export AGENT_TODO_DIR=/repo/docs/alice-chen/tasks/todo

# 仅在 Harness 未提供 session_id/agent_id 时显式兜底
export AGENT_RUNTIME_INSTANCE_ID=worker-a

# 禁用功能（不推荐）
export AGENT_RUNTIME_HOOKS_DISABLED=1          # 禁用所有 Hook
export AGENT_COMMAND_GUARD=0                    # 仅禁用命令防护
export AGENT_RUNTIME_HOOKS_AUTO_UPDATE=0       # 禁用自动更新
export AGENT_COMPLETION_SOUND=0                 # 禁用提示音

# 自定义提示音
export AGENT_CONFIRMATION_SOUND_FILE=/path/to/confirm.wav
export AGENT_REPLY_COMPLETION_SOUND_FILE=/path/to/reply.wav
export AGENT_TASK_COMPLETION_SOUND_FILE=/path/to/task.wav
```

## 基本概念

### Skill

独立的专业能力单元，每个 Skill 是一个目录：

```
skill-name/
├── SKILL.md           # 完整规则和执行逻辑
├── references/        # 参考资源（可选）
│   ├── examples.md
│   └── patterns.md
└── scripts/           # 辅助脚本（可选）
```

**frontmatter 元数据**（位于 SKILL.md 顶部）：

```yaml
---
name: skill-name
description: "一句话说明核心用途和边界"
category: frontend|backend|git|product|...
tags: [tag1, tag2]
priority: critical|high|medium|low|fallback

triggers:
  zh: [中文触发词列表]
  en: [English triggers]

gates:
  - "前置条件1"
  - "前置条件2"

conflicts:
  other-skill: "职责边界说明"

related_skills:
  before: [依赖的前置Skill]
  after: [后续Skill]
  complement: [协作Skill]

not_for: [不适用场景]
---
```

### Runtime Hook

在客户端关键节点注入的轻量脚本：

| Hook | 触发时机 | 作用 |
|------|----------|------|
| **SessionStart** | 会话开始 | 自修复 Hook 配置、检查 MCP 注册 |
| **UserPromptSubmit** | 用户输入前 | 注入行为内核、项目记忆、TODO 提醒 |
| **SubagentStart** | 子智能体启动 | 注入上下文、确保项目记忆存在 |
| **PreToolUse** | 工具调用前 | 命令防护、流程门禁 |
| **Stop** / **SubagentStop** | 会话结束 | TODO 状态机、远端交付对账 |

### 项目记忆 (PROJECT-MEMORY.md)

每个业务项目根目录的单一真相源：

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

## Contracts
- Feature 状态约定
- 完成摘要格式
- 命令约定
```

**自动初始化**：
- `UserPromptSubmit` / `SubagentStart` 自动确保存在
- 新建或主要章节为空时自动路由 `init-docs → project-details`
- 稳定事实原位归并，不生成副本

### TODO 工作流

每个开发者唯一的任务清单：

**路径**: `docs/<developer-id>/tasks/todo/<name>.md`

**Feature 状态**:
- `[ ]` 未开始
- `[~]` 进行中（已被某个 runtime instance 领取）
- `[!]` 外部阻塞
- `[x]` 已完成（代码已推送到远端）

**结构示例**:
```markdown
## Tasks

### [x] FEAT-001: 用户登录
- 依赖: 无
- Owner: alice-chen
- 执行实例: main-abc123
- 写集: `/src/auth/`, `/src/api/login.ts`
- AC-001: 用户可输入用户名密码登录 -> ✓ 手工验证通过
- AC-002: 登录失败显示错误提示 -> ✓ 截图 evidence/login-error.png
- Review: pass (git-commit/code-review)
- 验证: Standard - 开发者自验 + code-review
- Git: abc1234 (feat: 实现用户登录功能)

### [~] FEAT-002: 用户注册
- 依赖: `FEAT-001`
- Owner: alice-chen
- 执行实例: main-def456
- 写集: `/src/auth/register.ts`, `/src/api/users.ts`
- AC-001: 用户可输入信息注册 -> 开发中
- AC-002: 注册成功自动登录 -> 待验证

### [ ] FEAT-003: 密码重置
- 依赖: `FEAT-001`
- Owner: alice-chen
- 写集: `/src/auth/reset.ts`
```

## 第一个 Skill 调用

### 示例 1：需求变更分析

当已有需求需要修改时：

**用户输入**:
```
需求改了，用户表需要加一个 avatar 字段
```

**路由过程**:
1. `UserPromptSubmit` Hook 注入行为内核和项目记忆
2. 触发词匹配："需求改了" → `change-impact-analysis`
3. 前置条件检查：✓ 已有批准范围，✓ 真实变化，✓ 存在 TODO
4. 加载 `change-impact-analysis/SKILL.md`
5. 执行影响分析

**输出**:
- 识别受影响的 Feature（用户模块、API、数据库、前端页面）
- 更新 TODO 文件对应 Feature 的 AC 和写集
- 生成变更摘要

### 示例 2：新功能开发

**用户输入**:
```
开发一个商品管理功能，包含列表、详情、新增、编辑、删除
```

**路由过程**:
1. 触发词匹配："开发" → `universal-development` / `crud-development`
2. 前置条件检查：✗ 缺少产品定义和 TODO
3. 自动路由到 `product-manager`
4. 完成产品定义后路由到 `project-manager` 生成 TODO
5. 再路由到 `crud-development` 执行开发

**输出**:
- 完整的产品定义（用户旅程、验收标准）
- 结构化的 TODO（5 个 Feature：列表、详情、新增、编辑、删除）
- 数据库表设计和迁移
- API 实现
- 前端页面
- 代码审查和测试

### 示例 3：代码审查

**用户输入**:
```
审查最近的提交
```

**路由过程**:
1. 触发词匹配："审查" → `code-review`
2. 读取 `git diff HEAD~1`
3. 执行完整审查

**输出**:
- 缺陷列表（按严重程度分级）
- 安全问题
- 性能建议
- 代码规范检查
- 修复建议

## 常见问题

### Q: Hook 安装后不生效？
A: Codex 用户需要运行 `/hooks` 并信任新 Hook。Claude Code 会自动加载。

### Q: 提示找不到 Skill？
A: 检查软链接是否正确：
```bash
ls -la ~/.claude/skills  # Claude Code
ls -la ~/.agents/skills  # Codex
```

### Q: 项目记忆文件在哪里？
A: 在业务项目根目录的 `PROJECT-MEMORY.md`，如果已有 `docs/PROJECT-MEMORY.md` 则沿用。

### Q: TODO 文件在哪里？
A: `docs/<developer-id>/tasks/todo/<name>.md`，其中 `<developer-id>` 来自 `git config user.name`。

### Q: 如何查看当前上下文预算？
A: 
```bash
node runtime-hooks/scripts/skill-catalog-context.cjs --check
```

### Q: 如何禁用某个 Skill？
A: 从 `~/.claude/skills` 或 `~/.agents/skills` 中删除对应目录。

### Q: 命令防护拦截了我的操作怎么办？
A: 
1. 检查是否有未关闭的 Review finding
2. 确认是否在规划阶段尝试编辑生产代码
3. 如确实需要，可临时禁用：`export AGENT_COMMAND_GUARD=0`

## 下一步

- 浏览 [Skill 目录](02-skill-catalog.md) 了解所有可用能力
- 学习 [路由机制](03-skill-routing.md) 理解如何选择 Skill
- 查看 [最佳实践](06-best-practices.md) 学习常见场景

---

**提示**：安装过程中遇到问题，可以查看 `runtime-hooks/README.md` 获取详细说明。
