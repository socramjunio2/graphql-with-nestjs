FROM node:16.10.0-alpine AS builder

WORKDIR /home/app

COPY . ./

RUN yarn

RUN yarn build

FROM node:16.3.0-alpine

WORKDIR /home/app

ENV NODE_ENV production

COPY package.json ./
COPY yarn.lock ./
COPY assets ./assets

RUN yarn && yarn cache clean

COPY --from=builder /home/app/dist ./dist

EXPOSE 3001

CMD [ "yarn", "start:prod" ]