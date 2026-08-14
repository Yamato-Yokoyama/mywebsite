# 08 — Contact

## Purpose

「連絡取りたい」と思ったリクルーターへの導線。摩擦を最小に。
若者サポート用の別導線もここに置く (Community & Outreach との重複 OK)。

## Layout

```
[セクション見出し]

[Werkstudent 一言]

[主要リンクをアイコンで]

[若者サポート 1 行]
```

## Content 詳細

### Werkstudent 一言 (最上部に目立たせる)

英語:
```
Open to Werkstudent opportunities in Germany from September 2026.
```

### 主要リンク

- **Email**: `yamato.yokoyama25@gmail.com` (`mailto:` リンク)
- **LinkedIn**: `https://www.linkedin.com/in/yamato-yokoyama/`
- **GitHub**: `https://github.com/Yamato-Yokoyama`

**入れないもの**:
- 電話番号 (Web に晒すのはリスク)
- 住所 (プライバシー)

### 若者サポート案内 (軽く)

英語:
```
Happy to chat with students curious about Computational Linguistics, CS, or studying in Germany — feel free to reach out via LinkedIn or email.
```

日本語 (併記可):
```
計算言語学 / CS / ドイツ留学に興味のある学生の方、気軽に LinkedIn か Email でご連絡ください。
```

## デザイン注意点

- Werkstudent 一言は太字 or 少し大きめで最初に読ませる
- リンクはアイコン + テキストで (Bootstrap Icons や Feather Icons 推奨、モノトーン)
- 若者サポート案内は控えめに (「窓口です!」の重さを避ける)
- 全体を中央寄せ or カード状にまとめると綺麗

## Footer との関係

Contact セクションはページ最下部に近い場所。その下に footer を配置:

```
[Footer]
© 2026 Yamato Yokoyama · V1 archive · Built with Bootstrap
```

Footer 要素:
- コピーライト
- V1 archive リンク (`yamato-yokoyama.github.io/mywebsite/v1/`)
- 使用技術のクレジット (任意)

## 将来的な拡張

- **Calendly リンク**: 若者サポートが軌道に乗ったら予約フォームを追加
- **Contact form**: メール送信フォーム (静的サイトなら Netlify Forms や Formspree 経由)
- **匿名質問箱**: マシュマロ埋め込み or 自作 (LLM で自動応答も検討可)

## 判断ポイント (実装時)

- リンクアイコンのライブラリ (Bootstrap Icons vs Feather vs Lucide)
- Werkstudent 一言のデザイン (バッジ vs テキストのみ)
- 若者サポート案内を Contact 内に置くか、独立セクションにするか (今回は Contact 内で決定)

## 実装後の追加チェック

- `mailto:` リンクが正しく動作
- LinkedIn / GitHub のリンクが新規タブで開く (`target="_blank" rel="noopener noreferrer"`)
- モバイルでタップしやすいサイズ (44×44px 以上)
