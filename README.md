# derekpedersen.com
derekpedersen.com

# Prerequistes

## Node
- curl -sL https://deb.nodesource.com/setup | sudo -E bash -
- sudo apt-get install -y nodejs
- node -v
- sudo apt-get install -y npm
- npm -v

## Angular CLI
- sudo npm install -g @angular/cli
- ng help

# Code

## Build
- npm install
- ng build
- ng build --prod

## Run
- ng serve

# Docker

## Build
- docker build ./ -t spa-angular

## Run 
- docker run -d --rm -it -p 4200:4200 --name=derekpedersen-spa-angular-container -t spa-angular

## GCR
- docker tag spa-angular us.gcr.io/derekpedersen-195304/derekpedersen-spa-angular:latest
- gcloud docker -- push us.gcr.io/derekpedersen-195304/derekpedersen-spa-angular:latest

rm -rf package-lock.json node_modules && npm install