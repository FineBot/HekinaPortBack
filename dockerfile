FROM node:13-alpine

EXPOSE 1486

RUN mkdir /app

WORKDIR /app

COPY . /app

RUN npm install

CMD npx json-server --watch db.json -p 1486
