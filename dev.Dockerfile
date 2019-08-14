FROM node:11

WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY angular.json ./
COPY tsconfig.json ./
COPY tslint.json ./

RUN npm i -g @angular/cli
RUN npm i

EXPOSE 4200

CMD [ "npm", "start"]
