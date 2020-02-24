FROM nginx:alpine

LABEL author="Derek Pedersen"

COPY ./dist/derekpedersen-spa-angular /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 443

CMD [ "nginx", "-g", "daemon off;" ]