# 最佳实践

本文档总结 Skills Framework 的常见场景最佳路径、注意事项和避坑指南。

## 场景最佳路径

### 场景 1：新功能开发

**完整流程**：
```
1. change-impact-analysis (如需要)
   ↓ 确认是否影响已有功能
   
2. product-manager
   ↓ 完整产品定义（用户、能力、验收）
   
3. frontend-design (如有界面)
   ↓ UI/UX 设计基线
   
4. architecture-design
   ↓ 模块、数据所有权、边界
   
5. tech-decision
   ↓ 技术方案选型
   
6. project-manager
   ↓ 生成 TODO
   
7. crud-development / universal-development
   ↓ 纵向实现
   
8. code-review
   ↓ 完整审查
   
9. test-development (如需要)
   ↓ 测试代码
   
10. git-commit
    ↓ 提交推送
    
11. update-status
    ↓ 更新 TODO 状态
```

**最佳实践**：
- ✅ 一次规划遍完成所有前置工作，再进入实现
- ✅ 每个 Feature 都有明确的 tech-decision
- ✅ 同一 diff 只做一次完整 code-review
- ❌ 不在实现中反复切换到设计阶段
- ❌ 不跳过产品定义直接写代码

### 场景 2：需求变更

**最佳实践**：
```
用户："需求改了，用户表要加一个 avatar 字段"
  ↓
1. change-impact-analysis
   - 识别受影响的 Feature（用户模块、API、页面）
   - 更新 TODO 中的 AC 和写集
   - 生成变更摘要
   ↓
   
2. universal-development
   - 按更新后的 TODO 实现
   ↓
   
3. code-review
   ↓
   
4. git-commit
```

**注意事项**：
- ✅ 只有真实范围变化才用 change-impact-analysis
- ✅ 原位更新 TODO，不生成新的任务清单
- ❌ Bug 修复不是需求变更
- ❌ 实现偏差不是需求变更

### 场景 3：Bug 修复

**快速路径**：
```
用户："登录接口报 500 错误"
  ↓
1. bug-detective
   - 排查日志、调用链
   - 定位根因
   ↓
   
2. universal-development
   - 修复代码
   ↓
   
3. code-review
   ↓
   
4. git-commit
```

**注意事项**：
- ✅ 简单 Bug 直接修复，不走完整规划流程
- ✅ 必须有证据（日志、堆栈、复现步骤）
- ❌ 不把需求变更当作 Bug
- ❌ 不跳过 code-review

### 场景 4：代码审查

**完整审查**：
```
1. code-review
   - 读取 diff
   - 缺陷按严重程度分级
   - 安全、性能、规范检查
   - 生成 findings
   ↓
   
2. universal-development
   - 修复 findings
   ↓
   
3. code-review
   - 复核修复
   - 确认关闭
   ↓
   
4. git-commit
```

**最佳实践**：
- ✅ 同一 diff 只做一次完整审查
- ✅ 后续 Skill 消费 findings，不重复审查
- ✅ 修复后只核对关闭状态
- ❌ 不在每个 Skill 中重复 review
- ❌ 不忽略严重/重要 findings 直接提交

### 场景 5：API 开发

**标准流程**：
```
1. product-manager (如需要)
   ↓
   
2. api-development
   - 设计接口契约
   - 定义请求响应
   - 错误码规范
   ↓
   
3. database-design (如需要)
   - 设计数据模型
   ↓
   
4. security-guard
   - 认证授权
   - 输入校验
   ↓
   
5. universal-development
   - 实现业务逻辑
   ↓
   
6. code-review
   ↓
   
7. git-commit
```

**最佳实践**：
- ✅ 先设计契约，再实现逻辑
- ✅ 同步完成前端页面（如有）
- ✅ 使用仓库既有的响应格式和错误码
- ❌ 不在实现中改变契约
- ❌ 不重复造轮子（查 Reuse map）

### 场景 6：前端页面开发

**完整流程**：
```
1. frontend-design
   - UI/UX 设计基线
   - 页面结构、交互、状态
   ↓
   
2. ui-pc / ui-app
   - 页面实现
   - 组件使用
   ↓
   
3. store-pc (如需要)
   - 状态管理
   ↓
   
4. frontend-polish (如需要)
   - 视觉优化
   ↓
   
5. code-review
   ↓
   
6. git-commit
```

**最佳实践**：
- ✅ 新页面先设计后实现
- ✅ 已有页面优化直接用 frontend-polish
- ✅ 复用仓库的组件库和设计系统
- ❌ 不在实现中改变设计决策
- ❌ 不引入新的 UI 框架（除非有 tech-decision）

### 场景 7：数据库设计

**标准流程**：
```
1. database-design
   - 表结构设计
   - 迁移脚本设计
   - 索引优化
   ↓
   
2. database-ops
   - 创建迁移脚本
   - 执行 DDL
   ↓
   
3. data-permission (如需要)
   - 行级权限
   - 字段级权限
   ↓
   
4. code-review
   ↓
   
5. git-commit
```

**最佳实践**：
- ✅ 迁移脚本必须幂等
- ✅ 迁移脚本必须可回滚
- ✅ 索引设计考虑查询模式
- ❌ 不在生产直接执行 DDL
- ❌ 不使用 `SELECT *`

## 常见陷阱与避坑指南

### 陷阱 1：跳过规划直接写代码

**错误示例**：
```
用户："开发一个商品管理功能"
  ↓
❌ 直接调用 universal-development
   - 缺少产品定义
   - 缺少验收标准
   - 缺少技术方案
```

**正确做法**：
```
用户："开发一个商品管理功能"
  ↓
✓ 自动路由 product-manager
  ↓ 完整产品定义
✓ architecture-design + tech-decision
  ↓ 架构和技术方案
✓ project-manager
  ↓ 生成 TODO
✓ 再进入实现
```

### 陷阱 2：重复造轮子

**错误示例**：
```
开发者：自行实现日期格式化工具
  ↓
❌ 没有查 Reuse map
❌ 重复实现了 DateUtils
```

**正确做法**：
```
1. 读取 PROJECT-MEMORY.md 的 Reuse map
2. 发现已有 DateUtils
3. 直接复用，不重复实现
4. 在规划中记录 (reuse)
```

### 陷阱 3：违反架构边界

**错误示例**：
```
开发者：在 Controller 中编写业务逻辑
  ↓
❌ 违反了 Boundaries 中的架构边界
❌ code-review 会发现并要求修复
```

**正确做法**：
```
1. 读取 PROJECT-MEMORY.md 的 Boundaries
2. Controller 只负责参数校验和调用 Service
3. 业务逻辑放在 Service
4. code-review 通过
```

### 陷阱 4：同一 diff 重复审查

**错误示例**：
```
1. universal-development 实现代码
2. api-development 再次审查
3. security-guard 又审查一次
4. code-review 最后再审查
   ↓
❌ 同一 diff 审查了 4 次，浪费资源
```

**正确做法**：
```
1. universal-development 实现代码
2. code-review 做一次完整审查，生成 findings
3. 后续 Skill 消费 findings
4. 修复后只核对关闭状态
```

### 陷阱 5：规划阶段编辑生产代码

**错误示例**：
```
流程状态机：requirements-analysis
  ↓
尝试 Edit /src/api/user.ts
  ↓
❌ PreToolUse Hook 拒绝：必须先完成需求确认和技术方案
```

**正确做法**：
```
1. 完成 requirements-analysis
2. 推进到 requirements-confirmation --confirmed
3. 完成 technical-plan
4. 推进到 technical-confirmation --confirmed
5. 完成 task-breakdown
6. 推进到 business-development
7. 原子领取 Feature
8. ✓ 现在可以编辑生产代码
```

### 陷阱 6：忽略依赖直接领取

**错误示例**：
```
TODO:
  [x] FEAT-001: 用户登录
  [ ] FEAT-002: 用户注册（依赖 FEAT-001）
  [x] FEAT-003: 密码重置（依赖 FEAT-001）
  
尝试领取 FEAT-002
  ↓
❌ 依赖检查失败：FEAT-001 还在进行中
```

**正确做法**：
```
1. 检查 FEAT-002 的依赖
2. 发现依赖 FEAT-001
3. 检查 FEAT-001 状态：[~] 进行中
4. 等待 FEAT-001 完成
5. FEAT-001 变为 [x] 后再领取 FEAT-002
```

### 陷阱 7：写集冲突

**错误示例**：
```
TODO:
  [~] FEAT-001: 修改用户模块（写集: /src/user/）
  
尝试并发领取 FEAT-002: 修改用户 API（写集: /src/user/api.ts）
  ↓
❌ 写集冲突：/src/user/api.ts 在 /src/user/ 范围内
```

**正确做法**：
```
方案 1：等待 FEAT-001 完成
方案 2：调整写集，使其互斥
  - FEAT-001 写集：/src/user/model/, /src/user/service/
  - FEAT-002 写集：/src/user/controller/
  ↓ 现在可以并发
```

### 陷阱 8：缺少完成证据

**错误示例**：
```
尝试完成 FEAT-001
  ↓
AC-001: 用户可登录 -> （缺少证据）
AC-002: 登录失败显示错误 -> （缺少证据）
  ↓
❌ 完成门禁失败：缺少 AC 证据
```

**正确做法**：
```
AC-001: 用户可登录 -> ✓ 手工验证通过，截图 evidence/login.png
AC-002: 登录失败显示错误 -> ✓ 手工验证通过，截图 evidence/error.png
Review: pass
验证: Standard - 开发者自验 + code-review
  ↓
✓ 完成门禁通过
```

## Skill 选择指南

### 何时使用专业 Skill

**使用专业 Skill**：
- ✅ 任务属于专业领域（API、数据库、前端、安全等）
- ✅ 专业 Skill 有明确的职责和规范
- ✅ 优先级 high 或 medium 的 Skill

**使用 universal-development**：
- ✅ 没有适用的专业 Skill
- ✅ 简单通用功能
- ✅ 作为兜底能力

**示例**：
```
任务：设计 REST API
  ↓
✓ 使用 api-development（专业 Skill）
❌ 不使用 universal-development

任务：实现简单工具函数
  ↓
✓ 使用 universal-development
```

### 何时使用 change-impact-analysis

**使用**：
- ✅ 已批准的需求发生变化
- ✅ API 契约需要修改
- ✅ 数据模型需要增删字段
- ✅ 权限规则发生变化

**不使用**：
- ❌ 新项目（用 product-manager）
- ❌ Bug 修复（用 bug-detective）
- ❌ 代码实现偏差（用 code-review）
- ❌ 纯视觉调整（用 frontend-polish）

### 何时使用 test-development

**使用**（需明确授权）：
- ✅ 用户明确要求编写测试
- ✅ 用户明确要求补充测试覆盖

**不使用**：
- ❌ 自动为每个功能编写测试
- ❌ 高风险但用户未要求（只报告风险）
- ❌ Review finding 建议（只修复代码）

## 项目记忆最佳实践

### 初始化时机

**最佳时机**：
```
1. 新项目克隆后第一次运行
   ↓ Hook 自动创建 PROJECT-MEMORY.md
   ↓ init-docs 采集事实
   ↓ project-details 归并
   
2. 旧项目首次使用 Skills Framework
   ↓ Hook 检查不存在
   ↓ 触发初始化流程
```

### 记忆维护频率

**应该立即更新**：
- ✅ 确认新的复用入口
- ✅ 确认技术栈升级
- ✅ 完成重要技术决策

**可以延迟更新**：
- 暂无（稳定事实应立即归并）

**不应该更新**：
- ❌ Feature 进度
- ❌ 临时实现
- ❌ 执行日志

### 记忆消费流程

**标准流程**：
```
1. Skill 开始执行
   ↓
2. 读取 PROJECT-MEMORY.md
   ↓
3. 提取相关章节
   ↓
4. 落实为决策（reuse / extend / not-applicable）
   ↓
5. 记录在 Feature 规划中
   ↓
6. 实现时遵循
   ↓
7. Review 时核对
```

## TODO 工作流最佳实践

### Feature 粒度

**合适的粒度**：
- ✅ 1-3 天完成
- ✅ 明确的验收标准
- ✅ 可独立测试
- ✅ 可独立 commit

**过大的 Feature**：
- ❌ 超过 5 天
- ❌ 涉及多个模块
- ❌ 难以定义 AC
  ↓ 应该拆分为多个 Feature

**过小的 Feature**：
- ❌ 不到 1 小时
- ❌ 只改一行代码
- ❌ 无法独立验收
  ↓ 应该合并到相关 Feature

### 依赖设计

**良好的依赖**：
- ✅ 依赖关系清晰
- ✅ 无循环依赖
- ✅ 可并行的 Feature 无依赖

**不良的依赖**：
- ❌ 所有 Feature 串行依赖
- ❌ 存在循环依赖
- ❌ 依赖过于复杂

### 写集设计

**合理的写集**：
- ✅ 明确到文件或目录
- ✅ 可并行的 Feature 写集互斥
- ✅ 写集范围与 Feature 职责匹配

**不合理的写集**：
- ❌ 写集过大（如 `/src/`）
- ❌ 写集过细（每个函数）
- ❌ 写集不准确

## Git 工作流最佳实践

### 提交时机

**应该提交**：
- ✅ Feature 完成全部 AC
- ✅ Review 通过
- ✅ 有待提交的业务或必要文档改动
- ✅ 用户明确授权

**不应该提交**：
- ❌ Feature 未完成
- ❌ Review 有未关闭 findings
- ❌ 只有 checkbox 变化
- ❌ 只有证明材料

### 提交信息规范

**正确格式**：
```
feat: 实现用户登录功能

- 实现用户名密码登录
- 登录失败显示错误提示
- 登录成功跳转首页

Refs: FEAT-001
```

**注意事项**：
- ✅ 使用中文描述变更
- ✅ 遵循 Conventional Commits（类型使用英文）
- ✅ 技术术语可保留英文
- ❌ 不包含 `Co-Authored-By` 等 AI 署名
- ❌ 不使用全英文描述

### 分支策略

**推荐策略**：
```
main / master
  ↓ 生产环境
  
develop
  ↓ 开发环境
  
feature/FEAT-001
feature/FEAT-002
  ↓ 功能分支
```

**规则**：
- ✅ 从 develop 创建 feature 分支
- ✅ 完成后合并回 develop
- ✅ 测试通过后 develop 合并到 main
- ❌ 不直接推送到 main（除非授权）

## 并发开发最佳实践

### 适合并发的场景

**可以并发**：
- ✅ 写集互斥
- ✅ 无依赖关系
- ✅ 不同模块
- ✅ 不同开发者

**示例**：
```
[~] FEAT-001: 用户模块（写集: /src/user/）
[~] FEAT-002: 商品模块（写集: /src/product/）
  ↓ 写集互斥，可以并发
```

### 不适合并发的场景

**必须串行**：
- ❌ 写集冲突
- ❌ 存在依赖
- ❌ 需要同一资源
- ❌ 契约变更

**示例**：
```
[~] FEAT-001: 修改用户表结构
[ ] FEAT-002: 使用新用户表字段
  ↓ FEAT-002 依赖 FEAT-001，必须串行
```

### 冲突解决

**预防冲突**：
- ✅ 设计互斥的写集
- ✅ 明确依赖关系
- ✅ 及时 commit 和 push

**解决冲突**：
```
1. 检测到写集冲突
2. 调整 Feature 拆分
3. 使写集互斥
4. 或改为串行执行
```

## 验证档位选择

### Lite

**适用场景**：
- 简单功能
- 低风险修改
- 纯视觉调整

**验证要求**：
- 开发者自验
- code-review
- 不需要自动化测试

### Standard

**适用场景**：
- 常规业务功能
- API 开发
- 数据库操作

**验证要求**：
- 开发者自验
- code-review
- 一次真实主路径验证

### High-risk

**适用场景**：
- 支付、认证等核心功能
- 数据迁移
- 架构变更

**验证要求**：
- 开发者自验
- code-review
- 完整测试
- 回滚方案
- 风险边界
- 发布检查

## 总结

### 核心原则

1. **事实先行**：先读规则和仓库事实，不猜测
2. **简单优先**：选最简单的满足目标的方案
3. **最小写集**：只修改必要的文件
4. **目标驱动**：以可观察结果判断完成
5. **按需加载**：命中后再读完整规则
6. **有界推进**：明确授权和边界后执行

### 常见错误总结

| 错误 | 正确做法 |
|------|----------|
| 跳过规划直接写代码 | 完成产品定义和技术方案 |
| 重复造轮子 | 查 Reuse map，复用既有实现 |
| 违反架构边界 | 读 Boundaries，遵循约定 |
| 同一 diff 重复审查 | 一次完整审查，后续消费 findings |
| 规划期编辑生产代码 | 推进到 business-development 再编辑 |
| 忽略依赖直接领取 | 检查依赖状态，等待完成 |
| 写集冲突 | 设计互斥写集或改为串行 |
| 缺少完成证据 | 每个 AC 都有证据 |

---

**最后更新**：2026-09-03
