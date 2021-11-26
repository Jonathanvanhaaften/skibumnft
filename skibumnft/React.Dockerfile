FROM node:16-alpine3.11 
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . ./
COPY package.json ./
COPY package-lock.json ./
RUN npm install -g npm@latest
RUN npm install update
RUN npm install upgrade
# RUN npm audit fix
RUN npm install
# RUN npm install -g serve
# RUN npm install -g pm2
RUN npm run build




