# 开发指南

本文档指导如何创建新 Skill、贡献代码和参与 Skills Framework 开发。

## 创建新 Skill

### 前置检查

创建新 Skill 前先确认：

1. **是否已有类似 Skill**：
   ```bash
   grep -r "类似功能关键词" */SKILL.md
   ```

2. **是否可以扩展现有 Skill**：
   - 功能相似但场景不同
   - 可以通过 gates 或 conflicts 区分

3. **是否真的需要独立 Skill**：
   - 有明确的职责边界
   - 有独特的触发场景
   - 不与现有 Skill 重叠

### 步骤 1：创建目录结构

```bash
cd /path/to/skills

# 创建 Skill 目录
mkdir my-new-skill

# 创建必要文件
touch my-new-skill/SKILL.md

# 创建可选目录
mkdir my-new-skill/references
mkdir my-new-skill/scripts
```

**目录结构**：
```
my-new-skill/
├── SKILL.md              # 必需：完整规则和执行逻辑
├── references/           # 可选：参考资源
│   ├── examples.md
│   ├── patterns.md
│   └── checklist.md
└── scripts/              # 可选：辅助脚本
    ├── validate.mjs
    └── generate.mjs
```

### 步骤 2：编写 Frontmatter

在 `SKILL.md` 顶部添加结构化元数据：

```yaml
---
name: my-new-skill
description: "一句话说明核心用途和关键边界；不超过 100 字"
category: frontend|backend|git|product|infrastructure|special
tags: [tag1, tag2, tag3]
priority: critical|high|medium|low|fallback

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
    - specific scenario

gates:
  - "前置条件1：确保输入完整"
  - "前置条件2：避免过早触发"
  - "前置条件3：明确职责边界"

conflicts:
  similar-skill-1: "similar-skill-1 负责X；当前 Skill 负责Y"
  similar-skill-2: "按Z条件区分：满足Z用similar-skill-2，否则用当前"

related_skills:
  before: [skill-a, skill-b]    # 通常在之前执行的 Skill
  after: [skill-c, skill-d]     # 完成后应该进入的 Skill
  complement: [skill-e, skill-f] # 可以协作调用的 Skill

not_for: [不适用场景1, 不适用场景2, 不适用场景3]
---
```

**字段说明**：

- **name**：Skill 标识符，小写字母、数字、连字符
- **description**：一句话说明，不超过 100 字
- **category**：分类（frontend / backend / git / product / infrastructure / special）
- **tags**：标签列表，方便搜索
- **priority**：优先级（critical / high / medium / low / fallback）
- **triggers.zh**：至少 5-7 个中文触发词
- **triggers.en**：至少 3-5 个英文触发词
- **gates**：2-3 个明确的前置条件
- **conflicts**：与职责相似 Skill 的边界说明
- **related_skills**：依赖和协作关系
- **not_for**：明确不适用的场景

### 步骤 3：编写 Skill 正文

在 frontmatter 后编写完整规则：

```markdown
---
[frontmatter]
---

<!-- 一段简介，说明 Skill 的用途、边界和工作方式 -->

## 触发与边界

<!-- 详细说明何时触发、何时不触发 -->

以下场景使用：
- 场景1
- 场景2

以下场景不使用：
- 场景3
- 场景4

## 输入与前置条件

<!-- 说明需要哪些输入，如何验证前置条件 -->

必须输入：
- 输入1
- 输入2

可选输入：
- 输入3

前置检查：
- 检查1
- 检查2

## 执行流程

<!-- 详细的执行步骤 -->

### 步骤 1：准备阶段
...

### 步骤 2：执行阶段
...

### 步骤 3：验证阶段
...

## 输出与交付

<!-- 说明输出什么，如何交付 -->

必须输出：
- 输出1
- 输出2

可选输出：
- 输出3

交付方式：
- 更新文件X
- 调用 Skill Y

## 质量门禁

<!-- 定义完成标准 -->

必须满足：
- 条件1
- 条件2

可选满足：
- 条件3

## 错误处理

<!-- 说明异常情况如何处理 -->

常见错误：
- 错误1 → 处理方式
- 错误2 → 处理方式

## 示例

<!-- 提供实际使用示例 -->

### 示例 1：简单场景
...

### 示例 2：复杂场景
...
```

### 步骤 4：添加参考资源（可选）

如果 Skill 需要参考资源，在 `references/` 中创建：

```bash
# 示例模式
cat > my-new-skill/references/examples.md << 'EOF'
# Examples

## Example 1: Basic Usage
...

## Example 2: Advanced Usage
...
EOF

# 检查清单
cat > my-new-skill/references/checklist.md << 'EOF'
# Checklist

## Pre-execution
- [ ] Check 1
- [ ] Check 2

## Execution
- [ ] Step 1
- [ ] Step 2

## Post-execution
- [ ] Verify 1
- [ ] Verify 2
EOF
```

### 步骤 5：验证 Skill

```bash
# 验证 frontmatter 格式
node add-skill/scripts/validate-skill-catalog.mjs --check

# 验证目录结构
ls -la my-new-skill/

# 验证 SKILL.md 语法
node --check my-new-skill/scripts/*.mjs  # 如有脚本
```

### 步骤 6：注册 Skill

```bash
# 同步到 SKILLS.md
node add-skill/scripts/validate-skill-catalog.mjs --write

# 验证注册成功
grep "my-new-skill" SKILLS.md
```

### 步骤 7：安装到客户端

```bash
# Claude Code
ln -s /path/to/skills ~/.claude/skills
# 或
cp -r /path/to/skills/* ~/.claude/skills/

# Codex
ln -s /path/to/skills ~/.agents/skills
# 或
cp -r /path/to/skills/* ~/.agents/skills/

# Codex 用户需要信任新 Skill
# 在 Codex 中运行: /hooks
```

## Frontmatter 最佳实践

### Triggers 设计

**良好的触发词**：
```yaml
triggers:
  zh:
    - 接口开发        # 专业术语
    - API开发         # 专业术语（英文缩写）
    - 设计接口        # 动词 + 名词
    - 开发接口        # 动词 + 名词
    - REST API       # 具体技术
    - 接口文档        # 相关任务
    - 契约定义        # 专业表达
  en:
    - API development
    - interface design
    - REST API
    - endpoint design
    - API contract
```

**不良的触发词**：
```yaml
triggers:
  zh:
    - 开发            # 太宽泛
    - 处理            # 太模糊
    - 实现            # 太通用
  en:
    - do something    # 无意义
    - handle          # 太模糊
```

### Gates 设计

**良好的 Gates**：
```yaml
gates:
  - "已有相邻生产接口参考或明确 API 规范"
  - "已明确请求响应契约"
  - "不是前端页面或数据库设计（用对应 Skill）"
```

**不良的 Gates**：
```yaml
gates:
  - "需要开发 API"              # 太模糊
  - "可能需要接口"              # 不确定
  - "比较复杂"                  # 无法判断
```

### Conflicts 设计

**良好的 Conflicts**：
```yaml
conflicts:
  frontend-design: "frontend-design 负责页面设计；api-development 负责后端接口设计"
  database-design: "database-design 负责数据库表设计；api-development 负责 API 接口设计"
```

**不良的 Conflicts**：
```yaml
conflicts:
  other-skill: "类似但不同"      # 不明确
  another-skill: "有时用A有时用B" # 无法决策
```

## 测试 Skill

### 单元测试（可选）

如果 Skill 包含脚本，编写单元测试：

```javascript
// my-new-skill/scripts/validate.test.mjs
import { describe, it } from 'node:test';
import assert from 'node:assert';
import { validate } from './validate.mjs';

describe('validate', () => {
  it('should validate correct input', () => {
    const result = validate({ input: 'valid' });
    assert.strictEqual(result.valid, true);
  });

  it('should reject invalid input', () => {
    const result = validate({ input: '' });
    assert.strictEqual(result.valid, false);
  });
});
```

运行测试：
```bash
node --test my-new-skill/scripts/*.test.mjs
```

### 集成测试

在实际项目中测试 Skill：

1. **准备测试项目**：
   ```bash
   mkdir test-project
   cd test-project
   git init
   ```

2. **触发 Skill**：
   ```
   # 在 Claude Code / Codex 中
   使用触发词测试新 Skill
   ```

3. **验证行为**：
   - 是否正确触发
   - 是否执行预期逻辑
   - 是否生成预期输出
   - 是否调用后续 Skill

4. **检查冲突解决**：
   - 使用可能冲突的触发词
   - 验证是否正确选择 Skill

## 贡献流程

### 1. Fork 和 Clone

```bash
# Fork 仓库到你的 GitHub 账号
# 然后 Clone
git clone https://github.com/your-username/skills.git
cd skills
```

### 2. 创建分支

```bash
# 从 develop 创建 feature 分支
git checkout develop
git pull origin develop
git checkout -b feature/my-new-skill
```

### 3. 开发 Skill

按照前面的步骤创建和测试 Skill。

### 4. 提交代码

```bash
# 检查改动
git status
git diff

# 暂存文件
git add my-new-skill/
git add SKILLS.md  # 如果有更新

# 提交（使用中文描述）
git commit -m "feat: 新增 my-new-skill

- 定义触发词和前置条件
- 编写完整执行流程
- 添加示例和参考资源

Refs: #issue-number"
```

### 5. 推送分支

```bash
git push origin feature/my-new-skill
```

### 6. 创建 Pull Request

在 GitHub 上创建 PR：

**PR 标题**（中文）：
```
feat: 新增 my-new-skill
```

**PR 描述**：
```markdown
## 变更说明

新增 `my-new-skill` Skill，用于 [用途说明]。

## 变更内容

- 创建 Skill 目录和文件
- 定义触发词和前置条件
- 编写完整执行流程
- 添加示例和参考资源
- 更新 SKILLS.md

## 测试情况

- [x] Frontmatter 验证通过
- [x] 目录结构正确
- [x] 在测试项目中验证
- [x] 冲突解决正确

## 相关 Issue

Closes #issue-number
```

### 7. Code Review

PR 创建后会进入 Review 流程：

1. **自动检查**：
   - Frontmatter 格式
   - 目录结构
   - SKILLS.md 同步

2. **人工 Review**：
   - 职责边界是否清晰
   - 触发词是否合理
   - Gates 是否明确
   - Conflicts 是否完整
   - 文档是否清晰

3. **修改建议**：
   - 根据 Review 意见修改
   - 推送到同一分支
   - 自动更新 PR

### 8. 合并

Review 通过后：

1. **Squash and Merge**：
   - 保持 Git 历史清晰
   - 合并到 develop 分支

2. **删除分支**：
   ```bash
   git branch -d feature/my-new-skill
   git push origin --delete feature/my-new-skill
   ```

## 修改现有 Skill

### 小改动（文档、触发词）

```bash
# 创建分支
git checkout -b fix/update-skill-docs

# 修改文件
vim my-skill/SKILL.md

# 提交
git commit -m "docs: 更新 my-skill 触发词

- 增加口语化表达
- 补充使用示例"

# 推送并创建 PR
git push origin fix/update-skill-docs
```

### 大改动（逻辑、结构）

```bash
# 创建分支
git checkout -b refactor/my-skill-logic

# 修改文件
vim my-skill/SKILL.md

# 测试改动
# 在测试项目中验证新逻辑

# 提交
git commit -m "refactor: 重构 my-skill 执行流程

- 简化步骤1和步骤2
- 新增错误处理
- 更新示例"

# 推送并创建 PR
git push origin refactor/my-skill-logic
```

## Skill 规范

### 命名规范

**Skill 名称**：
- 小写字母、数字、连字符
- 语义清晰
- 不超过 30 字符

**示例**：
- ✅ `api-development`
- ✅ `frontend-design`
- ✅ `change-impact-analysis`
- ❌ `API-Development`（不用大写）
- ❌ `api_development`（不用下划线）
- ❌ `api`（太简短，不够语义）

**文件命名**：
- `SKILL.md`（必须大写）
- `references/*.md`（小写，连字符分隔）
- `scripts/*.mjs`（小写，连字符分隔）

### 文档规范

**SKILL.md 结构**：
1. Frontmatter（必须）
2. 简介（1-2 段）
3. 触发与边界
4. 输入与前置条件
5. 执行流程
6. 输出与交付
7. 质量门禁
8. 错误处理
9. 示例

**语言规范**：
- 正文使用中文
- 技术术语可保留英文
- 代码示例使用实际语言
- 注释使用中文

**格式规范**：
- 使用 Markdown
- 标题层级清晰
- 代码块指定语言
- 列表格式统一

### 代码规范（如有脚本）

**JavaScript/Node.js**：
```javascript
// 使用 ES Module
import { readFile } from 'node:fs/promises';

// 使用 JSDoc 注释
/**
 * 验证输入
 * @param {object} input - 输入对象
 * @returns {object} 验证结果
 */
export function validate(input) {
  // 实现
}

// 使用 async/await
export async function loadConfig(path) {
  const content = await readFile(path, 'utf-8');
  return JSON.parse(content);
}
```

**Shell 脚本**：
```bash
#!/usr/bin/env bash
set -euo pipefail

# 函数定义
validate_input() {
  local input="$1"
  # 实现
}

# 主逻辑
main() {
  validate_input "$@"
}

main "$@"
```

## 发布流程

### 版本号规范

遵循 Semantic Versioning：

- **Major (X.0.0)**：不兼容的 API 变更
- **Minor (x.Y.0)**：向后兼容的功能新增
- **Patch (x.y.Z)**：向后兼容的 Bug 修复

### 发布检查清单

- [ ] 所有测试通过
- [ ] 文档更新完整
- [ ] CHANGELOG.md 已更新
- [ ] 版本号已更新
- [ ] Git tag 已创建
- [ ] 发布说明已准备

### 发布命令

```bash
# 更新版本号
npm version minor  # 或 major / patch

# 创建 tag
git tag -a v1.2.0 -m "Release v1.2.0"

# 推送 tag
git push origin v1.2.0

# 推送代码
git push origin develop
```

## 常见问题

### Q: 如何决定 Skill 优先级？
A:
- **Critical**：核心流程，必须最先匹配（如 change-impact-analysis）
- **High**：高频使用，常见场景（如 git-commit, code-review）
- **Medium**：专业领域，特定场景（如 redis-cache, websocket-sse）
- **Low**：辅助功能，低频使用（如 docx, pptx）
- **Fallback**：兜底能力（如 universal-development）

### Q: Skill 太复杂怎么办？
A: 考虑拆分为多个 Skill：
- 按阶段拆分（设计 / 实现 / 验证）
- 按领域拆分（前端 / 后端 / 数据库）
- 按粒度拆分（高层 / 细节）

### Q: 如何处理 Skill 冲突？
A: 
1. 明确各自职责边界
2. 在 conflicts 中说明
3. 通过 gates 区分适用场景
4. 调整触发词避免重叠

### Q: 如何测试 Skill 路由？
A:
1. 使用真实触发词测试
2. 使用可能冲突的触发词测试
3. 验证 gates 是否正确拦截
4. 验证 conflicts 是否正确解决

### Q: Skill 可以调用其他 Skill 吗？
A: 可以：
- 在 `related_skills.after` 中声明
- 在正文中说明调用时机
- 通过 Skill 名称调用，不硬编码路径

## 参考资料

- [Phase 3 完整报告](../docs/phase3-frontmatter-enhancement-complete.md)
- [SKILLS.md](../SKILLS.md)
- [CLAUDE.md](../CLAUDE.md)
- [behavior-kernel.md](../runtime-hooks/behavior-kernel.md)

---

**最后更新**：2026-09-03
