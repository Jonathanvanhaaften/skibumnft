FROM node:16-alpine3.11 
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install -g npm@8.1.4
RUN npm install upgrade
RUN npm install update
# RUN npm audit fix
RUN npm install 
RUN npm run build



