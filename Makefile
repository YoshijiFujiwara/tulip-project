# frontend, backendのライブラリを一括インストール
install:
	cd frontend && npm install && cd ../backend && npm install 

# ============== コンテナに入る基本コマンド ================ 
# frontendのコンテナに入る
enter-frontend:
	docker container exec -it frontend sh

# backendのコンテナに入る
enter-backend:
	docker container exec -it backend sh

# databaseのコンテナに入る（これはあんまり使うことないと思う）
enter-database:
	docker container exec -it database sh
