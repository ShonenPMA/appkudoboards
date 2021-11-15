FROM node:14.17.3

WORKDIR /app

RUN npm install

COPY ./vuedockerize/ .

CMD ["npm", "run", "serve"]