FROM node:14

WORKDIR /usr/src/app

COPY my_app/package*.json ./

RUN npm install

COPY my_app/ .

EXPOSE 4000

CMD ["node", "index.js"]
