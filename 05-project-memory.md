# 项目记忆系统

项目记忆 (`PROJECT-MEMORY.md`) 是每个业务项目的单一真相源，记录稳定事实、复用地图和边界。

## 核心理念

### 单一真相源

- **每个项目唯一**：一个业务仓库只有一个 `PROJECT-MEMORY.md`
- **位置优先级**：
  1. 根目录 `PROJECT-MEMORY.md`（优先）
  2. `docs/PROJECT-MEMORY.md`（如已存在则沿用）
- **不建立平行入口**：不在多个位置创建记忆文件

### 记录内容边界

**应该记录**：
- ✅ 稳定技术栈和框架版本
- ✅ 复用入口（工具类、公共组件、API）
- ✅ Owner 和职责边界
- ✅ 禁止重复实现的内容
- ✅ 架构边界和技术禁区
- ✅ Feature 状态约定
- ✅ 常用命令

**不应该记录**：
- ❌ 任务状态（在 TODO 中）
- ❌ Feature checkbox
- ❌ 执行实例和进度
- ❌ Context JSON/JSONB
- ❌ 执行日志
- ❌ 对话流水账

## 自动初始化机制

### 触发时机

`UserPromptSubmit` / `SubagentStart` Hook 在每次请求时自动：

1. **定位 Git 仓库**：
   ```bash
   git rev-parse --show-toplevel
   ```

2. **检查记忆文件**：
   - 查找根目录 `PROJECT-MEMORY.md`
   - 如已有 `docs/PROJECT-MEMORY.md` 则沿用
   - 不存在 → 创建空模板

3. **检查内容完整性**：
   - 主要章节是否存在
   - 主要章节是否为空
   - 不完整 → 触发初始化流程

4. **初始化流程**：
   ```
   自动路由 init-docs
     ↓
   采集最小仓库事实（README、构建入口、源码）
     ↓
   自动路由 project-details
     ↓
   归并到 PROJECT-MEMORY.md
     ↓
   完成
   ```

### 吸收既有文档

首次创建时可吸收 Codex/Claude `/init` 生成的 `AGENTS.md` / `CLAUDE.md`：

**流程**：
1. 检查是否存在 `AGENTS.md` / `CLAUDE.md`
2. 与 README、构建入口、源码核对
3. 只归并稳定事实
4. 不复制规则模板

**注意**：
- 不无条件信任既有文档
- 必须与源码核对
- 规则模板不进入项目记忆

## 标准结构

```markdown
# Project Memory

本文件是 <项目名称> 的轻量项目记忆入口。只记录稳定事实、Owner、复用入口和边界；任务状态仍以目标仓库当前开发者唯一 Markdown TODO 为准。

## Quick facts

- 定位：<项目定位，一句话说明是什么>
- 技术栈：<后端框架、前端框架、数据库、部署方式>
- 目录结构：<关键目录说明>
- 开发模式：<本地开发、测试、构建命令>

## Reuse map

- `<复用入口1>`：<说明、位置、Owner、使用约束>
- `<复用入口2>`：<说明、位置、Owner、使用约束>
- `<禁止重复实现1>`：<原因、替代方案>

## Boundaries

- 不引入：<禁止的技术、库、模式>
- 架构边界：<模块职责、数据所有权>
- 技术禁区：<不允许的操作>

## Contracts

- Feature 状态：`[ ]` 未开始、`[~]` 进行中、`[!]` 阻塞、`[x]` 完成
- 完成摘要：必须包含 AC-* -> evidence、Review 结论、验证档位
- 命令约定：<项目特定的命令规范>

## Commands

- 启动：`<command>`
- 测试：`<command>`
- 构建：`<command>`
- 部署：`<command>`

## Open decisions

- <待决策事项1>：<背景、选项、倾向>
- <待决策事项2>：<背景、选项、倾向>
```

## 章节详解

### Quick facts

**目的**：快速了解项目基本信息。

**内容**：
- **定位**：一句话说明项目是什么
- **技术栈**：主要框架和工具
- **目录结构**：关键目录的作用
- **开发模式**：如何启动、测试、构建

**示例**：
```markdown
## Quick facts

- 定位：企业级客户关系管理系统（CRM），包含客户管理、商机跟进、销售报表
- 技术栈：
  - 后端：Spring Boot 3.2、MyBatis-Plus、MySQL 8.0、Redis
  - 前端：Vue 3、Element Plus、TypeScript
  - 部署：Docker Compose
- 目录结构：
  - `/backend/src/main/java/com/example/crm/`：后端代码
  - `/frontend/src/`：前端代码
  - `/docs/`：项目文档和开发者 TODO
- 开发模式：
  - 本地启动：`docker-compose up -d` + `./mvnw spring-boot:run` + `npm run dev`
  - 测试：`./mvnw test` + `npm run test`
  - 构建：`./mvnw package` + `npm run build`
```

### Reuse map

**目的**：明确可复用的组件、工具、API，避免重复实现。

**内容**：
- 复用入口：工具类、公共组件、API、配置
- Owner：谁负责维护
- 使用约束：何时使用、何时不使用
- 禁止重复实现：哪些能力已有实现，不能重复造轮子

**示例**：
```markdown
## Reuse map

- `com.example.crm.common.utils.DateUtils`：日期格式化工具，Owner: 基础设施，所有日期操作必须使用此类而不是自行封装
- `com.example.crm.common.response.Result<T>`：统一响应格式，Owner: API 层，所有 Controller 返回必须使用此类
- `@DataPermission` 注解：行级数据权限，Owner: 安全组件，查询客户、商机时必须使用
- `frontend/src/composables/useAuth.ts`：前端鉴权 Hook，Owner: 前端基础，所有需要鉴权的页面必须使用
- 禁止重复实现 ID 生成：已有 `IdGenerator`（雪花算法），不得引入 UUID 或其他 ID 方案
- 禁止重复实现 Excel 导入导出：已有 `ExcelService`（基于 EasyExcel），不得引入 POI 或其他库
```

### Boundaries

**目的**：明确架构边界和技术禁区，防止违反设计原则。

**内容**：
- 不引入：禁止的技术、库、模式
- 架构边界：模块职责、数据所有权
- 技术禁区：不允许的操作

**示例**：
```markdown
## Boundaries

- 不引入：
  - Event Store、CQRS、Aggregate、Projection Engine（简单 CRUD 系统，不需要 DDD）
  - GraphQL（统一使用 REST API）
  - 微服务框架（单体架构，不拆分服务）
  - 外部状态服务（状态只在数据库和 Redis）
  
- 架构边界：
  - Controller 只负责参数校验和调用 Service
  - Service 只负责业务逻辑和事务控制
  - Mapper 只负责数据库操作
  - 前端页面不直接调用 Mapper 或操作数据库
  
- 技术禁区：
  - 不得在 Controller 中编写业务逻辑
  - 不得在前端直接拼接 SQL
  - 不得在循环中执行数据库查询（N+1 问题）
  - 不得使用 `SELECT *`（必须明确列出字段）
```

### Contracts

**目的**：定义项目内的约定和规范。

**内容**：
- Feature 状态约定
- 完成摘要格式
- 命令约定
- 提交信息规范
- 其他团队约定

**示例**：
```markdown
## Contracts

- Feature 状态：`[ ]` 未开始、`[~]` 进行中、`[!]` 阻塞、`[x]` 完成
- 完成摘要必须包含：
  - 全部 `AC-* -> evidence`（验收标准和证据）
  - Review 结论（pass / findings 待修复）
  - 验证档位（Lite / Standard / High-risk）
  - Git commit OID 和 message
- 命令约定：
  - 提交信息使用中文，遵循 Conventional Commits
  - 不包含 `Co-Authored-By` 等 AI 协作者署名
- 分支策略：
  - `main`：生产环境
  - `develop`：开发环境
  - `feature/*`：功能分支
  - 禁止直接推送到 `main`
```

### Commands

**目的**：记录常用命令，方便快速执行。

**内容**：
- 启动命令
- 测试命令
- 构建命令
- 部署命令
- 数据库迁移
- 其他常用操作

**示例**：
```markdown
## Commands

- 启动后端：`cd backend && ./mvnw spring-boot:run`
- 启动前端：`cd frontend && npm run dev`
- 运行测试：`./mvnw test` + `npm run test`
- 构建生产版本：`./mvnw package -DskipTests` + `npm run build`
- 数据库迁移：`./mvnw flyway:migrate`
- 代码检查：`./mvnw checkstyle:check` + `npm run lint`
- 语法检查：`node --check <script>`
- Git diff 检查：`git diff --check`
```

### Open decisions

**目的**：记录待决策事项，避免重复讨论。

**内容**：
- 背景：为什么需要决策
- 选项：有哪些可行方案
- 倾向：当前倾向哪个方案
- 阻塞：决策需要什么前置条件

**示例**：
```markdown
## Open decisions

- 是否引入消息队列：
  - 背景：订单量增长，异步处理需求增加
  - 选项：RabbitMQ / Kafka / RocketMQ / 暂不引入
  - 倾向：暂不引入，观察到 TPS > 1000 再考虑
  - 阻塞：需要评估运维成本和团队技能
  
- 前端状态管理方案：
  - 背景：页面复杂度提升，组件间通信困难
  - 选项：Pinia / Vuex / Composition API + provide/inject
  - 倾向：Pinia（Vue 3 官方推荐）
  - 阻塞：需要完成技术预研
```

## 轻量注入机制

### 上下文预算

Runtime Hook 只注入当前问题相关的章节事实：

| 组件 | 预算 | 策略 |
|------|------|------|
| Quick facts | 500 bytes | 选最相关的 1 条 |
| Reuse map | 1000 bytes | 选最相关的 1 条 |
| Boundaries | 1000 bytes | 选最相关的 1 条 |
| 相关章节 | 500 bytes | 命中时再注入 |
| **总计** | **3000 bytes** | 防止 Hook 卡死 |

### 相关性判断

根据用户输入关键词匹配：

**示例输入**："实现客户列表分页查询"

**匹配逻辑**：
- "客户" → Quick facts 中的定位
- "列表" → Reuse map 中的分页工具
- "查询" → Boundaries 中的数据库操作规范

**注入内容**：
```markdown
<project_memory path="PROJECT-MEMORY.md" status="present">
Quick facts: - 定位：企业级客户关系管理系统（CRM）
Reuse map: - `PageHelper.startPage()`：分页查询，所有列表接口必须使用
Boundaries: - 不得使用 `SELECT *`，必须明确列出字段
</project_memory>
```

### 完整文件读取

当需要完整上下文时，Skill 可以直接读取：

```bash
# 在 Skill 中
Read PROJECT-MEMORY.md
```

不经过 Hook 预算限制，可读取完整内容。

## 维护与更新

### 何时更新

**应该更新**：
- ✅ 确认新的复用入口
- ✅ 确认新的技术栈或框架版本升级
- ✅ 确认新的架构边界
- ✅ 完成重要技术决策
- ✅ 确认新的禁止项

**不应该更新**：
- ❌ Feature 完成（更新 TODO 即可）
- ❌ 临时实现或一次性脚本
- ❌ 局部变量或内部实现细节
- ❌ 进度统计或执行日志

### 更新流程

1. **当轮确认稳定事实**：
   - 在实现或审查过程中确认
   - 不是猜测或假设

2. **调用 project-details**：
   ```
   将以下事实归并到 PROJECT-MEMORY.md：
   - Reuse map: 新增 `com.example.crm.common.cache.CacheService`
   ```

3. **原位归并**：
   - `project-details` 读取现有记忆
   - 在对应章节追加或更新
   - 保持格式一致

4. **不生成副本**：
   - 不创建 `context.json`
   - 不创建 `project-facts.md`
   - 只维护单一 `PROJECT-MEMORY.md`

### 更新示例

**场景**：实现了新的缓存工具类。

**确认事实**：
- 位置：`com.example.crm.common.cache.CacheService`
- 职责：统一缓存操作，封装 Redis
- 约束：所有缓存操作必须使用此类

**调用 project-details**：
```
将以下稳定事实归并到 PROJECT-MEMORY.md：

Reuse map:
- `com.example.crm.common.cache.CacheService`：统一缓存操作，Owner: 基础设施，所有 Redis 缓存必须使用此类而不是直接使用 RedisTemplate
```

**归并结果**：
```markdown
## Reuse map

- `com.example.crm.common.utils.DateUtils`：日期格式化工具...
- `com.example.crm.common.response.Result<T>`：统一响应格式...
- `com.example.crm.common.cache.CacheService`：统一缓存操作，Owner: 基础设施，所有 Redis 缓存必须使用此类而不是直接使用 RedisTemplate  ← 新增
```

## 消费记忆

### Skill 中消费

每个 Skill 应该：

1. **读取相关章节**：
   ```
   Read PROJECT-MEMORY.md
   ```

2. **落实为决策**：
   - `reuse`：使用既有实现
   - `extend`：扩展既有实现
   - `not-applicable`：不适用当前 Feature

3. **记录在规划中**：
   ```markdown
   ### [~] FEAT-001: 实现客户列表
   ...
   - 规划：
     - 复用 `PageHelper.startPage()` 实现分页 (reuse)
     - 复用 `Result<T>` 作为响应格式 (reuse)
     - 复用 `@DataPermission` 实现数据权限 (reuse)
     - 新增 `CustomerController.list()` (extend)
   ```

### 实现中验证

在实现代码时：

1. **检查复用地图**：
   - 是否有既有实现
   - 是否满足当前需求
   - 是否需要扩展

2. **检查边界**：
   - 是否违反架构边界
   - 是否使用禁止的技术
   - 是否触碰技术禁区

3. **检查约定**：
   - 提交信息是否符合规范
   - 目录结构是否正确
   - 命名是否一致

### Review 中核对

在代码审查时：

1. **核对复用**：
   - 是否使用了应该复用的组件
   - 是否重复实现了已有能力

2. **核对边界**：
   - 是否违反了架构边界
   - 是否引入了禁止的技术

3. **核对约定**：
   - 是否符合团队约定

## 最佳实践

### 1. 保持轻量

- ✅ 只记录稳定事实
- ✅ 一句话说明，不长篇大论
- ❌ 不记录变化频繁的内容
- ❌ 不记录实现细节

### 2. 保持真实

- ✅ 从源码核对事实
- ✅ 从 README 和构建文件确认
- ❌ 不猜测技术栈
- ❌ 不复制示例当作项目事实

### 3. 保持单一

- ✅ 一个项目一个记忆文件
- ✅ 稳定事实在记忆，任务状态在 TODO
- ❌ 不建立多个记忆副本
- ❌ 不把记忆当作 Context 存储

### 4. 及时更新

- ✅ 确认稳定事实后当轮归并
- ✅ 技术决策完成后记录
- ❌ 不等到项目结束再更新
- ❌ 不把临时实现记录为稳定事实

### 5. 明确 Owner

- ✅ 每个复用入口都有 Owner
- ✅ 每个边界都有原因
- ❌ 不记录无主组件
- ❌ 不记录无原因的禁止项

## 常见问题

### Q: 记忆文件太大怎么办？
A: 
- Hook 只注入相关章节（3000 bytes）
- Skill 需要时才读取完整文件
- 如果确实太大，考虑是否记录了不应该记录的内容

### Q: 如何知道记忆是否已初始化？
A: 
```bash
# 检查记忆文件状态
cat PROJECT-MEMORY.md

# 或查看 Hook 输出
node runtime-hooks/scripts/skill-catalog-context.cjs --check
```

### Q: 记忆与 CLAUDE.md / AGENTS.md 的区别？
A: 
- `CLAUDE.md` / `AGENTS.md`：可能包含规则模板和通用建议
- `PROJECT-MEMORY.md`：只记录当前项目的稳定事实
- 首次创建时可吸收既有文档的事实部分，不复制规则

### Q: 记忆与 TODO 的区别？
A: 
- `PROJECT-MEMORY.md`：稳定事实、复用地图、边界（长期）
- `docs/<dev>/tasks/todo/`：Feature 状态、进度、执行（短期）

### Q: 多人协作时如何同步记忆？
A: 
- 记忆文件随代码一起 commit 和 push
- 团队成员 pull 后自动获得最新记忆
- 冲突时手动合并（同 Git 流程）

### Q: 如何强制重新初始化记忆？
A: 
```bash
# 备份现有记忆
mv PROJECT-MEMORY.md PROJECT-MEMORY.md.bak

# 创建空文件触发初始化
touch PROJECT-MEMORY.md

# 或删除文件让 Hook 自动创建
rm PROJECT-MEMORY.md
```

## 参考资料

- [Runtime Hook 使用](04-runtime-hooks.md)
- [PROJECT-MEMORY.md 示例](../PROJECT-MEMORY.md)
- [项目事实契约](../CLAUDE.md#项目事实契约)

---

**最后更新**：2026-09-03
