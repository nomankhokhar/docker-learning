// Container vs Virtual Machines

// Containers are lightweight, standalone, executable packages of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings. Containers run on a single machine and share the OS kernel with other containers, therefore they start instantly and use less RAM. Containers are designed to be transient and stateless, with no persistent storage. They are ideal for microservices, CI/CD, and scaling applications.

// Virtual Machines are isolated environments that run on top of a physical machine. Each VM includes a full copy of an operating system, the application, necessary binaries, libraries, and files. VMs are slow to start, consume more resources, and are less portable than containers. VMs are ideal for running multiple applications on a single machine, testing different OS versions, and running legacy applications.


// Docker use client server architecture that means docker client and docker server communicate with each other to perform the operations. Docker client is the command line interface that allows the user to interact with the docker server. Docker server is the daemon that listens for docker API requests and manages docker objects such as images, containers, networks, and volumes.

// First we make DockerFile and then we build the image using docker build command. After that we run the container using docker run command. We can also push the image to docker hub using docker push command.

// Image contain A cut down os , a runtime and a application code. Container is a running instance of an image. Dockerfile is a text file that contains all the commands a user could call on the command line to assemble an image.


// For Building Docker Image


// -t -> add tag to the image
// . -> current directory for Dockerfile
// docker build -t imageName .



// To see the docker images



// docker images or docker image ls



// To run the container


// sudo docker run imageName


// to pull the image from docker hub


// docker pull imageName



// to see the logs of the container which is running and stopped


// sudo docker ps -a



// To see the running containers


// docker ps


// To interact with the ubuntu container


// sudo docker run -it ubuntu


// Linux Distribution

// 1. Alpine Linux
// 2. Ubuntu
// 3. Centos
// 4. Debian
// 5. Fedora
// 6. Arch Linux
// 7. OpenSuse
// 8. Oracle Linux
// 9. Clear Linux
// 10. Kali Linux
// 11. RHEL
// 12. SLES


// if you want to install any package to install then First do apt update and then apt install {packageName}


// Creating a file and folders

// mkdir {name of the folder}
// touch {name of the file.extension}
// ls -1 -> to see the files in the list format
// rmdir {name of the folder} -> to remove the folder

// Install a new packages and update the packages


// apt-get upgrade -> to upgrade the packages
// apt-get update -> to update the packages
// apt-get install {packageName} -> to install the package


// To see the content of the file


// nano {name of the file} -> to edit the file
// cat {name of the file} -> to see the content of the file
// more {name of the file} -> to see the content of the file
// less {name of the file} -> to see the content of the file
// head {name of the file} -> to see the content of the file
// tail {name of the file} -> to see the content of the file


// All the above command use to see the content of the file but the difference is that they show the content in different ways.


// apt-get remove {packageName} -> to remove the package


// To see the content of the file


// cat file.txt > file2.txt -> to copy the content of file.txt to file2.txt
// cat file.txt >> file2.txt -> to append the content of file.txt to file2.txt
// cat file.txt | grep {word} -> to search the word in the file.txt


// Searching the files


// grep {word} file.txt -> to search the word in the file.txt
// grep -i {word} file.txt -> to search the word in the file.txt in case insensitive way
// grep -c {word} file.txt -> to count the number of times the word is present in the file.txt
// grep -n {word} file.txt -> to show the line number of the word in the file.txt
// grep -i hello file* -> to search the word hello in all the files in the current directory
// find / -type f -name "*.py" -> to find the files with .py extension in the root directory
// find / -type f -name "*.py" > res.txt -> to save the output of the above command in the res.txt file


// Chaining the commands


// mkdir test; cd test; touch file.txt -> to create the folder test and then go to the folder test and then create the file file.txt
// if any command fails then the next command will not run in below code
// mkdir test && cd test && touch file.txt -> to create the folder test and then go to the folder test and then create the file file.txt
// mkdir {name of the folder} || echo "Folder already exists" -> to create the folder if it does not exist otherwise print the message "Folder already exists"
// ls /bin | less -> to see the content of the /bin directory using less command
// ls /bin | more -> to see the content of the /bin directory using more command


// Environments Variables


// printenv -> to see the environment variables
// export {variableName}={value} -> to set the environment variable
// echo $variableName -> to see the value of the environment variable
// docker start -i {containerId} -> to start the container in interactive mode
// echo DB_USER >> .bashrc -> to add the environment variable in the .bashrc file put two time >> to append the value
// docker ps -a -> to see the all the containers of the docker
// source .bashrc -> to load the environment variable in the current terminal
// env -> to see the environment variables


// Manage the processes


// ps -> print currently process
// kill {id} -> to kill the any process
// ps -a -> to show current process that currently running


// Users Management's


// useradd {name of the user}
// docker exec -it -u {name of user} {containerID} bash
// userdel {user name} -> to add new user in the linux system
// adduser {name} -> another old way to add new user in the linux system


// File Permission's


// chmod og+w+x-r -> to add permission to the files


// Containers


// Provides and isolated environment for running an application
// Containers are lightweight and portable
// Is just a process!


// Images

// A cut down OS, a runtime and an application code
// All needy application to run the application

// If we run two containers of the same image then they will have the same file system but they will have different processes and network stack.


// Dockerfile

// A Dockerfile contains instructions for building an image

// Dockerfile Instructions

// 1. FROM -> Base image like alpine or ubuntu
// 2. WORKDIR -> Working directory in base image
// 3. COPY -> Copy files from host to container
// 4. ADD -> Copy files from host to container
// 5. RUN -> Run commands in the container
// 6. ENV -> Set environment variables
// 7. EXPOSE -> Expose ports to use the App
// 8. USER -> add user with limited privileges
// 9. CMD -> CMD and entrypoint to run when we start the container
// 10. ENTRYPOINT -> see the above line -_-



// Dockerize React App

// docker run -it react-app sh -> alpine image do not comes with bash so we use sh


// Copying file and directories from host to container
// COPY {source} {destination}
// COPY . . -> to copy all the files from host to container
// COPY package.json . -> to copy the package.json file from host to container
// If there is space in file name then we use double quotes
// COPY ["hello world.py", "."]


// When to use COPY:

//     When you need to copy local files or directories into the Docker image.
//     When you want to avoid downloading remote files or extracting archives.

// When to use ADD:

//     When you need to download files from a remote URL.
//     When you need to extract archives into the Docker image.




// Exclude files and directories


// .dockerignore -> to exclude the files and directories add the name of the file or directory in the .dockerignore file



// Running the Commands

// RUN npm install -> to run the commands in the container



// Setting the Environment Variables


// ENV API_URL=http://localhost:8000 -> to set the environment variable in the container



// Exposing the Ports


// EXPOSE 3000 -> to expose the port 3000 in the container



// Setting the User


// RUN addgroup app && adduser -S -G app app
// USER app


// Defining the Entry Point


// CMD is typically used to start a service or application in the container. To summarize, RUN is used to execute commands during the build process of a Docker image, while CMD is used to specify the default command to run when a Docker container is started from the image.

// CMD ["npm", "start"] -> to run the npm start command when the container starts



// Speeding up the Build


// If there is no change in the package.json file then the docker will use the cache and will not install the packages again below is the example code
// COPY package*.json .
// COPY . .
// RUN ["npm", "install"]



// Remove Images


// docker image prune -> to remove the dangling images
// docker container prune -> to remove the dangling containers
// docker image rm {imageName | imageID} -> to remove the image


// Tagging images


// docker build -t {imageName}:{tag} . -> to tag the image
// docker image remove {imageName}:{tag} -> to remove the tagged image
// docker image tag {imageName}:{tag} {newImageName}:{newTag} -> to tag the image with new name and tag
// docker image tag {imageID} {newImageName}:{newTag} -> to tag the image with new name and tag if there is more than docker images



// Sharing the images



// docker login -> to login to the docker hub
// docker push {imageName}:{tag} -> to push the image to the docker hub
// docker pull {imageName}:{tag} -> to pull the image from the docker hub
// docker logout -> to logout from the docker hub


// Saving and loading the Images


// docker save -o {imageName}.tar {imageName}:{tag} -> to save the image in the tar file
// docker load -i {imageName}.tar -> to load the image from the tar file



// Working with Containers


// docker run -d {imageName} -> to run the container in the detached mode mean background
// docker run -d --name {containerName put what you want} {imageName} -> to run the container in the detached mode with the name



// Viewing the logs of the containers


// docker logs {containerID} -> to see the logs of the container
// docker logs -n 10 {containerID} -> to see the last 10 logs of the container


// Publishing the ports


// docker run -p 3000:3000 {imageName} -> to publish the port 3000 of the container to the port 3000 of the host
// docker run -d -p 3000:3000 {imageName} -> to publish the port 3000 of the container to the port 3000 of the host


// Executing the commands in Running Containers

// sh command is like ls , pwd , cd etc
// docker exec -it {containerID} sh -> to run the sh command in the running container
// docker exec {containerID} ls -> to run the ls command in the running container but not in it mode



// Stopping and Starting Containers


// run is used to start the new container
// start is used to start the stopped container
// stop is used to stop the running container

// docker stop {containerID} -> to stop the container
// docker start {containerID} -> to start the container



// Removing the Containers


// docker rm {containerID} -> to remove the container
// docker container rm {containerID} -> to remove the container
// docker rm -f {containerID} -> to forcefully remove the container if it is running


// Persisting Data using Volumes


// docker volume ls -> to see the volumes
// docker volume create {volumeName} -> to create the volume
// docker volume inspect app-data -> to see the information of the volume
// docker run -d -p 4000:3000 -v app-data:/app/data {imageName} -> to run the container with the volume app-data and map it to the /app/data directory
// docker exec -it {containerID} sh -> to run the sh command in the container



// Copying Files between the Host and Containers


// docker cp {containerID:path of the file} {destination mean current directory} -> to copy the files between the host and container below is the example
// docker cp ea5:/app/data/log.txt . -> to copy the log.txt file from the container to the current directory
// docker cp log.txt ea5:/app/data -> to copy the log.txt file from the host to the container



// Sharing the Source Code with the Container


// docker run -d -p 4000:3000 -v $(pwd):/app {imageName} -> to share the source code with the container when you change the code it will automatically change in the container



// Running Multi-Container Apps


// First install Docker-Compose
// sudo apt  install docker-compose
// docker-compose --version


// Cleaning Up our Workspace


// docker image ls -q -> to see the all images id
// docker container rm $(docker container ls -aq) -> to remove all the containers
// docker container rm -f $(docker container ls -aq) -> to remove all the containers
// sudo docker image rm -f $(sudo docker image ls -q) -> to remove all the images at once



// The Simple Web Application


// Copy the backend and frontend folder in this repository
// docker-compose up



// JSON and yaml formate

// JSON -> JavaScript Object Notation extension of .json

// Example of JSON
// {
//     "name": "John",
//     "age": 30,
//     "cars": {
//         "car1": "Ford",
//         "car2": "BMW",
//         "car3": "Fiat"
//     }

// YAML -> Yet Another Markup Language extension of .yml | .yaml

// Example of YAML
// name: John
// age: 30
// cars:
//   car1: Ford
//   car2: BMW
//   car3: Fiat



// Creating compose file

// version: "3.8"

// services:
//   frontend:
//     depends_on: 
//       - backend
//     build: ./frontend
//     ports:
//       - 3000:3000

//   backend: 
//     depends_on: 
//       - db
//     build: ./backend
//     ports: 
//       - 3001:3001
//     environment: 
//       DB_URL: mongodb://db/vidly
//     command: ./docker-entrypoint.sh

//   db:
//     image: mongo:4.0-xenial
//     ports:
//       - 27017:27017
//     volumes:
//       - vidly:/data/db

// volumes:
//   vidly:


// Above is Docker compose file which is used to run the multi-container application
// image -> to use the image from the docker hub
// ports -> to expose the ports
// volumes -> to create the volume
// depends_on -> to run the container in the order



// Building Images


// docker-compose build -> to build the images
// docker-compose up -> to run the containers
// docker-compose up -d -> to run the containers in the detached mode
// docker-compose down -> to stop the containers
// docker-compose down -v -> to stop the containers and remove the volumes
// docker-compose ps -> to see the status of the containers
// docker-compose logs -> to see the logs of the containers
// docker-compose logs -f -> to see the logs of the containers in the real time
// docker-compose exec {serviceName} sh -> to run the sh command in the container
// docker-compose build --no-cache -> to build the images without cache
// docker-compose up --build -> to build the images and run the containers



// Staring and Stopping the application


// docker-compose up -> to start the application
// docker-compose down -> to stop the application
// docker-compose up -d -> to start the application in the detached mode
// docker-compose down -v -> to stop the application and remove the volumes
// docker compose ps -> to see the status of the containers that is running



// Docker Networking


// docker network ls -> to see the networks
// docker exec -it -u root {containerID} sh -> to run the sh command in the container as a root user
// # sign mean we have root access 
// I attached the some files to this Repo for the Docker networking



// Viewing the logs



// docker compose logs -> to see the logs of the containers
// docker compose logs -f -> to see the logs of the containers in the real time
// docker compose logs {serviceName} -> to see the logs of the specific service
// docker compose logs -f {serviceName} -> to see the logs of the specific service in the real time



// Publishing the Changes


// add volume in the docker-compose file to share the source code with the container

// For the frontend add the below line in the docker-compose file
// volumes:
//      - ./frontend:/app


// For the backend add the below line in the docker-compose file
// volumes:
//      - ./backend:/app



// Migrating the Database


// Migrating the database refers to the process of transferring data, schema, and sometimes functionality from one version of a database to another. This process is essential when upgrading to a new version of a database management system (DBMS), moving data to a different platform, or restructuring the database schema to accommodate changes in application requirements.

// wait-for is script that waits for the specified host and port to be available before executing a command. It is useful for coordinating the startup of multiple containers that depend on each other.

// command: ./wait-for db:27017 migrate-mongo up && npm start -> to run the migrate-mongo up command before starting the application

// To achieve the same we can use the below command

// command: ./docker-entrypoint.sh -> to run the docker-entrypoint.sh script before starting the application

// Copy the below code and paste it in the docker-entrypoint.sh file

// #!/bin/sh

// echo "Waiting for MongoDB to start..."
// ./wait-for db:27017 

// echo "Migrating the databse..."
// npm run db:up 

// echo "Starting the server..."
// npm start 




// Running the Tests


// web-tests:
//    image: {imageName}
//    volumes:
//       - ./frontend:/app
//    command: npm test -> to run the tests in the container