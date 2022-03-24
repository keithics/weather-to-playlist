# STAGE 1 dev
#ARG GITHUB_TOKEN
FROM node:16.11.1-alpine3.11 AS base
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
#ENV GITHUB_TOKEN $GITHUB_TOKEN

FROM base as build
# uncomment if you are using a private module hosted in github
#ARG GITHUB_TOKEN
#RUN echo //npm.pkg.github.com/:_authToken=$GITHUB_TOKEN >> .npmrc
#RUN echo @keithics:registry=https://npm.pkg.github.com/ >> .npmrc

RUN npm ci
COPY . .
RUN  npm run build

FROM base as release
# uncomment if you are using a private module hosted in github
# ARG GITHUB_TOKEN
# RUN echo //npm.pkg.github.com/:_authToken=$GITHUB_TOKEN >> .npmrc
# RUN echo @keithics:registry=https://npm.pkg.github.com/ >> .npmrc
RUN npm install --production --loglevel verbose
COPY --from=build /usr/src/app/dist /usr/src/app/dist

#last build to remove docker history commits, for security purposes
FROM node:16.11.1-alpine3.11
WORKDIR /usr/src/app
COPY --from=release /usr/src/app/ /usr/src/app/
ENV NODE_PATH=/usr/src/app/dist
EXPOSE  8080
CMD npm run start
