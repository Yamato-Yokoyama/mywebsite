# 01 — Hero

## Purpose

5 秒で「この人は何者か」を渡す。閉じられなければ勝ち。

## Layout (縦の順序)

```
[顔写真 (丸/四角、小さめ)]

Yamato Yokoyama

Computational Linguistics student bringing linguistic theory into retrieval and inference.

Building toward an Applied AI Engineer role · NLP · IR · Multilingual RAG

Ex LinkedIn Student Club Japan Ambassador · Organized inaugural LinkedIn × DeepL Japan office tour · Now at Uni Tübingen

[LinkedIn]  [GitHub]  [Email]  [Resume PDF]
```

## Content 詳細

### 名前
```
Yamato Yokoyama
```
- 大きく、hero の視覚的中心
- H1 タグ

### Positioning 1 行
```
Computational Linguistics student bringing linguistic theory into retrieval and inference.
```
- Sub-headline として名前の直下
- 少し大きめのウェイト、tag は `<p>` か `<h2>` の subtitle 相当

### Focus 行 (キャリア方向 + キーワード)
```
Building toward an Applied AI Engineer role · NLP · IR · Multilingual RAG
```
- Positioning より小さめ、少しグレーで
- キーワードは `·` (middle dot) 区切り
- ATS / Google 検索でヒットする役割も兼ねる

### Highlights 行 (Proof)
```
Ex LinkedIn Student Club Japan Ambassador · Organized inaugural LinkedIn × DeepL Japan office tour · Now at Uni Tübingen
```
- Focus 行のさらに下、もう少し小さめ
- 3 つのビッグワードで「実績のある応募者」を示す
- 各項目からアンカーリンクで下部セクションへ:
  - `Ex LinkedIn Student Club Japan Ambassador` → `#experience` (LinkedIn Japan の項目)
  - `Organized inaugural LinkedIn × DeepL Japan office tour` → `#community` (DeepL の項目)
  - `Now at Uni Tübingen` → 特にリンク不要 (現在地の証明のみ)

### キーリンク
- LinkedIn: `https://www.linkedin.com/in/yamato-yokoyama/`
- GitHub: `https://github.com/Yamato-Yokoyama`
- Email: `mailto:yamato.yokoyama25@gmail.com`
- Resume PDF: `#resume` (アンカー) または `/assets/resume/Yamato_Yokoyama_Resume.pdf` (直接 DL)

アイコンライブラリは Bootstrap Icons または Feather Icons 推奨。モノトーン統一。

### 顔写真
- Yamato が `assets/images/profile.jpg` として配置
- サイズ目安: 200×200px、丸型 or 角丸四角
- Hero の左上 or 中央上 (レイアウトの検討は実装時)

## 入れないもの

- 動画ループ (V1 との決別)
- 長い自己紹介文 (About セクションの仕事)
- 装飾用グラデーション
- 「Werkstudent 募集中」のバッジ (Contact セクションに 1 行で置く)

## デザイン注意点

- 最初の 1 画面 (viewport) に収まる高さに設計
- 顔写真 → 名前 → Positioning の視線誘導が自然に流れる配置
- モノトーンなので、ここで色に頼れない。**タイポの weight と size のコントラスト**が勝負
- モバイルでは要素が縦積みになるが、Positioning の 1 行を折り返して読みにくくならないよう注意

## 判断ポイント (実装時に Yamato と確認)

- 顔写真の形 (丸 vs 角丸四角)
- 顔写真の配置 (左寄せ / 中央 / 右寄せ)
- Highlights 行のアンカーリンクを実装するか (最初はしなくても OK、後で追加)
