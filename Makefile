# ============== コンテナに入る基本コマンド ================ 
# frontendのコンテナに入る
enter-frontend-container:
	docker container exec -it frontend sh

# backendのコンテナに入る
enter-backend-container:
	docker container exec -it backend sh

# databaseのコンテナに入る（これはあんまり使うことないと思う）
enter-database-container:
	docker container exec -it database sh
