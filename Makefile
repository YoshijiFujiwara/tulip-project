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

migration-run:
	docker container exec -it backend sh -c "npm run typeorm:local:migration:run"
migration-revert:
	docker container exec -it backend sh -c "npm run typeorm:local:migration:revert"
seeding-run:
	docker container exec -it backend sh -c "npm run typeorm:local:seed:run"
schema-drop:
	docker container exec -it backend sh -c "npm run typeorm:schema:drop"
schema-sync:
	docker container exec -it backend sh -c "npm run typeorm:schema:drop && npm run typeorm:local:migration:run && npm run typeorm:local:seed:run"