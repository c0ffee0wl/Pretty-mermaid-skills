# Beautiful-Mermaid Theme Reference

Beautiful-Mermaid provides 15 carefully designed built-in themes covering both light and dark color schemes. Each theme is based on two core colors (background `bg` and foreground `fg`) and can be enhanced with optional rich colors.

## Quick Selection Guide

### Light Themes
| Theme | Background | Foreground | Use Case |
|-------|------------|------------|----------|
| `zinc-light` | #FFFFFF | auto-derived | General-purpose light theme |
| `tokyo-night-light` | #d5d6db | #34548a | Soft light |
| `catppuccin-latte` | #eff1f5 | #8839ef | Fresh light |
| `nord-light` | #eceff4 | #5e81ac | Icy blue light |
| `github-light` | #ffffff | #0969da | GitHub light style |
| `solarized-light` | #fdf6e3 | #268bd2 | Solarized light |

### Dark Themes
| Theme | Background | Foreground | Use Case |
|-------|------------|------------|----------|
| `zinc-dark` | #18181B | auto-derived | General-purpose dark theme |
| `tokyo-night` | #1a1b26 | #a9b1d6 | Modern Japanese-inspired style |
| `tokyo-night-storm` | #24283b | #a9b1d6 | Tokyo Night variant |
| `catppuccin-mocha` | #1e1e2e | #cba6f7 | Warm dark |
| `nord` | #2e3440 | auto-derived | Nordic icy blue style |
| `dracula` | #282a36 | #f8f8f2 | Classic dark theme |
| `github-dark` | #0d1117 | #4493f8 | GitHub dark style |
| `solarized-dark` | #002b36 | #268bd2 | Solarized dark |
| `one-dark` | #282c34 | auto-derived | Atom One Dark style |

---

## Detailed Theme Descriptions

### `zinc-light` (Light)
**Characteristics:** Clean, general-purpose light theme suited for printing and high-contrast scenarios.

**Configuration:**
```javascript
{
  bg: '#FFFFFF',
  fg: '#27272A'
}
```

**Best for:**
- Formal documents and reports
- Print output
- Presentation slides

**Example:**
```mermaid
graph TD
  A[Start] --> B{Decision}
  B -->|Yes| C[Action]
  B -->|No| D[End]
```

---

### `zinc-dark` (Dark)
**Characteristics:** Pure dark theme with auto-derived foreground color. Minimalist style.

**Configuration:**
```javascript
{
  bg: '#18181B',
  fg: 'auto-derived'
}
```

**Best for:**
- Terminal applications
- Dark UI integration
- Code editors

---

### `tokyo-night` (Dark)
**Characteristics:** Modern Japanese-inspired style with soft blue tones, designed for developers.

**Configuration:**
```javascript
{
  bg: '#1a1b26',
  fg: '#a9b1d6',
  accent: '#7aa2f7'
}
```

**Best for:**
- Modern developer documentation
- AI-assisted programming
- Code examples and tutorials

**Visual properties:**
- Deep blue background (#1a1b26)
- Soft purple text (#a9b1d6)
- Bright blue accent (#7aa2f7)

---

### `tokyo-night-storm` (Dark)
**Characteristics:** Deeper variant of Tokyo Night with a darker background.

**Configuration:**
```javascript
{
  bg: '#24283b',
  fg: '#a9b1d6',
  accent: '#7aa2f7'
}
```

**Best for:**
- Very low-light environments
- OLED screen optimization
- Extended reading sessions

---

### `tokyo-night-light` (Light)
**Characteristics:** Light version of Tokyo Night, maintaining the same color philosophy.

**Configuration:**
```javascript
{
  bg: '#d5d6db',
  fg: '#34548a'
}
```

**Best for:**
- Daytime use
- High-contrast requirements
- Print-friendly output

---

### `catppuccin-mocha` (Dark)
**Characteristics:** Warm, cozy dark theme with red-purple accents.

**Configuration:**
```javascript
{
  bg: '#1e1e2e',
  fg: '#cba6f7'
}
```

**Best for:**
- Extended reading (easy on the eyes)
- Creative projects
- Design documentation

---

### `catppuccin-latte` (Light)
**Characteristics:** Light variant of Catppuccin, warm and soft.

**Configuration:**
```javascript
{
  bg: '#eff1f5',
  fg: '#8839ef'
}
```

**Best for:**
- Daytime light environments
- Purple color enthusiasts
- Design-oriented documentation

---

### `nord` (Dark)
**Characteristics:** Nordic-inspired icy blue tones, professional and calm.

**Configuration:**
```javascript
{
  bg: '#2e3440',
  fg: 'auto-derived'
}
```

**Best for:**
- Corporate documentation
- Technical specifications
- System architecture diagrams

**Visual properties:**
- Deep gray-blue background
- High-contrast text
- Cool overall tone

---

### `nord-light` (Light)
**Characteristics:** Light version of Nord.

**Configuration:**
```javascript
{
  bg: '#eceff4',
  fg: '#5e81ac'
}
```

**Best for:**
- Daytime light use
- Printed materials
- Nordic-style projects

---

### `dracula` (Dark)
**Characteristics:** Classic deep dark theme with high contrast.

**Configuration:**
```javascript
{
  bg: '#282a36',
  fg: '#f8f8f2'
}
```

**Best for:**
- Code editor integration
- Developer documentation
- Command-line tools

**Visual properties:**
- Very deep background
- Bright text
- Purple and pink accents

---

### `github-light` (Light) ⭐ Recommended
**Characteristics:** GitHub light theme, web-friendly.

**Configuration:**
```javascript
{
  bg: '#ffffff',
  fg: '#0969da'
}
```

**Best for:**
- GitHub READMEs
- Web documentation
- Online tutorials

---

### `github-dark` (Dark)
**Characteristics:** GitHub dark theme, familiar to GitHub users.

**Configuration:**
```javascript
{
  bg: '#0d1117',
  fg: '#4493f8'
}
```

**Best for:**
- GitHub documentation
- GitHub Issues and Discussions
- Open-source projects

---

### `solarized-light` (Light)
**Characteristics:** Classic light theme designed by Ethan Schoonover.

**Configuration:**
```javascript
{
  bg: '#fdf6e3',
  fg: '#268bd2'
}
```

**Best for:**
- Research papers
- Academic documentation
- Precise color work

---

### `solarized-dark` (Dark)
**Characteristics:** Dark version of Solarized with carefully tuned contrast.

**Configuration:**
```javascript
{
  bg: '#002b36',
  fg: '#268bd2'
}
```

**Best for:**
- Long-form document reading
- Scientific papers
- Programming textbooks

---

### `one-dark` (Dark)
**Characteristics:** Classic One Dark theme from the Atom editor.

**Configuration:**
```javascript
{
  bg: '#282c34',
  fg: 'auto-derived'
}
```

**Best for:**
- Atom users
- JavaScript projects
- Web development documentation

---

## Custom Themes

### Basic Customization (Mono Mode)

You only need two colors to create a good-looking theme:

```bash
node scripts/render.mjs \
  --input diagram.mmd \
  --output output.svg \
  --bg '#0f0f0f' \
  --fg '#e0e0e0'
```

The system will auto-derive all other colors.

### Advanced Customization (Enriched Mode)

For richer color schemes, provide optional accent colors:

```bash
node scripts/render.mjs \
  --input diagram.mmd \
  --output output.svg \
  --bg '#0f0f0f' \
  --fg '#e0e0e0' \
  --accent '#ff6b6b' \
  --muted '#666666' \
  --line '#4a90e2' \
  --surface '#1a1a1a' \
  --border '#2a2a2a'
```

### Color Selection Guide

| Parameter | Purpose | Example |
|-----------|---------|---------|
| `--bg` | Background color (required) | `#1a1a1a` |
| `--fg` | Text color (required) | `#e0e0e0` |
| `--accent` | Arrow heads and highlights | `#7aa2f7` |
| `--muted` | Secondary text and labels | `#666666` |
| `--line` | Edges/connectors | `#3d59a1` |
| `--surface` | Node fill | `#292e42` |
| `--border` | Node stroke | `#3d59a1` |

---

## Theme Selection Decision Tree

```
What theme style are you looking for?
├── Light
│   ├── Minimal/clean? → zinc-light
│   ├── GitHub style? → github-light ⭐
│   ├── Solarized? → solarized-light
│   ├── Icy blue? → nord-light
│   ├── Purple? → catppuccin-latte
│   └── Soft Japanese-inspired? → tokyo-night-light
│
└── Dark
    ├── General-purpose? → tokyo-night
    ├── Classic dark? → dracula
    ├── Minimal/pure? → zinc-dark
    ├── Nordic style? → nord
    ├── Warm and cozy? → catppuccin-mocha
    ├── GitHub style? → github-dark
    ├── Very deep background? → tokyo-night-storm
    ├── Academic/precise? → solarized-dark
    └── Atom style? → one-dark
```

---

## Practical Examples

### Example 1: Use Tokyo Night for developer docs

```bash
node scripts/render.mjs \
  --input architecture.mmd \
  --output architecture.svg \
  --theme tokyo-night
```

### Example 2: Create a print-friendly diagram

```bash
node scripts/render.mjs \
  --input diagram.mmd \
  --output diagram.svg \
  --theme zinc-light
```

### Example 3: Batch apply a theme

```bash
node scripts/batch.mjs \
  --input-dir ./diagrams \
  --output-dir ./output \
  --format svg \
  --theme dracula
```

### Example 4: Custom corporate theme

```bash
node scripts/render.mjs \
  --input diagram.mmd \
  --output output.svg \
  --bg '#1a1a1a' \
  --fg '#ffffff' \
  --accent '#0066cc' \
  --border '#333333'
```

---

## Color Value Quick Reference

### Common Hex Colors
| Color | Hex | Use Case |
|-------|-----|----------|
| Pure white | #FFFFFF | Light backgrounds |
| Pure black | #000000 | Deep dark backgrounds |
| Dark gray | #1a1a1a | Friendly dark |
| Light gray | #f0f0f0 | Friendly light |
| Blue | #0066cc | Accent color |
| Green | #00cc00 | Success color |
| Red | #cc0000 | Warning/error |
| Purple | #9966cc | Creative projects |

---

## FAQ

**Q: Which theme should I use?**
A: If unsure, try `github-light` (light) or `tokyo-night` (dark).

**Q: How do I choose a theme for a GitHub README?**
A: Use `github-light` or `github-dark` to match GitHub's own themes.

**Q: Can I mix colors from multiple themes?**
A: Yes, use Enriched Mode to customize any color combination.

**Q: Do themes support transparent backgrounds?**
A: Yes, add the `--transparent` flag.

**Q: How should I recommend a theme to users?**
A: Based on project type: general-purpose → GitHub Light, corporate → Nord, developer dark mode → Tokyo Night.
