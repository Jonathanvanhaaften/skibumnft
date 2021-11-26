FROM node:16-alpine3.11 
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app

RUN npm install -g



CMD ["npm run build"] 
