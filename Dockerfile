FROM robzhu/nodejs

EXPOSE 80

RUN mkdir /usr/motd
ADD . /usr/motd
WORKDIR /usr/motd

RUN npm install

ENTRYPOINT [ "node", "main.js" ]