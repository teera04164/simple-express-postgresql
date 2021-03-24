FROM node:10-slim

# set working directory
WORKDIR /usr/app

COPY package.json ./

RUN npm install

# insert source code into image
COPY . .

CMD ["npm", "start"]