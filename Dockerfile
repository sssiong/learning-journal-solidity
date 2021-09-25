FROM node:16.6.0

WORKDIR /codes
RUN npm install -g truffle \
    @openzeppelin/contracts \
    create-react-app