# Skill 目录

本文档列出所有 95 个可用 Skill，按优先级分类并提供触发词、描述和使用场景。

## 优先级说明

- **Critical (1 个)**：核心流程 Skill，处理范围变更和影响分析
- **High (19 个)**：高频使用的核心能力
- **Medium (30 个)**：常用专业领域 Skill
- **Low (44 个)**：特定场景和辅助能力
- **Fallback (1 个)**：兜底通用能力

## Critical Priority (1)

### change-impact-analysis
**描述**：当已批准范围真实变化时，完整识别受影响功能、契约、数据、权限和交付面并原位更新 TODO。

**触发词**：
- 中文：影响分析、变更影响、依赖分析、需求改了、需求变了、范围变了、加一个字段、加字段、改需求、功能变更
- 英文：impact analysis, change impact, scope change, requirement change

**使用场景**：
- 已批准的需求发生变化
- API 契约需要修改
- 数据模型需要增删字段
- 权限规则发生变化
- 交付面（Web/App/Desktop）调整

**不适用**：新项目产品定义、代码实现、Bug 修复

---

## High Priority (19)

### 1. frontend-design
**描述**：为新增或重构界面建立 UI/UX 设计基线，定义页面结构、交互、状态与约束；不编写生产页面代码。

**触发词**：
- 中文：界面设计、UX设计、交互设计、页面设计、设计页面、做一个页面、新页面、管理页面、详情页、列表页
- 英文：UI design, UX design, interface design, page design, wireframe

**使用场景**：
- 新功能包含 Web/App/Desktop 界面
- 重构现有页面的交互流程
- 复杂交互存在歧义需要先设计
- 客户要求先审查设计稿

**不适用**：已有页面的视觉优化（用 frontend-polish）、代码实现

### 2. frontend-polish
**描述**：审查并优化已有前端实现的布局、交互、视觉与可用性；不从零设计新业务页面。

**触发词**：
- 中文：优化页面、优化这个页面、页面有点、交互有点、视觉优化、布局优化、前端优化、界面优化
- 英文：polish UI, improve interface, optimize page, refine design

**使用场景**：
- 已有页面的视觉细节优化
- 交互体验改进
- 布局调整
- 可用性提升

**不适用**：新页面设计（用 frontend-design）、后端优化

### 3. product-manager
**描述**：为新项目或新功能完成研究、方案收敛和覆盖用户、能力、菜单、规则、权限、状态与验收的完整产品定义。

**触发词**：
- 中文：产品定义、需求分析、PRD、产品需求、产品规划、写PRD、需求文档
- 英文：product definition, requirement analysis, PRD, product requirement

**使用场景**：
- 新项目启动
- 新功能模块规划
- 需要完整的产品文档
- 需要明确验收标准

**不适用**：已有 PRD 的实现、纯技术任务

### 4. project-manager
**描述**：基于完整产品、设计、架构和技术结论，按功能点与菜单/入口建立当前开发者覆盖全部交付面的唯一 TODO。

**触发词**：
- 中文：项目规划、任务分解、制定计划、生成TODO、任务列表、拆分任务
- 英文：project planning, task breakdown, create TODO, task decomposition

**使用场景**：
- 产品定义完成后生成开发任务
- 将大功能拆分为可执行 Feature
- 建立完整的交付清单

**不适用**：产品定义、代码实现、任务执行

### 5. architecture-design
**描述**：设计系统、模块、数据所有权、部署和仓库边界。

**触发词**：
- 中文：领域边界、架构、系统架构、服务拆分、模块设计、架构设计、系统设计
- 英文：architecture design, system design, module design, service boundary

**使用场景**：
- 新项目架构设计
- 微服务拆分
- 模块职责划分
- 数据所有权设计

**不适用**：代码实现、数据库表设计

### 6. tech-decision
**描述**：在每个业务 Feature 实现前比较可行技术并选出可实施、可验证、可回退的方案。

**触发词**：
- 中文：选择技术、技术方案、技术评估、技术选型、选型、比较技术
- 英文：tech decision, technology selection, tech evaluation, choose technology

**使用场景**：
- 新功能需要选择技术方案
- 多个方案需要比较
- 技术风险评估

**不适用**：已明确技术栈的实现、架构设计

### 7. api-development
**描述**：设计实现 API 契约、校验、错误语义和文档。

**触发词**：
- 中文：API开发、接口设计、契约定义、设计接口、开发接口、REST API、接口文档
- 英文：API development, interface design, contract definition, REST API, endpoint design

**使用场景**：
- 设计新的 API 接口
- 定义请求响应契约
- API 文档生成

**不适用**：前端页面、数据库操作

### 8. database-design
**描述**：设计数据库结构、迁移、索引、幂等、兼容和回滚。

**触发词**：
- 中文：建表、设计表、数据库、Schema设计、表结构、数据库设计、数据模型
- 英文：database design, schema design, table design, data model

**使用场景**：
- 设计新的数据库表
- 数据模型设计
- 迁移脚本设计
- 索引优化

**不适用**：API 设计、前端实现

### 9. crud-development
**描述**：按已批准需求完成 CRUD 纵向业务交付，覆盖数据模型、API、Service 与页面联动；不开发代码生成器。

**触发词**：
- 中文：开发功能、实现功能、纵向开发、CRUD、增删改查、完整开发
- 英文：CRUD development, feature development, full-stack development

**使用场景**：
- 标准的增删改查功能
- 需要数据库、后端、前端完整实现
- 业务功能开发

**不适用**：代码生成器开发（用 crud）

### 10. security-guard
**描述**：实现授权、输入与数据安全。

**触发词**：
- 中文：权限、安全防护、认证、鉴权、安全、授权、访问控制
- 英文：security, authorization, authentication, access control, security guard

**使用场景**：
- 实现认证授权
- 输入校验
- 安全防护
- 访问控制

**不适用**：数据权限（用 data-permission）

### 11. data-permission
**描述**：设计或排查行级、字段级数据权限和租户边界。

**触发词**：
- 中文：数据隔离、字段权限、数据范围、行级权限、数据权限、租户隔离
- 英文：data permission, row-level security, field permission, data isolation

**使用场景**：
- 行级数据权限
- 字段级权限
- 多租户数据隔离

**不适用**：功能权限（用 security-guard）

### 12. bug-detective
**描述**：用证据排查调用链故障。

**触发词**：
- 中文：定位问题、报错、不工作、出错了、排查问题、调试、Debug
- 英文：debug, troubleshoot, investigate bug, find issue

**使用场景**：
- 功能不正常
- 报错排查
- 性能问题定位

**不适用**：需求变更、功能开发

### 13. code-review
**描述**：对指定 diff 做缺陷优先的完整 Review，并核对验收与交付证据；不代替仓库专项规范检查。

**触发词**：
- 中文：审查代码、Review、代码检查、审查、检视代码、Code Review
- 英文：code review, review code, code inspection, review changes

**使用场景**：
- 代码提交前审查
- Pull Request 审查
- 代码质量检查

**不适用**：规范检查（用 check）、代码实现

### 14. git-commit
**描述**：经授权精确提交并推送 Git。

**触发词**：
- 中文：提交、commit、推送、push、提交并推送、提交代码、推送代码、git提交、git推送
- 英文：git commit, git push, commit and push

**使用场景**：
- 代码开发完成后提交
- 经授权的 push 操作

**不适用**：分支操作（用 git-workflow）

### 15. git-workflow
**描述**：处理 Git 分支、历史与冲突。

**触发词**：
- 中文：合并分支、创建分支、解决冲突、rebase、分支管理、Git操作
- 英文：merge branch, create branch, resolve conflict, git workflow, branching

**使用场景**：
- 分支创建和合并
- 冲突解决
- 历史重写

**不适用**：普通提交（用 git-commit）

### 16. task-todo-workflow
**描述**：新项目或新功能的强制第一入口：建立阶段状态机，并维护当前开发者覆盖完整纵向交付面的唯一 TODO。

**触发词**：
- 中文：任务管理、TODO、管理任务、任务流程、工作流
- 英文：task management, TODO workflow, task flow

**使用场景**：
- 新项目启动
- 新功能规划
- TODO 维护

**不适用**：代码实现、Git 操作

### 17. universal-development
**描述**：仅在没有适用专业 Skill 时作为最低优先级兜底；不得替代 API、数据库、前端或安全能力。

**触发词**：
- 中文：开发、实现、写代码、编码、开发功能
- 英文：development, implement, write code, coding

**使用场景**：
- 没有专业 Skill 覆盖的通用开发
- 简单功能实现

**不适用**：有专业 Skill 的场景（优先使用专业 Skill）

### 18. test-development
**描述**：仅在用户本轮明确要求时编写或修改最小测试代码。

**触发词**：
- 中文：写测试、补测试、测试代码、单元测试、集成测试
- 英文：write test, test development, unit test, integration test

**使用场景**：
- 用户明确要求编写测试
- 补充测试覆盖

**不适用**：自动编写测试（需明确授权）

### 19. dev
**描述**：实施已批准 TODO 的通用纵向功能并统一验证与 Review；明确 CRUD 或专业领域任务优先使用对应 Skill。

**触发词**：
- 中文：纵向开发、完整实现、开发功能、实现任务
- 英文：vertical development, full implementation, develop feature

**使用场景**：
- 纵向完整功能开发
- 多层联动实现

**不适用**：CRUD（用 crud-development）、专业领域（用对应 Skill）

---

## Medium Priority (30)

### 20. ui-pc
**描述**：构建后台 Web 页面与状态。

**触发词**：中文：PC页面、管理后台、Web界面、后台页面；英文：PC UI, admin panel, web interface

**使用场景**：PC/管理端界面实现

### 21. ui-app
**描述**：构建跨端 App 页面、交互与平台适配。

**触发词**：中文：App页面、移动端、跨端开发；英文：app UI, mobile UI, cross-platform

**使用场景**：移动端/跨端应用界面实现

### 22. store-pc
**描述**：设计实现或排查 PC/Web 状态。

**触发词**：中文：状态管理、Store、前端状态；英文：state management, store, frontend state

**使用场景**：前端状态管理实现

### 23. database-ops
**描述**：实施数据库表、ORM 映射、索引和数据迁移。

**触发词**：中文：数据库操作、迁移脚本、ORM；英文：database ops, migration, ORM

**使用场景**：数据库具体实现和迁移

### 24. error-handler
**描述**：实现异常、参数校验、错误码、日志和事务响应。

**触发词**：中文：错误处理、异常处理、日志；英文：error handling, exception handling, logging

**使用场景**：异常处理和错误响应

### 25. redis-cache
**描述**：设计或排查 Redis 缓存与锁。

**触发词**：中文：缓存、Redis、分布式锁；英文：cache, Redis, distributed lock

**使用场景**：缓存设计和 Redis 使用

### 26. scheduled-jobs
**描述**：设计或排查定时、延迟和分布式任务。

**触发词**：中文：定时任务、延迟任务、异步任务；英文：scheduled job, delayed task, async task

**使用场景**：定时任务和异步处理

### 27. websocket-sse
**描述**：设计 WebSocket/SSE 推送、认证、重连和跨实例语义。

**触发词**：中文：WebSocket、SSE、实时推送；英文：WebSocket, SSE, real-time push

**使用场景**：实时通信实现

### 28. tenant-management
**描述**：设计或排查多租户隔离、上下文和跨租户运维。

**触发词**：中文：多租户、租户隔离、SaaS；英文：multi-tenant, tenant isolation, SaaS

**使用场景**：多租户系统设计

### 29. workflow-engine
**描述**：设计或排查审批流、流程实例、任务办理和版本。

**触发词**：中文：审批流、工作流、流程引擎；英文：workflow, approval flow, process engine

**使用场景**：工作流和审批流实现

### 30. file-oss-management
**描述**：接入并保护文件与对象存储。

**触发词**：中文：文件上传、对象存储、OSS；英文：file upload, object storage, OSS

**使用场景**：文件存储和管理

### 31. sms-mail
**描述**：接入短信、邮件与多渠道通知。

**触发词**：中文：短信、邮件、通知；英文：SMS, email, notification

**使用场景**：消息通知实现

### 32. satoken-core
**描述**：实现或排查 Sa-Token 认证会话。

**触发词**：中文：Sa-Token、会话管理、认证；英文：Sa-Token, session management, authentication

**使用场景**：Sa-Token 集成和使用

### 33. snowflake-id
**描述**：实现和配置 Java 雪花 ID。

**触发词**：中文：雪花ID、分布式ID、ID生成；英文：snowflake ID, distributed ID, ID generator

**使用场景**：分布式 ID 生成

### 34. backend-annotations
**描述**：选择后端限流、防重、脱敏、加密和数据权限注解。

**触发词**：中文：注解、限流、防重；英文：annotation, rate limit, idempotent

**使用场景**：后端注解使用

### 35. json-serialization
**描述**：设计精确兼容的 JSON 契约。

**触发词**：中文：JSON序列化、序列化；英文：JSON serialization, serialization

**使用场景**：JSON 序列化配置

### 36. utils-toolkit
**描述**：从仓库选择已有工具类和 API，避免重复封装。

**触发词**：中文：工具类、公共方法、复用工具；英文：utility, helper, common method

**使用场景**：查找和复用现有工具

### 37. check
**描述**：按目标仓库已证明的后端规范检查实现；完整 diff 的缺陷与交付审查使用 code-review。

**触发词**：中文：规范检查、后端检查；英文：check, validation, compliance check

**使用场景**：后端规范检查

### 38. code-patterns
**描述**：提取仓库后端代码模式。

**触发词**：中文：代码模式、提取模式；英文：code pattern, extract pattern

**使用场景**：代码模式识别

### 39. project-navigator
**描述**：定位项目结构、入口、模块、组件和参考实现。

**触发词**：中文：项目结构、代码定位、查找代码；英文：project structure, navigate code, find code

**使用场景**：项目代码导航

### 40. project-details
**描述**：维护并自动回读单一项目记忆中的稳定事实、复用地图和边界；不保存任务状态或替代 PRD/架构。

**触发词**：中文：项目记忆、项目事实；英文：project memory, project facts

**使用场景**：项目记忆维护

### 41. init-docs
**描述**：按真实交付需要初始化最少团队共享文档；项目记忆缺失或为空时协助采集事实并填充唯一 PROJECT-MEMORY.md。

**触发词**：中文：初始化文档、创建文档；英文：init docs, create documentation

**使用场景**：项目文档初始化

### 42. test-strategy
**描述**：仅在用户本轮明确要求时设计最小测试策略或用例。

**触发词**：中文：测试策略、测试方案、测试用例；英文：test strategy, test plan, test case

**使用场景**：测试策略设计（需明确授权）

### 43. add-todo
**描述**：向当前开发者唯一 TODO 追加去重、可验收且保持纵向完整的功能或步骤。

**触发词**：中文：添加任务、追加TODO；英文：add task, append TODO

**使用场景**：向 TODO 追加新任务

### 44. update-status
**描述**：按代码、Review 和 Git 事实直接更新当前开发者覆盖完整交付面的唯一 TODO；不生成状态产物。

**触发词**：中文：更新状态、更新TODO；英文：update status, update TODO

**使用场景**：TODO 状态更新

### 45. progress
**描述**：只读统计当前开发者唯一 TODO 的功能进度，并用代码与 Git 事实识别失真和阻塞。

**触发词**：中文：查看进度、统计进度；英文：check progress, view progress

**使用场景**：进度查询和统计

### 46. next
**描述**：根据当前开发者唯一 TODO、依赖和代码事实选择下一项可执行的完整功能。

**触发词**：中文：下一个任务、继续；英文：next task, continue

**使用场景**：选择下一个任务

### 47. brainstorm
**描述**：围绕已确认约束发散并收敛方案；不替代决策。

**触发词**：中文：头脑风暴、方案讨论；英文：brainstorm, ideation

**使用场景**：方案发散和收敛

### 48. grilling
**描述**：关键需求或决策会实质改变结果时，一次一个问题追问用户直至约 95% 清晰；可查事实自行取证，已批准任务不重复澄清。

**触发词**：中文：追问、澄清需求；英文：clarify, deep dive

**使用场景**：需求澄清

### 49. performance-doctor
**描述**：按指标排查并优化性能。

**触发词**：中文：性能优化、性能问题；英文：performance optimization, performance issue

**使用场景**：性能问题排查

---

## Low Priority (44)

### 50-93. 专业领域 Skills

包括但不限于：
- **产品相关**：product-discovery, product-strategy, product-execution, product-analytics, go-to-market
- **文档工具**：doc-coauthoring, docx, pdf, pptx, xlsx, mermaid, archify
- **MCP/自动化**：mcp-builder, real-browser-automation
- **动画视觉**：review-animations, animation-vocabulary, canvas-design, algorithmic-art
- **代码生成**：code-generator, crud (生成器)
- **框架特定**：alova-client-usage, alova-server-usage, alova-wormhole-usage, worma-guidelines
- **集成工具**：penpot, penpot-prototype
- **Skill 开发**：skill-creator, skill-optimizer, skill-evolution, auto-optimizer, agent-optimizer, add-skill, find-skills
- **其他专业**：daily-report-writer, development-process-doc-writer, internal-comms, brand-guidelines, humanizer-zh, experience-sedimentation, storage-analyzer, start, github-code-interpreter, server-docker-deployment, prompt-optimizer

详细触发词和使用场景见各 Skill 的 SKILL.md。

---

## Fallback (1)

### 94. universal-development (兜底)
当没有更合适的专业 Skill 时使用的通用开发能力。

---

## 按场景选择 Skill

### 新功能开发
1. `change-impact-analysis` (如需要)
2. `product-manager` → 产品定义
3. `frontend-design` (如有界面)
4. `architecture-design` → 架构设计
5. `tech-decision` → 技术选型
6. `project-manager` → 生成 TODO
7. `crud-development` / `universal-development` → 实现
8. `code-review` → 审查
9. `git-commit` → 提交推送

### Bug 修复
1. `bug-detective` → 排查
2. `universal-development` → 修复
3. `code-review` → 审查
4. `git-commit` → 提交推送

### API 开发
1. `api-development` → 设计接口
2. `database-design` (如需要) → 数据模型
3. `security-guard` → 权限控制
4. `code-review` → 审查
5. `git-commit` → 提交推送

### 前端开发
1. `frontend-design` → UI/UX 设计
2. `ui-pc` / `ui-app` → 页面实现
3. `store-pc` (如需要) → 状态管理
4. `frontend-polish` → 视觉优化
5. `code-review` → 审查
6. `git-commit` → 提交推送

### 数据库设计
1. `database-design` → 表结构设计
2. `database-ops` → 迁移脚本
3. `data-permission` (如需要) → 数据权限
4. `code-review` → 审查
5. `git-commit` → 提交推送

---

**提示**：大多数情况下只需自然表达需求，路由系统会自动选择合适的 Skill 组合。
