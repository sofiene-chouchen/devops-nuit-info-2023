FROM node:18-alpine
WORKDIR /app
COPY package.json /app/
RUN npm install
ENV DATABASE_URL="postgresql://postgres:sofiene@localhost:5432/pagejaune"
COPY . /app/
EXPOSE 5000
CMD [ "npm" , "start" ]