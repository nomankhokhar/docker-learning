FROM node:current-alpine3.20

# RUN addgroup app && adduser -S -G app app
# USER app

WORKDIR /app
RUN mkdir data
COPY package*.json .
RUN ["npm", "install"]
COPY . .


ENV API_URL=http://localhost:3001
EXPOSE 3000

CMD npm start