# base image
FROM node:16-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json

# It is necessary to add the --legacy-peer-deps flag to keep dependencies properly synced for USWDS and Trussworks
RUN npm install --legacy-peer-deps

# start app
CMD ["npm", "start"]