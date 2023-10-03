FROM node:19-alpine

WORKDIR /server


USER node

RUN npm install

CMD npm dev