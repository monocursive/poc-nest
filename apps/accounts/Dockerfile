FROM node:12.13-alpine

WORKDIR /app
ADD package.json /app/package.json
RUN npm install

ADD . /app

RUN npm run build accounts

EXPOSE 3000

CMD ["node", "./dist/apps/accounts/apps/accounts/src/main.js"]
