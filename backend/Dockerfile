FROM node:26

WORKDIR /app

COPY  ./code/package.json ./
COPY  ./code/package-lock.json ./

RUN npm i

COPY ./code ./

ENTRYPOINT [ "npm", "run","dev" ]

EXPOSE 8080




