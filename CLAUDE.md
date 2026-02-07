# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Pretty Mermaid Skills is a Claude Code skill that renders Mermaid diagrams as themed SVGs or ASCII art. It wraps the `beautiful-mermaid` npm library with three CLI scripts. The sole runtime dependency is `beautiful-mermaid@^0.1.3`, which auto-installs on first run if missing.

## Commands

```bash
# Install dependencies
npm install

# Render a single diagram
node scripts/render.mjs --input <file.mmd> --output <file.svg> --theme <name>

# Render ASCII output
node scripts/render.mjs --input <file.mmd> --format ascii --use-ascii

# Batch render a directory of .mmd files
node scripts/batch.mjs --input-dir <dir> --output-dir <dir> --theme <name> --workers 4

# List all available themes
node scripts/themes.mjs
```

There is no test suite, linter, or build step configured.

## Architecture

The project is an ES module (`"type": "module"` in package.json) targeting Node.js 14+.

### Scripts (`scripts/`)

All three scripts share a `loadBeautifulMermaid()` pattern that dynamically imports `beautiful-mermaid` and auto-installs it via `npm install` if the import fails. CLI arguments are parsed manually (no external arg parser).

- **render.mjs** — Renders a single `.mmd` file. Supports SVG and ASCII formats, 15 named themes, custom color overrides (`--bg`, `--fg`, `--accent`, etc.), transparency, and font selection. Outputs to file or stdout.
- **batch.mjs** — Discovers all `.mmd` files in an input directory and renders them in parallel batches using `Promise.allSettled()`. Worker count is configurable (`--workers`, default 4). Reports per-file success/failure.
- **themes.mjs** — Prints all theme names from the `THEMES` object exported by `beautiful-mermaid`.
- **postprocess.mjs** — Shared SVG post-processing module. Strips boundary `&quot;` entities leaked by `["..."]` bracket labels and converts encoded line breaks (`<br/>`, `\n`) into `<tspan>` elements with vertical centering. Imported by both `render.mjs` and `batch.mjs`.

### Key library API surface

From `beautiful-mermaid`, the scripts use:
- `renderMermaid(mermaidCode, options)` — returns SVG string (async)
- `renderMermaidAscii(mermaidCode, options)` — returns ASCII string (sync)
- `THEMES` — object mapping theme names to color palettes

### Reference docs (`references/`)

- `DIAGRAM_TYPES.md` — Mermaid syntax for all 5 supported types (flowchart, sequence, state, class, ER)
- `THEMES.md` — Detailed theme descriptions and color palettes
- `api_reference.md` — beautiful-mermaid API documentation (exports, options, defaults)

### Skill metadata

`SKILL.md` contains the skill definition, trigger conditions, workflow decision tree, and usage examples. This is the file AI coding tools read to understand when and how to invoke the skill.

## Themes

15 built-in themes available via `--theme`:

- **Light:** zinc-light, tokyo-night-light, github-light, solarized-light, catppuccin-latte, nord-light
- **Dark:** zinc-dark, tokyo-night, tokyo-night-storm, github-dark, solarized-dark, dracula, nord, catppuccin-mocha, one-dark

When `--theme` is specified it overrides all custom color flags. Custom colors are only used when no theme is selected.

## Conventions

- All scripts use ESM imports with the `__dirname` workaround (`dirname(fileURLToPath(import.meta.url))`)
- `skillRoot` resolves to the repo root from any script via `join(__dirname, '..')`
- The `bin` field in package.json maps `render-mermaid`, `batch-mermaid`, and `list-mermaid-themes` to the scripts
- Example diagrams in `assets/example_diagrams/` serve as templates for each diagram type
