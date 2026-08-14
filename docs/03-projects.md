# 03 — Projects

## Purpose

「作れる人」「動くものを出せる人」の証明。Applied AI Engineer としての実力の証拠。

## Layout

3 プロジェクトを横並び (デスクトップ) / 縦積み (モバイル):

```
[Card 1: LangChain RAG Explorer]  [Card 2: German Compound Words]  [Card 3: NotebookLM × LinkedIn 講座]
```

## Card 型 (共通)

各カードに以下の要素:

1. **サムネイル** (スクショ or 図)
2. **タイトル**
3. **1 行の要約** (何を作った/解決した)
4. **技術タグ** (3-5 個、`·` 区切り or ピル型)
5. **リンク** (GitHub / Demo / Blog / LinkedIn 投稿 のうち該当)
6. **ステータスバッジ** (`In Progress` / `Completed` / `Talk`)

## Card 1: LangChain RAG Explorer

- **タイトル**: LangChain RAG Explorer
- **サムネイル**: `assets/images/rag-explorer-thumbnail.png` (実装時に用意)
- **1 行要約**: 
  > A multilingual RAG system (JP/EN, German planned) mapping semantics & pragmatics theory onto retrieval and inference components.
- **技術タグ**: Python · LangChain · LangGraph · pgvector · BGE-M3 · Gemini API
- **リンク**: GitHub リポジトリ (URL は Yamato が実装時に確定)
- **ステータス**: `In Progress` → Sept 3 完成予定で `Completed` に切り替え

**差別化ポイント (README や blog post で書く内容)**:
- Stalnaker の Common Ground、Roberts の QUD、Speech Acts、Neo-Gricean implicature を RAG/agent アーキテクチャの各コンポーネントにマッピング
- 単なる LangChain チュートリアルの写経ではなく、言語学的フレームワークで設計されたシステム

## Card 2: German Compound Words (仮題)

- **タイトル**: (Yamato が正式名を確定 — 例: "German Compound Word Analyzer")
- **サムネイル**: `assets/images/compound-thumbnail.png`
- **1 行要約**: 
  > (Yamato がプロジェクト詳細を追記 — 例: "A tool for decomposing and analyzing German compound words using linguistic morphology.")
- **技術タグ**: (プロジェクト内容次第 — 例: Python · spaCy · Morphological Analysis)
- **リンク**: GitHub リポジトリ (実装時)
- **ステータス**: (現状に応じて)

**メモ**: このプロジェクトはドイツ語 (多言語性の実演) + 言語学的深さ (形態素解析) の両方を証明するので、Positioning との親和性が高い。1 行要約でその両面を出す。

## Card 3: NotebookLM × LinkedIn Community Workshop

- **タイトル**: NotebookLM × LinkedIn Workshop
- **サムネイル**: LT 登壇時の写真 or NotebookLM のスクショ (`assets/images/notebooklm-workshop.png`)
- **1 行要約**: 
  > Led a live workshop at the LinkedIn Japan HQ demoing how NotebookLM (Video Overview, Canvas) can turn accumulated LinkedIn posts into a personal knowledge base.
- **技術タグ**: NotebookLM · Gemini · Community Building · Live Demo
- **リンク**: LinkedIn 投稿 (LT 実施のもの)
- **ステータス**: `Talk` (トーク実施済み)

**メモ**: 純粋な技術プロジェクトではないが、「AI ツールを実践で使いこなし、コミュニティに還元する人」という多面性を出す。テック × コミュニティのハイブリッド。

## 入れないもの

- 大学の課題レベルの小さい練習 (Word Count Counter 等)
- 完成度が低くて公開できないもの
- Power BI ダッシュボード (Resume 内の FPT bullet に PDF リンクで残す)

## デザイン注意点

- 3 カードのサイズを揃える (グリッドの列を統一)
- サムネイルのアスペクト比を統一 (例: 16:9)
- ステータスバッジは目立たせすぎない (小さめ、右上の隅など)
- 技術タグはピル型より `·` 区切りテキストの方がモノトーンと相性が良い

## 判断ポイント (実装時)

- カード全体をクリック可能にするか、リンクだけクリックにするか
- ホバー時のインタラクション (拡大 / 影が出る / 何もしない)
- カードの数が 3 で足りるか、将来的に追加するときのグリッド設計
- RAG Explorer 完成前の段階では `In Progress` バッジ + プレースホルダースクショで OK

## 未確定情報 (実装前に Yamato が確定)

- German Compound Words プロジェクトの正式名・概要・使用技術
- 各プロジェクトの GitHub URL
- 各サムネイル画像 (スクショ or 図の準備)
