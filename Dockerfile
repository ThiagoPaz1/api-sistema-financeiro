FROM node:lts-alpine

RUN apk add --no-cache bash

WORKDIR /www/usr/node/app

COPY . .

EXPOSE 8089

RUN npm i

CMD [ "npm", "run", "start:dev" ]
