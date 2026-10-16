# Jonah Pinon, engineering portfolio

A static site built with [Astro](https://astro.build). Each project and publication is a Markdown file, so adding work means writing a file and pushing it. GitHub Pages builds and publishes the site automatically.

Live address once deployed: `https://blu3jdev-byte.github.io/Portfolio/`

## Run it on your computer

You need Node.js 20 or newer.

```bash
npm install
npm run dev        # opens a live preview at http://localhost:4321/Portfolio/
```

## Add a project

1. Copy `src/content/projects/_TEMPLATE.md` to a new file, for example `src/content/projects/heat-exchanger-redesign.md`.
2. Fill in the header block (title, summary, date, tools) and write the body under the headings: Problem statement, Approach, Solution, Results.
3. Commit and push. The site updates in about a minute.

Set `draft: true` in the header to hide a project while you work on it. Set `featured: true` to show it first on the home page.

## Add images

1. Resize the image first. About 1600 px wide is plenty, and JPG or WebP keeps files small.
2. Put it in `public/images/<project-name>/`.
3. Show it in one of three ways:
   - **Cover image:** set `cover:` in the header.
   - **Gallery:** add entries under `gallery:` in the header. Captions are numbered automatically (Figure 1, Figure 2, and so on).
   - **Inside the text:** `![Describe the image](/images/<project-name>/figure.jpg)`

## Add videos

Upload the video to YouTube (unlisted is fine) or Vimeo, then add the link under `videos:` in the project header. The site embeds it.

Avoid committing large video files. GitHub rejects files over 100 MB, and big files slow every future clone of the repository. A short clip under about 20 MB can go in `public/videos/` and be referenced as `/videos/clip.mp4`.

## Add a paper

1. Put the PDF in `public/papers/`.
2. Copy `src/content/publications/iac-2025-lunar-power.md` to a new file and edit the header: title, authors, venue, year, and `pdf: /papers/your-paper.pdf`. You can also set `doi:` and `abstractUrl:`.
3. Paste the abstract into the body of the file. The site shows it behind a "Read the abstract" toggle.
4. To show the paper on a project page, add its file name (without `.md`) under `papers:` in the project header.

Publications appear on the home page and on the Publications page, newest first.

## Equations and tables

Write equations in LaTeX between dollar signs: `$\sigma = Mc/I$` inline, or a block between `$$` lines. Standard Markdown tables work too.

## Change the intro text and links

Edit `src/site.ts`. It holds your name, the intro line, the resume, LinkedIn, and GitHub links, and the accolades list.

## Publish on GitHub Pages

One-time setup:

1. Push this project to the `main` branch of the repository.
2. In the repository, open **Settings, then Pages**, and set **Source** to **GitHub Actions**.

After that, every push to `main` rebuilds and publishes the site (see `.github/workflows/deploy.yml`).

## Use a custom domain later

In `astro.config.mjs`, set `site` to your domain and `base` to `'/'`. Then add the domain under **Settings, then Pages**.

## Placeholders to replace

- `src/content/projects/meen-305-beam-optimization.md`: the date is a placeholder, and the sections in italics are prompts to replace with your own text and numbers.
- `src/content/publications/iac-2025-lunar-power.md`: confirm the title, authors, and venue against the published paper.
- `src/site.ts`: the intro line is a starting point. Edit it to say what you want.
