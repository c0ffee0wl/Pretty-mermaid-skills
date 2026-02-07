/**
 * SVG post-processing for beautiful-mermaid output.
 * Fixes quote leakage and line-break rendering in <text> elements.
 */

/**
 * Strip leading/trailing &quot; entities from <text> elements and
 * convert line-break markup (&lt;br/&gt;, &lt;br&gt;, literal \n)
 * into vertically-stacked <tspan> elements.
 */
export function postProcessSvg(svg) {
  // Fix 1 — Strip boundary quotes leaked by ["..."] syntax
  svg = svg.replace(/(<text[^>]*>)&quot;/g, '$1');
  svg = svg.replace(/&quot;(<\/text>)/g, '$1');

  // Fix 2 — Convert line breaks to <tspan> elements
  svg = svg.replace(
    /<text([^>]*)>([^<]*(?:&lt;br\/?\s*&gt;|\\n)[^<]*)<\/text>/g,
    (match, attrs, content) => {
      // Extract x attribute for horizontal alignment
      const xMatch = attrs.match(/x="([^"]*)"/);
      const x = xMatch ? xMatch[1] : '0';

      // Split on encoded <br/>, <br>, or literal \n
      const lines = content.split(/&lt;br\/?\s*&gt;|\\n/);
      const n = lines.length;
      const lineHeight = 1.2; // em

      // Build tspan elements with vertical centering
      const tspans = lines.map((line, i) => {
        let dy;
        if (i === 0) {
          // Shift first line up to center the block
          dy = -((n - 1) * lineHeight) / 2;
        } else {
          dy = lineHeight;
        }
        return `<tspan x="${x}" dy="${dy}em">${line.trim()}</tspan>`;
      }).join('');

      return `<text${attrs}>${tspans}</text>`;
    }
  );

  return svg;
}
