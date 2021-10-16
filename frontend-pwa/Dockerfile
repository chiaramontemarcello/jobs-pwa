FROM node:alpine3.13 AS builder

RUN npm install -g ionic

WORKDIR /usr/src/app

COPY ./source/package.json .

RUN npm install

COPY ./source .

RUN ionic build --prod

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /usr/src/app/www /usr/share/nginx/html

EXPOSE 80
