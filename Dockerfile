FROM node:argon

# Install bower
RUN npm install -g bower && \
    echo '{ "allow_root": true }' > /root/.bowerrc

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install packages
COPY package.json /usr/src/app
RUN npm install

# Install bower stuff
COPY bower.json .bowerrc* /usr/src/app/
RUN bower install

# Copy app code
COPY . /usr/src/app

EXPOSE 3000
ENV NODE_ENV docker
