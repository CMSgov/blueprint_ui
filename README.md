# Blueprint UI

### Current (temporary) initial setup

1. Make sure you have docker installed
2. Clone this repo to your local machine
3. To build the docker container, from root directory run `docker build -t blueprint:dev .`
4. To start the application, from the root directory, run:
`docker run \                                                                                                                                                                                                                                        125
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    blueprint:dev`
5. You will be able to view the app at `localhost:3001`
