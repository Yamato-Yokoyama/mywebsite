# 06 — Writing

## Purpose

「継続的に言語化・発信できる人」の証明。LinkedIn 投稿 60 本以上のストックを資産として活用。
副次効果: AI Engineer 応募で「社内ドキュメント / エバンジェリズムができる人」と読ませる。

## Layout

```
[セクション見出し + intro 1 行]

[Selected Post Card 1]  [Selected Post Card 2]  [Selected Post Card 3]

[See all posts on LinkedIn →]
```

## Intro

見出しの下に短く 1 行:

```
Writing weekly on LinkedIn — mostly about NLP, career-building, and community.
```

## Selected Posts (3 枚を厳選)

Yamato の選定基準 = **エンゲージメントが高い + カテゴリの多様性**。

### Post 1: SAP HQ Visit

- **タイトル / 冒頭**: (LinkedIn 投稿の書き出し 1-2 行)
- **日付**: (投稿日)
- **エンゲージメント**: `~4.7K impressions · 41 likes · 8 comments`
- **サムネイル**: 投稿の代表画像 (`assets/images/posts/sap-post.jpg`)
- **リンク**: LinkedIn 投稿 URL

### Post 2: DeepL Office Tour

- **タイトル / 冒頭**: (LinkedIn 投稿の書き出し 1-2 行)
- **日付**: (投稿日)
- **エンゲージメント**: `225 likes · 38 comments · 4 reposts`
- **サムネイル**: `assets/images/posts/deepl-post.jpg`
- **リンク**: LinkedIn 投稿 URL

### Post 3: NotebookLM LT at LinkedIn Japan

- **タイトル / 冒頭**: (LinkedIn 投稿の書き出し 1-2 行)
- **日付**: (投稿日)
- **エンゲージメント**: `141 likes · ~2.3K impressions`
- **サムネイル**: `assets/images/posts/notebooklm-post.jpg`
- **リンク**: LinkedIn 投稿 URL

## Card 型

```
[サムネイル画像 (小さめ)]
[投稿タイトル / 冒頭 1-2 行]
[日付]
[エンゲージメント数字 (·区切り)]
```

**重要**: LinkedIn のスクショを丸ごと画像として貼るのではなく、要素を分解してカードにする。理由:
- スクショはモバイル対応と解像度で詰まる
- 数字がテキストとして目立つ (`141 likes · 2.3K impressions` の視覚的インパクト)
- CSS でモノトーンに統一できる

## CTA

カード群の下に:

```
See all posts on LinkedIn →
```

`https://www.linkedin.com/in/yamato-yokoyama/recent-activity/all/` にリンク。

## 入れないもの

- 全 60 本の投稿リスト (誰も読まない)
- ブログ形式で長文を転載 (LinkedIn がメインメディアなので誘導する形にする)
- 投稿全文の埋め込み

## 拡張の余地 (将来)

- **カテゴリフィルタ**: Yamato が LinkedIn 投稿分類モデル (NLP 練習も兼ねて) を実装したら、Tech / Events / Career の 3 分類でフィルタ UI を追加
- **RAG デモ**: RAG Explorer が完成したら、LinkedIn 投稿を検索できるミニデモを埋め込む案 (「サイト自体が retrieval + inference の実演になる」というメタメッセージが最強に)
- **多言語投稿**: 英語 / 日本語 / ドイツ語の切替 (機械翻訳 API 通しで)

## デザイン注意点

- サムネイル画像のアスペクト比を統一 (投稿によって縦横比が違うため、切り抜きで揃える)
- エンゲージメント数字は太字 or 大きめのフォントで目立たせる
- 日付は薄いグレーで控えめに

## 判断ポイント (実装時)

- 3 枚のカードの並び順 (時系列 vs エンゲージメント順)
- カード全体をクリック可能にするか、リンクだけクリックにするか (Projects と一貫させる方が良い)
- 「See all posts」の CTA のデザイン (ボタン vs テキストリンク)

## 未確定情報

- 各投稿の URL
- 各投稿の正確な冒頭 / タイトル
- 各投稿のサムネイル画像の準備
- エンゲージメント数字の最新確認 (時間経過で増える)
