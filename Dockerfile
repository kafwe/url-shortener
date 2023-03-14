FROM node:16

WORKDIR /url-shortener

COPY package.json ./
RUN npm install
COPY . .

CMD [ "npm", "start" ]