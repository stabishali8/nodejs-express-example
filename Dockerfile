# specify the node base image with your desired version node:<version>
FROM node:10
WORKDIR /nodejs-express-example
COPY package.json /app
RUN npm install
COPY . /app
CMD node server.js
# replace this with your application's default port
EXPOSE 8888