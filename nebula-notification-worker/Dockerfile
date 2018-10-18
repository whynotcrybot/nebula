FROM node:alpine
RUN apk add --update python build-base

RUN mkdir -p /app
WORKDIR /app

ADD package.json yarn.lock /app/
RUN yarn --pure-lockfile

CMD ["yarn", "dev"]

