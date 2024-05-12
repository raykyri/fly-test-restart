FROM node:20-buster

WORKDIR /app
COPY package.json package.json
COPY index.js index.js
RUN npm install --omit-dev

CMD ["npm", "run", "start"]
