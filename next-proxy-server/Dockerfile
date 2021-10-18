FROM node:alpine AS builder
WORKDIR /app

COPY ./nest-backend/package.json ./
RUN npm install

COPY ./nest-backend .
RUN npm run build


FROM node:alpine
WORKDIR /app
COPY --from=builder /app ./
CMD ["npm", "run", "start:prod"]

