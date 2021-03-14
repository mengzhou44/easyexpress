FROM node:alpine as build-deps
WORKDIR /usr/src/app
COPY  ./package.json  ./
RUN npm install 
COPY . ./

ENV REACT_APP_GOOGLE_ANALYTICS_ID=UA-118022839-1
ENV REACT_APP_SERVER_URL=https://api.easyexpresssoft.com
ENV REACT_APP_ENVIRONMENT=production
ENV REACT_APP_SECRECT_KEY=33126783 

RUN npm run build
 
FROM nginx:1.15-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
