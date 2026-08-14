# 00 — Overview: サイト全体像

## 目的

このドキュメントは、mywebsite-v2 の設計会話 (2026-08-14) で決まった全内容の索引・サマリです。
各セクションの詳細実装指示は、対応する `docs/0X-*.md` を参照してください。

---

## 8 セクションの並び順

上から下へのスクロールで、リクルーターの認知が段階的に深まる設計:

| # | セクション | 目的 | ファイル |
|---|---|---|---|
| 1 | Hero | 5 秒で「何者か」を渡す | `01-hero.md` |
| 2 | About | なぜこれをやってるかの動機 (+ Word Cloud) | `02-about.md` |
| 3 | Projects | 作れる証拠 | `03-projects.md` |
| 4 | Experience | 組織で動ける証拠 | `04-experience.md` |
| 5 | Community & Outreach | 場を作れる証拠 | `05-community.md` |
| 6 | Writing | 継続的に言語化・発信できる証拠 | `06-writing.md` |
| 7 | Resume | ダウンロード + プレビュー | `07-resume.md` |
| 8 | Contact | 摩擦なく連絡できる導線 | `08-contact.md` |

---

## 大原則 (CLAUDE.md 抜粋)

### Positioning (芯)
> Computational Linguistics student bringing linguistic theory into retrieval and inference.

### Focus (キーワード)
> Building toward an Applied AI Engineer role · NLP · IR · Multilingual RAG

### Tone
モノトーン + タイポで魅せる。装飾ゼロ、余白で語る。

### 主言語
English。日本語はちょい足しレベル。

---

## 何を入れる / 入れない

### 入れる
- 顔写真 (Hero)
- Word Cloud (About 右側、LinkedIn 投稿 60 本ベース)
- スティッキーナビ + アクティブ状態のハイライト
- V1 archive リンク (footer に小さく)
- 若者サポート案内 (Community & Outreach + Contact)

### 入れない
- 動画ループ (V1 と決別)
- Data 分析セクション (Power BI は Resume 内の bullet に PDF リンクとして残すのみ)
- Temple TA (Resume からも Experience からも削除方向)
- カラフルなカードデザイン
- 派手なグラデーション

---

## 実装フェーズの進め方

1. Yamato が `assets/` に素材を配置 (顔写真, LinkedIn CSV, 各種画像, V1 コード)
2. Claude Code に `docs/01-hero.md` を参照させて Hero を実装
3. ブラウザで確認 → フィードバック → 修正
4. 翌日以降、`docs/02-about.md`, `03-projects.md` ... と 1 日 1 セクションずつ進める
5. 全セクション完成後、responsive 調整・アクセシビリティ確認・SEO メタタグ追加
6. GitHub Pages にデプロイ

---

## 決定事項の履歴 (この設計会話で議論した論点)

### Positioning の絞り込み
- 「Applied AI Engineer」だけでは埋もれる → 言語学理論を持ち込む点で差別化
- 「grounding」は NLP 界隈で意味がドリフトしているため不採用 → 「inference」を採用
- 「Multilingual」は前面に出さず「ちらつかせる」方針 (現状 3 言語未達のため)

### Highlights の 3 つ
- LinkedIn Ambassador → 「Ex」を付けて活動頻度の実態と揃える
- DeepL → "inaugural" (初開催) で公式性を出す
- Uni Tübingen → シンプルに大学名だけ

### トーンの選択
- A (学術硬派) と B (バランス) を検討したが最終的に C (モノトーン + タイポ) 採用
- 理由: 言語を扱う人であることを視覚で伝えるメタメッセージ

### Writing の独立
- 元は Community & Outreach 内に埋める案だったが独立
- 理由: LinkedIn 投稿 60 本のストックは資産、埋めるのは勿体ない

### SAP 訪問の書き方
- 「大きいよね」は書かない (誰でも書ける動機)
- Ece さん (プレゼン + LinkedIn チャット) + Business AI (Joule) + Security & Compliance の 3 点で解像度を示す
