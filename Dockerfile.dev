FROM node:13

WORKDIR '/app'

COPY package.json .

RUN npm install

# WORKDIR '/app/backend'

# COPY package.json .

# RUN npm install

# WORKDIR '/app/frontend'

# RUN npm install

WORKDIR '/app'

CMD ["npm" , "run" , "dev"]