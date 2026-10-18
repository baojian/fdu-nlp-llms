# Fudan NLP and LLMs

Long-term course entry point for **自然语言处理与大语言模型 / Natural Language Processing and Large Language Models** at Fudan University.

- Website: <https://baojian.github.io/fdu-nlp-llms/>
- Current offering: <https://baojian.github.io/llm-26-fall/>
- Public teaching materials: <https://github.com/baojian/llm-26-fall>

## Preview and deployment

This is a static site with no build step or package dependencies. The complete Chinese page is available without JavaScript; the language toggle progressively adds English. Its visual style follows the Fall 2026 course site.

From the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open <http://127.0.0.1:8000>. GitHub Pages serves the `main` branch at `/` (root). Keep `.nojekyll` so the files are served directly. This repository is public because the current GitHub plan does not support Pages from a private repository; it contains only public course-page source files. The separate course-application repository remains private.

## Content maintenance

- `index.html` contains the course overview, 16-week roadmap, resources, assessment, and semester entry points. `assets/site.css` holds layout and responsive styles; `assets/site.js` only enhances language switching and printing.
- Update both `data-zh` and `data-en` when editing bilingual text, and keep the visible fallback text equal to `data-zh`.
- The roadmap and resource status were checked against the public Fall 2026 site on **2026-10-18**. Lectures 1–6, A1, A2, and the individual-project catalog are published. Weeks 7–16 and A3 remain labeled as plans until their resources are released. Update the visible check date when rechecking these links.
- Keep term-specific dates and notices on the semester site. The current 10% / 45% / 45% assessment and individual written-project requirements are explicitly scoped to Fall 2026 here.
- Link to public course resources instead of duplicating large files. Keep application documents, private contact details, student submissions, grades, credentials, and temporary QA output out of this repository. Student-facing resource links point to the semester's teaching materials.
- After editing, check Chinese and English at desktop and mobile widths, keyboard navigation, disclosure controls, local anchors, and external resource links. Confirm the page remains usable with JavaScript disabled.

No formal automated test suite or build process is required for this static entry point.
