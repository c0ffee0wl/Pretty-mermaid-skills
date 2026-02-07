# beautiful-mermaid API Reference

API surface of the `beautiful-mermaid` npm package (v0.1.3) as used by this skill.

## Exports

### `renderMermaid(code, options)` (async)

Renders Mermaid diagram code to an SVG string.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `code` | `string` | Mermaid diagram source (flowchart, sequence, state, class, or ER syntax) |
| `options` | `object` | Rendering options (see below) |

**Options:**

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `bg` | `string` | `'#FFFFFF'` | Background color (hex) |
| `fg` | `string` | `'#27272A'` | Foreground/text color (hex) |
| `line` | `string` | — | Edge/connector color (hex) |
| `accent` | `string` | — | Arrow heads and highlights color (hex) |
| `muted` | `string` | — | Secondary text color (hex) |
| `surface` | `string` | — | Node fill tint color (hex) |
| `border` | `string` | — | Node stroke color (hex) |
| `font` | `string` | `'Inter'` | Font family name |
| `transparent` | `boolean` | `false` | Transparent background |

**Returns:** `Promise<string>` — SVG markup.

**Example:**
```javascript
import { renderMermaid } from 'beautiful-mermaid';

const svg = await renderMermaid('flowchart LR\n  A --> B', {
  bg: '#1a1b26',
  fg: '#a9b1d6',
  font: 'Inter',
  transparent: false,
});
```

---

### `renderMermaidAscii(code, options)` (sync)

Renders Mermaid diagram code to a plain-text ASCII art string.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `code` | `string` | Mermaid diagram source |
| `options` | `object` | ASCII rendering options (see below) |

**Options:**

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `useAscii` | `boolean` | `false` | Use pure ASCII characters instead of Unicode box-drawing |
| `paddingX` | `number` | `5` | Horizontal spacing between elements |
| `paddingY` | `number` | `5` | Vertical spacing between elements |
| `boxBorderPadding` | `number` | `1` | Padding inside node boxes |

**Returns:** `string` — ASCII art diagram.

**Example:**
```javascript
import { renderMermaidAscii } from 'beautiful-mermaid';

const ascii = renderMermaidAscii('flowchart LR\n  A --> B', {
  useAscii: true,
  paddingX: 5,
  paddingY: 5,
  boxBorderPadding: 1,
});
```

---

### `THEMES`

Object mapping theme names to color palette objects. Each palette contains the color keys accepted by `renderMermaid()` (`bg`, `fg`, `line`, `accent`, `muted`, `surface`, `border`).

**Type:** `Record<string, { bg: string, fg: string, ... }>`

**Available themes (15):**

| Theme | Category |
|-------|----------|
| `zinc-light` | Light |
| `tokyo-night-light` | Light |
| `github-light` | Light |
| `solarized-light` | Light |
| `catppuccin-latte` | Light |
| `nord-light` | Light |
| `zinc-dark` | Dark |
| `tokyo-night` | Dark |
| `tokyo-night-storm` | Dark |
| `github-dark` | Dark |
| `solarized-dark` | Dark |
| `dracula` | Dark |
| `nord` | Dark |
| `catppuccin-mocha` | Dark |
| `one-dark` | Dark |

**Example:**
```javascript
import { renderMermaid, THEMES } from 'beautiful-mermaid';

const palette = THEMES['tokyo-night'];
const svg = await renderMermaid(code, { ...palette, font: 'Inter' });
```

---

## Theme vs Custom Color Precedence

When `--theme` is specified on the CLI, its palette is used directly and any custom color flags (`--bg`, `--fg`, etc.) are ignored. Custom colors only take effect when no theme is selected.

## SVG Post-Processing

The raw SVG output from `renderMermaid()` has two known issues that the skill corrects via `scripts/postprocess.mjs`:

1. **Quote leakage** — Mermaid `["..."]` bracket labels produce `&quot;` entities in `<text>` elements. The post-processor strips boundary quotes.
2. **Literal line breaks** — `<br/>` and `\n` in labels appear as encoded text instead of producing multi-line output. The post-processor converts them to `<tspan>` elements with vertical centering.
