.PHONY: build
build:
	docker build ./ -t derekpedersen-spa-angular

publish:
	docker tag derekpedersen-spa-angular us.gcr.io/derekpedersen-195304/derekpedersen-spa-angular:latest
	gcloud docker -- push us.gcr.io/derekpedersen-195304/derekpedersen-spa-angular:latest

deploy:
	kubectl apply -f ./kubernetes/deployment.yaml
	kubectl apply -f ./kubernetes/service.yaml