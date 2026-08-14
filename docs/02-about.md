# 02 — About

## Purpose

「なぜこれをやっているか」が伝わる場所。人柄と知的関心が滲む。Positioning の裏付け。

## Layout

2 カラム構成 (デスクトップ):

```
[About 本文 (1 段落 150-200 words)]  [Word Cloud 画像]
```

モバイルでは Word Cloud が本文の下に来る。

## Content 詳細

### About 本文 (英語、叩き台)

```
I'm a Computational Linguistics student at the University of Tübingen,
currently exploring how linguistic theory can shape retrieval and
inference in modern NLP systems. My interest starts from a simple
observation: information exists, but often fails to reach the people
who need it — especially across languages.

Coming from a Computer Science background at Temple University Japan,
I moved to Germany to study language more deeply — semantics, pragmatics,
and how meaning gets composed and inferred. I now try to bring these
frameworks (Common Ground, QUD, Speech Acts) into practical systems
like RAG, where "what to retrieve" and "how to reason over it" are
still open questions.

Long-term, I want to work as an Applied AI Engineer in Germany,
building multilingual systems that connect Japan and Europe.
```

**Word count**: 約 150 words。読み終わるまで 30 秒程度が目安。

### 日本語版 (About の下に折りたたみ or トグルで、後回し可)

```
高校時代からやりたかった言語学に向き合うために、Temple University Japan
(コンピュータサイエンス) から University of Tübingen に転校し、計算言語学
を学んでいます。中心的な関心は、「情報が存在しているのに、必要な人に届か
ない」という現象 — 特に言語をまたぐと検索や理解の質が落ちる問題です。

Semantics や Pragmatics で学んだ理論 (Common Ground, QUD, Speech Acts
など) を、RAG のような実用システムの設計に持ち込むことを試しています。
将来的にはドイツで Applied AI Engineer として、日本と欧州をつなぐ多言語
システムを作りたいと考えています。
```

### Word Cloud

- **データソース**: Yamato の LinkedIn 投稿 60 本以上 (CSV, `assets/linkedin-posts/` に配置予定)
- **生成方法**: Python `wordcloud` ライブラリ、日本語対応フォント指定 (`Noto Sans JP` 等)
- **色**: モノトーン (黒 → グレーのグラデーション)、CLAUDE.md のトーン方針と統一
- **保存先**: `assets/word-cloud/wordcloud.png` (または `.svg`)
- **サイズ目安**: 500×500px 前後

### Word Cloud 生成スクリプト (別途 Claude Code に依頼)

`scripts/generate_wordcloud.py` として作成予定。以下の要件:
- LinkedIn CSV を読み込み
- テキスト列を結合、ストップワード除去 (英日両対応)
- モノクロで生成
- `assets/word-cloud/wordcloud.png` として保存

## 入れないもの

- 経歴の羅列 (Experience セクションの仕事)
- 趣味の詳細 (Contact 付近か About の最下部に 1 行程度なら OK)
- 「私は情熱を持って...」的な空文句

## デザイン注意点

- 本文は読みやすい行間 (1.6-1.8) と読みやすい行長 (60-75 文字)
- Word Cloud は装飾ではなく **意味のある視覚要素**として本文と対等に配置
- 本文と Word Cloud の間には十分な余白

## 判断ポイント (実装時)

- Word Cloud が本文の右か下か (デスクトップでの並び方)
- 日本語版を表示するか (トグル/折りたたみ/常時表示のいずれか)
- 本文の "long-term" 部分を強調するか (太字などで目立たせるか)
