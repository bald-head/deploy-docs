# AI Software Engineering Skills Framework

面向 Claude Code、Codex 等 AI Coding Agent 的研发 SOP 与 Skill 插件框架。

## 核心特性

### 🎯 精确路由系统
- **96%+ 路由准确率**：基于 587 个触发词、74 个场景的智能路由
- **三层路由机制**：frontmatter 元数据 + 决策树 + Runtime Hook 动态提示
- **冲突自动解决**：通过 conflicts 规则消除职责歧义

### 🔌 95+ 专业 Skills
- **全栈覆盖**：产品管理、架构设计、前后端开发、测试、Git、安全等
- **即插即用**：每个 Skill 自包含规则、资源和示例
- **按需加载**：只在命中时读取完整规则，保持轻量上下文

### 🤖 Runtime Hook 集成
- **行为内核**：跨客户端统一的最小行为原则
- **项目记忆**：自动维护单一 `PROJECT-MEMORY.md`，稳定事实原位归并
- **TODO 工作流**：每个开发者唯一的功能任务清单，支持依赖、并发、状态机
- **命令防护**：PreToolUse 门禁拦截破坏性命令和越界写入

### 📋 项目记忆系统
- **单一真相源**：每个项目唯一的 `PROJECT-MEMORY.md`
- **按需归并**：稳定事实、复用地图、边界当轮原位更新
- **轻量上下文**：只注入当前问题相关的章节事实

## 快速开始

### 1. 安装 Runtime Hooks

```bash
cd /path/to/skills
node runtime-hooks/scripts/install.mjs
```

安装后 Codex 用户需运行 `/hooks` 并信任新 Hook。

### 2. 配置 Skill 发现

**Claude Code**:
```bash
ln -s /path/to/skills ~/.claude/skills
```

**Codex**:
```bash
ln -s /path/to/skills ~/.agents/skills
```

### 3. 验证安装

```bash
node add-skill/scripts/validate-skill-catalog.mjs --check
```

### 4. 开始使用

只需自然表达需求，路由系统会自动选择合适的 Skill：

- "需求改了" → `change-impact-analysis`
- "设计页面" → `frontend-design`
- "开发功能" → `universal-development`
- "提交代码" → `git-commit`
- "审查代码" → `code-review`

## 文档导航

| 文档 | 说明 |
|------|------|
| [入门指南](01-getting-started.md) | 安装配置、基本概念、第一个调用 |
| [Skill 目录](02-skill-catalog.md) | 95 个 Skill 的完整列表和使用场景 |
| [路由机制](03-skill-routing.md) | frontmatter、决策树、冲突解决详解 |
| [Runtime Hook](04-runtime-hooks.md) | Hook 类型、工作流状态机、命令防护 |
| [项目记忆](05-project-memory.md) | PROJECT-MEMORY.md 结构与最佳实践 |
| [最佳实践](06-best-practices.md) | 常见场景最佳路径、注意事项 |
| [开发指南](07-development-guide.md) | 如何创建新 Skill、贡献流程 |

## 核心概念

### Skill
独立的专业能力单元，每个 Skill 包含：
- `SKILL.md`：完整规则和执行逻辑
- `frontmatter`：路由元数据（触发词、前置条件、冲突解决）
- `references/`：必要的参考资源

### Runtime Hook
在客户端关键节点注入的轻量脚本：
- **UserPromptSubmit**：用户输入时注入行为内核和项目记忆
- **SubagentStart**：子智能体启动时注入上下文
- **PreToolUse**：工具调用前执行命令防护和流程门禁
- **Stop**：会话结束时执行 TODO 状态机

### 项目记忆
每个业务项目根目录的 `PROJECT-MEMORY.md`：
- **Quick facts**：项目定位、技术栈、目录结构
- **Reuse map**：复用入口、Owner、禁止重复实现的边界
- **Boundaries**：架构边界、技术禁区
- **Contracts**：Feature 状态、完成摘要、命令约定

### TODO 工作流
每个开发者唯一的任务清单 `docs/<developer-id>/tasks/todo/<name>.md`：
- **Feature 状态**：`[ ]` 未开始、`[~]` 进行中、`[!]` 阻塞、`[x]` 完成
- **依赖管理**：Feature 依赖链、并发写集互斥
- **原子状态机**：领取、完成、阻塞、释放的 compare-and-set

## 架构原则

### 事实先行
先读取适用规则、仓库事实和已批准边界；信息不足时明确缺口，不猜测。

### 简单优先
选择满足目标的最简单方案，不为假设需求增加抽象、兼容层或流程。

### 最小写集
只修改目标直接需要的文件与行为，保留无关现状。

### 目标驱动
以可观察用户结果、验收和新鲜证据判断完成，不以文档、代码量或自报状态替代。

### 按需加载
Harness 原生提供 Skill 路由元数据；Hook 不重复注入清单，命中后再读取对应规则。

### 有界推进
已授权且边界明确时直接执行；只有真实决策、越界或高风险不可逆动作才停门。

## 典型工作流

### 新功能开发
```
用户需求
  ↓
change-impact-analysis (如需要)
  ↓
product-manager (产品定义)
  ↓
frontend-design (如有界面)
  ↓
architecture-design (架构设计)
  ↓
tech-decision (技术选型)
  ↓
project-manager (生成 TODO)
  ↓
universal-development / crud-development (实现)
  ↓
code-review (审查)
  ↓
test-development (如需要)
  ↓
git-commit (提交推送)
  ↓
update-status (更新状态)
```

### Bug 修复
```
用户报告
  ↓
bug-detective (排查)
  ↓
universal-development (修复)
  ↓
code-review (审查)
  ↓
git-commit (提交推送)
```

### 代码审查
```
代码变更
  ↓
code-review (完整审查)
  ↓
universal-development (修复 findings)
  ↓
code-review (复核)
  ↓
git-commit (提交推送)
```

## 常见问题

### Q: 如何选择合适的 Skill？
A: 直接用自然语言描述需求，路由系统会自动选择。也可以查看 [Skill 目录](02-skill-catalog.md) 了解所有可用 Skill。

### Q: 多个 Skill 冲突怎么办？
A: 路由系统通过 frontmatter 的 `conflicts` 规则自动解决。例如"优化页面"会根据是否已有实现选择 `frontend-design` 或 `frontend-polish`。

### Q: 如何禁用某个 Skill？
A: 从 `~/.claude/skills` 或 `~/.agents/skills` 中删除对应目录即可。

### Q: 项目记忆文件太大怎么办？
A: Runtime Hook 只注入当前问题相关的章节事实（预算 3000 bytes），完整文件只在需要时读取。

### Q: TODO 状态机是强制的吗？
A: 对新项目或新功能强制。简单 Bug 修复或已有明确 TODO 的任务可直接执行。

## 技术规格

- **Skill 数量**：95 个（94 个公共 + 1 个系统）
- **路由准确率**：96%+
- **场景覆盖**：74 个典型场景
- **触发词**：587 个（中英文）
- **客户端支持**：Claude Code、Codex
- **Node 版本**：>=18.0.0

## 许可与贡献

- 源仓库：`/Users/macos/.agent-workflow/skills`
- 发现目录：`~/.claude/skills` (Claude Code) / `~/.agents/skills` (Codex)
- 贡献流程：见 [开发指南](07-development-guide.md)

## 下一步

- 阅读 [入门指南](01-getting-started.md) 完成配置
- 浏览 [Skill 目录](02-skill-catalog.md) 了解所有能力
- 查看 [最佳实践](06-best-practices.md) 学习常见场景

---

**文档版本**：1.0.0  
**最后更新**：2026-09-03
