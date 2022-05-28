FROM node:13 as builder

WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .

WORKDIR '/app/frontend'

RUN npm install

RUN npm run build

# WORKDIR '/app'

# CMD ["npm" , "run" , "dev"]

FROM nginx

EXPOSE 80

COPY --from=builder /app/frontend/build /usr/share/nginx/html
