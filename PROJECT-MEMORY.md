# Project Memory

## Quick facts

- 本仓库是 Skills Framework 与 Docker、Linux、Java 部署文档站，使用 Astro 7 和 Starlight 0.42；依赖版本以 `package.json` 和 `pnpm-lock.yaml` 为准。
- 页面位于 `src/content/docs/`，使用 Markdown/MDX；内容集合由 `src/content.config.ts` 的 Starlight loader/schema 管理。
- Skill 内容来源为同级 `../skills/` 仓库的 `SKILLS.md`、各 Skill 的 `SKILL.md` 及其直接引用资源；站点是使用文档，不是运行时发现清单。

## Reuse map

- `astro.config.ts`：站点配置与主题导航的唯一入口，使用 `starlight-sidebar-topics-dropdown`；主题内可用自动目录和页面 `sidebar.order` 指定顺序。
- `src/content/docs/index.mdx`：首页沿用 Starlight Hero、Houston 图片和四个主题入口；`src/styles/home.css` 通过首页标记限定样式，不改变普通文档页和主题导航。
- `src/content/docs/skills/getting-started.mdx`：安装入口；`quickstart.mdx`：安装后的第一次使用；`usage/`：日常场景与操作流程。
- `src/content/docs/skills/catalog/`：按任务与优先级查找 Skill；`skills-reference/<priority>/`：单个 Skill 的用途、输入、示例和边界。新增 Skill 同步这些入口，参考页复用现有 Starlight 文档样式。
- `src/content/docs/skills/core-concepts/`、`hooks/`、`advanced/`：原理、Hook 运维与维护者参考；入门页通过链接引用，避免重复整套流程。
- Hook 版本说明以源仓库 `runtime-hooks/VERSION` 和 `scripts/hook-version-manager.cjs` 为准；明确区分 Hooks 源版本、客户端安装记录与 Codex/Claude Code 客户端版本，安装记录不证明当前会话已重载。
- `CHANGELOG.md`：本仓库的交付日志入口；每个真实文档、配置或站点行为变更与改动同一提交记录，分支合并按实际 fast-forward 或 merge commit 语义去重。

## Boundaries

- 文档维护保留已有页面 URL；导航排序通过配置或 `sidebar.order` 调整，不为排序移动文件。
- 说明客户端实际发现、Skill 规则和 Hook 运行行为时，以源仓库对应文件为依据。目录或静态场景检查不能证明真实调用准确率。
- 本仓库不安装或注册 Skill、Runtime Hook 或 MCP。文档中的安装命令在 Skill 源仓库执行。
- `.github/workflows/deploy.yml` 在 `master` push 时构建并发布 GitHub Pages；编辑文档与本地预览不等于授权发布。

## Contracts

- 每个非系统 Skill 在 `skills-reference/` 有一个同名参考页，分类对应源 `SKILL.md` 的 `priority`；目录统计不包含客户端系统 Skill。
- 站内链接使用以 `/` 开头的页面路径，站点配置 `trailingSlash: "always"`。
- 唯一项目记忆位于本文件，任务状态不写入记忆。
- 变更日志记录用户可观察影响、兼容注意和恢复信息，不保存 TODO 状态、执行实例、命令流水或伪造提交证据。

## Commands

- 安装锁定依赖：`pnpm install --frozen-lockfile`。
- 本地开发：`pnpm dev --host 127.0.0.1`；指定其他端口时追加 `--port <port>`。
- 构建：`pnpm build`，产物位于 `dist/`。
- 本地预览构建产物：`pnpm preview --host 127.0.0.1`。

## Open decisions

- 无影响当前文档维护的未决事项。
