FROM node:14-alpine

WORKDIR /app

ADD package.json package-lock.json ./

RUN npm install

ADD public ./bin
ADD .browserslistrc .eslintrc.js babel.config.js vue.config.js ./

CMD [ "npm", "run", "serve" ]