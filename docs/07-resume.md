# 07 — Resume

## Purpose

リクルーターがすぐ確認 / ダウンロードできる場所。ボタンだけじゃなく、内容も HTML でプレビューできる形。

Yamato の指示: 「PDF ダウンロードもあるので、選択肢 B (HTML でプレビュー) を採用」

## Layout

```
[セクション見出し + 短い intro]
[Download PDF ボタン]

[HTML でレジュメの主要部分を表示]
```

## Content 詳細

### Intro (1 行)

```
A structured overview of my education, internships, and skills. Full PDF available for download.
```

### Download PDF ボタン

- リンク先: `/assets/resume/Yamato_Yokoyama_Resume.pdf` (実装時に Yamato が最新版 PDF を配置)
- 目立つが押しつけがましくない (アウトラインボタン推奨)
- ダウンロード属性を付ける: `<a href="..." download>`
- 最終更新日を横に小さく表示: `Last updated: YYYY-MM-DD`

### HTML プレビュー領域

レジュメの主要部分を HTML で構造化して表示。以下のセクションを含む:

#### Education
- University of Tübingen — B.A. Computational Linguistics (Oct 2025 – Present, expected Summer 2028)
- Temple University Japan — Computer Science (transferred)

#### Internships
- **LinkedIn Student Club Ambassador** — LinkedIn Japan (Jan 2025 – May 2025)
- **AI Engineer Intern** — MetaMoJi (Apr 2024 – Feb 2025)
- **Data Analyst Intern** — FPT Software (Jul 2024 – Aug 2024)
  - "See project report (PDF)" リンクを追加 → `assets/resume/fpt-report.pdf`

#### Work Experience
- **Research Assistant, Data Science** — Temple University Japan (Feb 2024 – Apr 2024)
- **Student Worker, IT Help Desk** — Temple University Japan (Jun 2022 – Jul 2024)

#### Skills
- **Programming**: Python (3 years), Java (2 years), C (2 years), SQL (< 1 year)
- **AI / ML**: LangChain, LangGraph, RAG, BGE-M3, Gemini API, HuggingFace, PyTorch (basic)
- **DB**: PostgreSQL, pgvector, SQLAlchemy, Alembic, ChromaDB
- **Tools**: Git / GitHub, Docker (basic), VS Code, Obsidian, Notion, Power BI, DAX
- **Languages**: Japanese (native), English (business), German (learning)

#### Certificates
- Technical Support Fundamentals
- SQL Programming Basics
- Excel Formulas & Functions

### Resume の内容改善点 (別途 Yamato と作業予定)

**注意**: 現行 Resume PDF には以下の修正が必要 (別セッションで実施):
- `Bachelor of Art in Computational Linguistic` → `Bachelor of Arts in Computational Linguistics`
- `align with the brand guidelines` → `aligned with brand guidelines`
- `row data` → `raw data`
- Skills セクションの拡充 (LangChain, RAG, HuggingFace, Git 等の追加)
- GitHub リンクの追加 (`github.com/Yamato-Yokoyama`)
- MetaMoJi の bullet を "classifying English accent from spoken languages" から書き直し

## 入れないもの

- 電話番号 (Web に晒すのはリスク、PDF には残す)
- 住所 (プライバシー)
- 給与希望
- 参考人 (References)

## デザイン注意点

- PDF ボタンは Resume セクションの最上部に (「今すぐ DL したい人」の摩擦を減らす)
- HTML プレビューはレジュメと視覚的に近い形 (シリアスな体裁)
- 印刷用 CSS も検討 (`@media print`)、ただし最初は後回しで OK
- 各セクションの見出しは h3-h4 レベル

## SEO 効果

HTML でレジュメ内容を書くと以下のメリット:
- Google 検索で「Yamato Yokoyama LinkedIn」等のクエリで hit しやすくなる
- リクルーターが LinkedIn 経由で Yamato の名前を検索 → このサイトが上位表示
- PDF だと検索されにくいので、HTML 化する価値大

## 判断ポイント (実装時)

- スキルセクションのタグ表示 (`·` 区切り vs ピル型)
- HTML プレビューの詳細度 (bullet 全部載せる vs 一部省略で「See PDF for full details」)
- 印刷用スタイルの実装タイミング

## 未確定情報

- 最新版 PDF (typo 修正・SKILLS 拡充後のもの) の配置
- FPT の Power BI レポート PDF の配置
