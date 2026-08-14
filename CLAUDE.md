# mywebsite-v2 — Project Constitution

このファイルは Claude Code が毎回参照する全体方針です。個別セクションの実装指示は `docs/` を参照してください。

---

## Who this site is for

**Primary**: 欧州(特にドイツ)の技術系リクルーター (SAP Werkstudent 応募が近接ターゲット)
**Secondary**: LinkedIn 経由で「この人誰?」と流入してくる人 (日本人・エンジニア界隈が中心)
**Tertiary**: 計算言語学 / CS / ドイツ留学に興味のある高校生・大学生

30 秒で「何者か」を伝え、閉じた後に「言語学の理論を retrieval と inference の設計に持ち込む学生」として記憶される、が目標。

---

## Positioning (芯)

**日本語**:
> 言語学の理論を retrieval と inference の設計に持ち込む CL 学生。多言語での情報検索に関心。

**English (公式版)**:
> Computational Linguistics student bringing linguistic theory into retrieval and inference.

**Focus 行 (キャリア方向 + キーワード)**:
> Building toward an Applied AI Engineer role · NLP · IR · Multilingual RAG

この Positioning はサイト全体の判断基準。「この要素は Positioning を強化する?散らかす?」で全ての細部を決める。

---

## Tone & Design Direction

**方向: モノトーン + タイポグラフィで魅せる (option C)**

- 背景: 白ベース
- 色: ほぼ黒・白・グレーのみ。アクセントカラーは最小限 (ナビのアクティブ状態など機能的な場所のみ)
- フォント: サンセリフ主体、見出しで weight / size のコントラストを効かせる
- 装飾: 極力ゼロ。余白と Typography で階層を作る
- 唯一の色情報: 写真 (顔写真、プロジェクトスクショ、SAP 訪問写真等)

**理由**: 「言語 (タイポ) を扱う人」というメタメッセージを視覚で伝えるため。他の学生ポートフォリオが色を多用する中で逆張りとして目立つため。

**避けるべき**:
- 派手なグラデーション
- 動画ループ (V1 の再現はしない、V1 は `reference/v1/` に別途保存)
- カラフルなカードデザイン
- 過度な絵文字

---

## Technical Stack

- **Framework**: Bootstrap 5 (グリッド・レスポンシブ・スティッキーナビ活用)
- **Custom CSS**: 色とタイポは Bootstrap デフォルトを上書き
- **JavaScript**: Bootstrap の bundle で十分。独自 JS は最小限
- **Hosting**: GitHub Pages
- **主言語**: English (日本語ちょい足し可)

**避けるべき**:
- 重い JS フレームワーク (React, Vue 等)
- ビルドツール (Webpack 等) — 静的 HTML/CSS/JS で完結させる

---

## UX Requirements

- **スティッキーナビ**: スクロールしても上に残る。セクション名を並べる
- **アクティブ状態**: 今読んでるセクションだけナビでハイライト (色を使う場所)
- **スムーススクロール**: ナビクリックで滑らかに移動
- **ホバー効果**: リンクにマウス乗せると微妙に反応
- **モバイル対応**: ハンバーガーメニュー、タッチしやすいサイズ

---

## Content Language Rule

- サイト本文は基本英語
- 日本語は補足的に (About の一部、若者サポートの案内など)
- 専門用語 (retrieval, inference, RAG, NLP) は英語のまま

---

## Site Structure (8 sections, top to bottom)

1. Hero → `docs/01-hero.md`
2. About → `docs/02-about.md`
3. Projects → `docs/03-projects.md`
4. Experience → `docs/04-experience.md`
5. Community & Outreach → `docs/05-community.md`
6. Writing → `docs/06-writing.md`
7. Resume → `docs/07-resume.md`
8. Contact → `docs/08-contact.md`

全体サマリは `docs/00-overview.md` を参照。

---

## Directory Structure

```
mywebsite-v2/
├── CLAUDE.md                # このファイル (憲法)
├── docs/                    # セクション別仕様書 (実装指示)
├── assets/
│   ├── linkedin-posts/      # LinkedIn 投稿 CSV / スクショ
│   ├── images/              # 顔写真, プロジェクトサムネ, SAP 訪問写真等
│   └── word-cloud/          # Word Cloud データと生成画像
├── reference/
│   ├── v1/                  # 前バージョンサイトのコード (丸ごと保存)
│   └── inspiration.md       # 長沼さんサイト等の参考メモ
└── src/                     # 実装フェーズで書く場所 (HTML/CSS/JS/画像)
```

---

## V1 Preservation

前バージョンのサイトは `reference/v1/` に丸ごと保存する (Yamato の判断)。
デプロイ時は `src/v1/` にコピーして `yamato-yokoyama.github.io/mywebsite/v1/` でアクセス可能にする。
V2 の footer に小さく "V1 archive" リンクを置く。

---

## Working Style

- **1 日 1 セクションずつ実装** (RAG Explorer プロジェクトと並行のため負荷分散)
- Claude Code への指示は `docs/0X-*.md` を参照させる形で出す
- 素材 (画像・CSV) は Yamato が事前に `assets/` 内に配置しておく
- 実装後に Yamato がブラウザで確認 → フィードバック → 修正、のループ

---

## Success Criteria

このサイトは以下を達成できていれば成功:

1. リクルーターが 30 秒で「retrieval と inference に強い CL 学生」と認識できる
2. 「Ex LinkedIn Ambassador」「DeepL 初開催」「Uni Tübingen」の 3 つの実績が Hero でスキャン可能
3. LinkedIn からの流入者が「日本人 × ドイツ在住 × NLP/RAG エンジニア志望」と 1 分で理解できる
4. Projects セクションで「動くものを作れる人」の証拠が確認できる
5. Writing セクションで「継続的に言語化・発信できる人」が証明されている
