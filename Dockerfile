FROM node:17-alpine

RUN adduser -D -s /bin/bash gatsby

USER gatsby

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn --prod

COPY ./src/ /app/src
COPY .env /app/.env
COPY gatsby-config.js /app/gatsby-config.js

RUN yarn build

ENTRYPOINT yarn serve -H 0.0.0.0
