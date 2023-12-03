FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm i -g prisma

RUN npm install

COPY . .

EXPOSE 3000
EXPOSE 5555

CMD ["npm", "run", "dev"]
