FROM node:12.13-alpine

WORKDIR /app
ADD . /app

RUN cd /app/apps/accounts && npm install && npm run build 

EXPOSE 3000

CMD ["node", "./apps/accounts/dist/src/main.js"]
