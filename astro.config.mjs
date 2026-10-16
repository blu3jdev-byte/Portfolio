import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// GitHub Pages serves a repo site from /<repo-name>/.
// If you later move to a custom domain, set `base` to '/' and update `site`.
const site = 'https://blu3jdev-byte.github.io';
const base = '/Portfolio';

// Lets you write root-relative paths in Markdown (e.g. ![](/images/x.jpg) or
// [paper](/papers/x.pdf)) and have the base path added automatically.
function rehypeBasePath() {
  const prefix = (value) =>
    typeof value === 'string' &&
    value.startsWith('/') &&
    !value.startsWith('//') &&
    !value.startsWith(base + '/')
      ? base + value
      : value;

  const walk = (node) => {
    if (node.type === 'element' && node.properties) {
      if (['img', 'source', 'video'].includes(node.tagName)) {
        node.properties.src = prefix(node.properties.src);
      }
      if (node.tagName === 'a') {
        node.properties.href = prefix(node.properties.href);
      }
    }
    (node.children || []).forEach(walk);
  };

  return (tree) => walk(tree);
}

export default defineConfig({
  site,
  base,
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, rehypeBasePath],
    shikiConfig: { theme: 'github-dark' },
  },
});
