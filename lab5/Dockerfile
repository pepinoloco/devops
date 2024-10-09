FROM node:20.17.0

WORKDIR /app

COPY package*.json ./                                                                                                                 
                                                                                                                                        
RUN npm install --production 

COPY src/*.js ./src/                                                                                                                              
                                                                                                                                        
EXPOSE 8888                                                                                                                           
                                                                                                                                        
CMD [ "node", "src/server.js" ] 
