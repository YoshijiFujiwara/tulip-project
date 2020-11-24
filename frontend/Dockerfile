FROM node:12.13-alpine

RUN apk add git python make g++

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install

COPY . .

ENV HOST 0.0.0.0

RUN npm run build
