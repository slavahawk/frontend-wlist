FROM node:lts

WORKDIR /app

COPY ../.. .

RUN npm i

RUN npm run build

CMD node .output/server/index.mjs
