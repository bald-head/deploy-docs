# Skill 路由机制

本文档详细说明 Skills Framework 如何通过三层路由机制实现 96%+ 的准确率。

## 路由架构概览

```
用户输入
  ↓
┌─────────────────────────────────────┐
│ Layer 1: Runtime Hook 预处理        │
│ - 注入行为内核                       │
│ - 加载项目记忆相关章节                │
│ - 提供当前 TODO 上下文               │
└─────────────────────────────────────┘
  ↓
┌─────────────────────────────────────┐
│ Layer 2: Frontmatter 元数据匹配      │
│ - triggers: 触发词匹配               │
│ - gates: 前置条件检查                │
│ - conflicts: 冲突解决                │
└─────────────────────────────────────┘
  ↓
┌─────────────────────────────────────┐
│ Layer 3: 决策树路由 (skill-router)   │
│ - 74 个典型场景                      │
│ - 587 个触发词库                     │
│ - 优先级排序                         │
└─────────────────────────────────────┘
  ↓
选择最佳 Skill → 加载完整 SKILL.md
```

## Layer 1: Runtime Hook 预处理

### UserPromptSubmit Hook

在用户输入被处理前注入上下文：

```javascript
// 伪代码示例
function userPromptSubmit(input) {
  // 1. 注入行为内核
  context.behaviorKernel = loadBehaviorKernel();
  
  // 2. 确保项目记忆存在
  ensureProjectMemory(currentRepo);
  
  // 3. 加载相关记忆章节
  context.relevantFacts = selectRelevantMemory(input);
  
  // 4. 提供当前 TODO 状态
  if (hasActiveTodo()) {
    context.currentFeature = loadCurrentFeature();
    context.todoPath = getTodoPath();
  }
  
  // 5. 提示适用的 Skill
  context.suggestedSkills = findCandidateSkills(input);
  
  return context;
}
```

### 上下文预算控制

Runtime Hook 严格控制注入的上下文大小：

| 组件 | 预算 | 说明 |
|------|------|------|
| 行为内核 | 1500 bytes | 跨客户端统一原则 |
| 项目记忆 | 3000 bytes | 当前问题相关章节 |
| TODO 上下文 | 2000 bytes | 当前 Feature 状态 |
| **总计** | **8000 bytes** | 防止 Hook 卡死 |

**查看当前预算使用情况**：
```bash
node runtime-hooks/scripts/skill-catalog-context.cjs --check
```

## Layer 2: Frontmatter 元数据

每个 Skill 的 `SKILL.md` 顶部包含结构化的路由元数据。

### Frontmatter 结构

```yaml
---
name: skill-name
description: "一句话说明核心用途和边界"
category: frontend|backend|git|product|...
tags: [tag1, tag2]
priority: critical|high|medium|low|fallback

triggers:
  zh: [中文触发词1, 中文触发词2, ...]
  en: [English trigger 1, English trigger 2, ...]

gates:
  - "前置条件1：必须满足才能触发"
  - "前置条件2：避免过早触发"
  - "前置条件3：确保输入完整"

conflicts:
  other-skill: "职责边界说明，解决歧义"
  another-skill: "A负责X；B负责Y"

related_skills:
  before: [skill-a, skill-b]    # 依赖的前置 Skill
  after: [skill-c, skill-d]     # 后续应该进入的 Skill
  complement: [skill-e, skill-f] # 可以协作调用的 Skill

not_for: [不适用场景1, 不适用场景2]
---
```

### Triggers（触发词）

**设计原则**：
- 中文至少 5-7 个触发词，包含口语化表达
- 英文至少 3-5 个触发词
- 覆盖专业术语和日常用语

**示例**：
```yaml
triggers:
  zh:
    - 需求改了      # 口语化
    - 需求变了      # 口语化
    - 影响分析      # 专业术语
    - 变更影响      # 专业术语
    - 加一个字段    # 具体场景
    - 加字段        # 简化表达
  en:
    - impact analysis
    - change impact
    - scope change
```

### Gates（前置条件）

**作用**：
1. 避免过早触发
2. 确保输入完整
3. 防止职责越界

**示例 1：tech-decision**
```yaml
gates:
  - "已有批准需求或明确 Feature 范围"
  - "尚未开始生产代码编辑"
  - "存在多个可行技术方案需要比较"
```

**示例 2：frontend-design**
```yaml
gates:
  - "已消费完整产品定义（或明确不需要产品构思）"
  - "已明确交付面包含 Web/App/Desktop"
  - "非已有页面的纯视觉精修（纯精修用 frontend-polish）"
```

### Conflicts（冲突解决）

**作用**：明确职责边界，消除歧义。

**示例 1：frontend-design vs frontend-polish**
```yaml
# frontend-design/SKILL.md
conflicts:
  frontend-polish: "frontend-polish 负责优化已有页面；新页面或重构页面的设计用 frontend-design"
```

**决策逻辑**：
- 用户说"设计页面" → 检查是否已有页面实现
  - 无实现 → `frontend-design`
  - 已有实现 → `frontend-polish`

**示例 2：crud vs crud-development**
```yaml
# crud/SKILL.md
conflicts:
  crud-development: "crud 负责调用或开发代码生成器；crud-development 负责手工实现 CRUD 业务"
```

**决策逻辑**：
- 用户说"开发 CRUD 功能" → 检查是否有代码生成器
  - 有生成器 → `crud`
  - 无生成器 → `crud-development`

**示例 3：security-guard vs data-permission**
```yaml
# security-guard/SKILL.md
conflicts:
  data-permission: "security-guard 负责认证授权和安全防护；data-permission 负责行级字段级数据权限"
```

**决策逻辑**：
- 用户说"权限" → 检查是否涉及数据行级/字段级
  - 涉及数据权限 → `data-permission`
  - 涉及功能权限 → `security-guard`

### Related Skills（依赖关系）

**before（前置依赖）**：
通常应该在当前 Skill 之前执行的 Skill。

```yaml
# frontend-design/SKILL.md
related_skills:
  before: [product-manager, brainstorm]
```

**after（后续 Skill）**：
完成后应该进入的 Skill。

```yaml
# frontend-design/SKILL.md
related_skills:
  after: [ui-pc, ui-app, frontend-polish]
```

**complement（协作 Skill）**：
可以配合调用的 Skill，不强制顺序。

```yaml
# frontend-design/SKILL.md
related_skills:
  complement: [review-animations, animation-vocabulary]
```

## Layer 3: 决策树路由

### skill-router.yaml 结构

决策树定义了 74 个典型用户场景和路由规则：

```yaml
scenarios:
  - id: need-change
    priority: critical
    triggers:
      - 需求改了
      - 需求变了
      - 加字段
    conditions:
      - has_approved_scope: true
      - has_real_change: true
    recommended_skill: change-impact-analysis
    
  - id: new-feature
    priority: high
    triggers:
      - 开发新功能
      - 实现功能
    conditions:
      - has_prd: false
    recommended_skill: product-manager
    fallback: universal-development
```

### 路由优先级

```
critical (1 个)
  ↓
high (19 个)
  ↓
medium (30 个)
  ↓
low (44 个)
  ↓
fallback (1 个: universal-development)
```

### 587 个触发词库

决策树汇总了所有 Skill 的触发词，形成完整的路由词库：

- **中文触发词**：约 400 个
- **英文触发词**：约 187 个
- **覆盖场景**：74 个典型场景

## 完整路由流程

### 步骤 1：触发词匹配

```
用户输入："需求改了，用户表要加一个 avatar 字段"
  ↓
触发词匹配：
  - "需求改了" → change-impact-analysis (critical)
  - "加一个" → change-impact-analysis (critical)
  - "字段" → database-design (high)
  ↓
候选 Skill: [change-impact-analysis, database-design]
```

### 步骤 2：前置条件检查

```
检查 change-impact-analysis 的 gates:
  ✓ "已有批准的范围、契约或交付面"
  ✓ "发生真实变化"
  ✓ "存在唯一 TODO 文件需要更新"
  
检查 database-design 的 gates:
  ✗ "尚未有相关表设计"（已有用户表）
  ↓
通过 gates: [change-impact-analysis]
```

### 步骤 3：冲突解决

```
检查 conflicts:
  change-impact-analysis.conflicts:
    product-manager: "product-manager 负责新项目；
                      change-impact-analysis 负责已有范围变更"
  ↓
当前场景: 已有用户表（已有范围） → change-impact-analysis
```

### 步骤 4：最终选择

```
最终选择: change-impact-analysis
优先级: critical
置信度: 96%+
```

### 步骤 5：加载并执行

```
加载完整规则:
  /path/to/skills/change-impact-analysis/SKILL.md
  
执行 Skill:
  1. 建立变化 Diff
  2. 完整影响闭包分析
  3. 更新受影响的 Feature
  4. 原位更新 TODO
```

## 冲突解决示例

### 场景 1："优化页面"

**候选 Skill**：
- `frontend-design`：触发词"页面设计"
- `frontend-polish`：触发词"优化页面"

**Gates 检查**：
```yaml
# frontend-design
gates:
  - "非已有页面的纯视觉精修"

# frontend-polish  
gates:
  - "已有页面实现"
  - "主要是视觉、交互、布局优化"
```

**Conflicts 规则**：
```yaml
# frontend-design
conflicts:
  frontend-polish: "frontend-polish 负责优化已有页面；
                    新页面或重构页面的设计用 frontend-design"
```

**决策**：
- 如果页面已存在 → `frontend-polish`
- 如果是新页面 → `frontend-design`

### 场景 2："提交代码"

**候选 Skill**：
- `git-commit`：触发词"提交"
- `git-workflow`：触发词"Git操作"

**Gates 检查**：
```yaml
# git-commit
gates:
  - "用户已明确授权提交或推送"
  - "不存在未关闭的严重/重要 Review finding"
  - "目标文件范围明确"

# git-workflow
gates:
  - "需要分支、合并、冲突或历史操作"
```

**Conflicts 规则**：
```yaml
# git-commit
conflicts:
  git-workflow: "git-workflow 负责分支、合并、冲突和历史操作；
                 git-commit 负责普通提交和推送"
```

**决策**：
- 普通提交推送 → `git-commit`
- 分支合并、冲突解决 → `git-workflow`

### 场景 3："权限"

**候选 Skill**：
- `security-guard`：触发词"权限"
- `data-permission`：触发词"数据权限"

**Gates 检查**：
```yaml
# security-guard
gates:
  - "涉及认证、授权、访问控制"
  - "不涉及行级字段级数据权限"

# data-permission
gates:
  - "涉及行级、字段级数据权限"
  - "涉及租户边界"
```

**Conflicts 规则**：
```yaml
# security-guard
conflicts:
  data-permission: "security-guard 负责认证授权和安全防护；
                    data-permission 负责行级字段级数据权限"
```

**决策**：
- 功能权限、访问控制 → `security-guard`
- 数据行级/字段级权限 → `data-permission`

## 路由准确率

基于 Phase 3 增强后的数据：

| 指标 | 数值 |
|------|------|
| 场景覆盖率 | 74/74 (100%) |
| 触发词总数 | 587 个 |
| 路由准确率 | 96%+ |
| 歧义场景 | 2/74 (通过 conflicts 解决) |
| 平均触发词数 | 7 个/Skill |

### 准确率提升路径

```
Phase 1: 决策树 (skill-router.yaml)
  基线: 93.3%
  ↓
Phase 2: Runtime Hook 集成
  提升: +1.0pp → 94.3%
  ↓
Phase 3: Frontmatter 增强
  提升: +2.7pp → 96%+
  - 口语化触发词: +1.0pp
  - conflicts 规则: +1.2pp
  - gates 前置条件: +0.5pp
```

## 如何添加新 Skill 的路由元数据

### 1. 定义 Triggers

至少 5-7 个中文触发词 + 3-5 个英文触发词：

```yaml
triggers:
  zh:
    - 专业术语1
    - 专业术语2
    - 口语化表达1
    - 口语化表达2
    - 具体场景1
    - 具体场景2
    - 简化表达
  en:
    - technical term 1
    - technical term 2
    - common phrase
```

### 2. 定义 Gates

2-3 个明确的前置条件：

```yaml
gates:
  - "输入完整性条件"
  - "避免过早触发条件"
  - "职责边界条件"
```

### 3. 定义 Conflicts

找出职责相似的 Skill，明确边界：

```yaml
conflicts:
  similar-skill-1: "similar-skill-1 负责X；当前 Skill 负责Y"
  similar-skill-2: "按Z条件区分：满足Z用similar-skill-2，否则用当前"
```

### 4. 定义 Related Skills

```yaml
related_skills:
  before: [通常在之前的Skill]
  after: [通常在之后的Skill]
  complement: [可协作的Skill]
```

### 5. 验证并同步

```bash
# 验证 frontmatter 格式
node add-skill/scripts/validate-skill-catalog.mjs --check

# 同步到 SKILLS.md
node add-skill/scripts/validate-skill-catalog.mjs --write
```

## 调试路由问题

### 问题 1：Skill 没有被触发

**排查步骤**：
1. 检查触发词是否覆盖用户输入
2. 检查 gates 是否过于严格
3. 查看是否被更高优先级 Skill 覆盖

```bash
# 查看当前 Skill 元数据
grep -A 20 "^name: your-skill" your-skill/SKILL.md
```

### 问题 2：错误的 Skill 被触发

**排查步骤**：
1. 检查是否存在职责重叠
2. 添加或完善 conflicts 规则
3. 调整 gates 前置条件

```yaml
# 添加 conflicts
conflicts:
  wrong-skill: "明确职责边界说明"
```

### 问题 3：多个 Skill 歧义

**解决方案**：
1. 在更高优先级 Skill 中添加 conflicts
2. 使用 gates 区分适用场景
3. 调整触发词避免重叠

## 最佳实践

### 1. 触发词设计
- ✅ 包含口语化表达："需求改了"
- ✅ 包含专业术语："影响分析"
- ✅ 包含具体场景："加字段"
- ❌ 过于宽泛："处理"
- ❌ 过于生僻：只有专家才懂的术语

### 2. Gates 设计
- ✅ 可验证的条件："已有批准需求"
- ✅ 明确的边界："尚未开始生产代码"
- ❌ 模糊的条件："可能需要"
- ❌ 难以判断："比较复杂"

### 3. Conflicts 设计
- ✅ 明确职责边界："A负责X；B负责Y"
- ✅ 提供判断条件："按Z区分"
- ❌ 模糊说明："类似但不同"
- ❌ 循环引用："用A或B都可以"

### 4. 优先级设置
- **Critical**：核心流程，必须最先匹配
- **High**：高频使用，常见场景
- **Medium**：专业领域，特定场景
- **Low**：辅助功能，低频使用
- **Fallback**：兜底能力，最后匹配

## 参考资料

- [Phase 3 完整报告](../docs/phase3-frontmatter-enhancement-complete.md)
- [behavior-kernel.md](../runtime-hooks/behavior-kernel.md)
- [SKILLS.md](../SKILLS.md)

---

**路由系统版本**：Phase 3 Complete  
**准确率**：96%+  
**最后更新**：2026-09-03
