FROM node:16

WORKDIR '/data/csv/'

COPY upload.csv .

WORKDIR '/app'

COPY ./package.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm","run","start" ]