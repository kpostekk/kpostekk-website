FROM node:17-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm i

COPY ./src/ /app/src
COPY .env /app/.env
COPY gatsby-config.js /app/gatsby-config.js

RUN npm run build

CMD ["npm", "run", "serve", "--", "--host", "0.0.0.0"]
