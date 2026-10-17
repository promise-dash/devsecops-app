FROM node:22-alpine

ENV NODE_ENV=production
ENV PORT=8080

WORKDIR /app

COPY --chown=node:node package*.json ./

RUN npm ci --only=production

COPY --chown=node:node . ./

RUN chown=node:node

USER node

EXPOSE 8080

CMD [ "node", "server.js" ]

