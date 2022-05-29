FROM node:13 as builder

WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .

WORKDIR '/app/backend'

RUN npm install

CMD [ "npm","run","start" ]