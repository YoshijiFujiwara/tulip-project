# チューリッププロジェクト

## 環境構築

.env.local をコピーして、.env ファイルを作成したあと

```
$ docker-compose up
```

でちょっとまちましょう(初回は 10 分はかかるかな。いろいろダウンロードするため)

vr 空間は
vr/.env.local をコピーして、vr/.env.local ファイルを作成したあと、

```
$ cd vr
$ yarn install
$ yarn dev
```

で動きます

## ローカル開発環境

### URL 一覧

|                      | URL                    | 備考                            |
| -------------------- | ---------------------- | ------------------------------- |
| アプリケーション URL | https://localhost:3000 | 学校の LAN 繋がらないでください |
| vr の URL            | https://localhost:8080 |                                 |

### ダミーアカウント

| key           | value               | 備考                                   |
| ------------- | ------------------- | -------------------------------------- |
| studentNumber | ohs70001 ~ ohs70009 | (seeding1 回につき 9 人分ずつ増えます) |
| password      | B19990101           |                                        |

### 基本コマンド

| 種類 | コマンド               | 実行場所 | 効果                                             |
| ---- | ---------------------- | -------- | ------------------------------------------------ |
|      | `docker-compose up`    | /        | ローカル開発のサーバーを動かす                   |
|      | `docker-compose up -d` | /        | ローカル開発のサーバーをバックグラウンドで動かす |
|      | `docker-compose down`  | /        | ローカル開発のサーバーを止める                   |

### 便利コマンド（Makefile 系）

| 種類 | コマンド              | 実行場所 | 効果                                               |
| ---- | --------------------- | -------- | -------------------------------------------------- |
|      | `make enter-frontend` | /        | フロントエンドのコンテナに入ります                 |
|      | `make enter-backend`  | /        | バックエンドのコンテナに入ります                   |
|      | `make enter-database` | /        | データベースのコンテナに入ります（たぶん使わない） |

### DB 関連のコマンド

| 種類 | コマンド                | 実行場所 | 効果                                  |
| ---- | ----------------------- | -------- | ------------------------------------- |
|      | `make schema-sync`      | /        | データベースの状況をいい感じに初期化  |
|      | `make migration-run`    | /        | マイグレーションを実行 (テーブル作成) |
|      | `make migration-revert` | /        | マイグレーションをロールバック        |
|      | `make seeding-run`      | /        | シーダーを実行 (ダミーデータ作成)     |
|      | `make schema-drop`      | /        | スキーマをドロップ (テーブル全削除)   |
