FROM nginx:alpine

LABEL author="Derek Pedersen"

COPY ./dist/derekpedersen-spa-angular /usr/share/nginx/html

EXPOSE 80 443

CMD [ "nginx", "-g", "daemon off;" ]