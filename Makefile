dev:
	docker-compose up --build

reviews:
	curl http://localhost:3000/api/reviews

new_nice_review:
	curl -X POST http://0.0.0.0:3000/api/reviews \
		-H 'Content-Type: application/json' \
		-d @nice_review.json

new_bad_review:
	curl -X POST http://0.0.0.0:3000/api/reviews \
		-H 'Content-Type: application/json' \
		-d @bad_review.json
