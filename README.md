# チューリッププロジェクト

## 環境構築

```
$ docker-compose up
```

でちょっとまちましょう(初回は 10 分はかかるかな。いろいろダウンロードするため)

## ローカル開発環境

### URL 一覧

|                      | URL                                                  | 備考                            |
| -------------------- | ---------------------------------------------------- | ------------------------------- |
| アプリケーション URL | https://tulip.local:3000 | 学校の LAN 繋がらないでください |

### ダミーアカウント

studentNumber: ohs70000 ~ ohs7XXXX
password: B19990101

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

### DB関連のコマンド

| 種類 | コマンド              | 実行場所 | 効果                                               |
| ---- | ------------------------- | -------- | --------------------------------------------- |
|      | `make schme-sync`     | /        | データベースの状況をいい感じに初期化              |
|      | `make migration-run`     | /        | マイグレーションを実行 (テーブル作成)               |
|      | `make migration-revert`  | /        | マイグレーションをロールバック                 |
|      | `make seeding-run`       | /        | シーダーを実行 (ダミーデータ作成)  |
|      | `make schema-drop`       | /        | スキーマをドロップ (テーブル全削除)  |
