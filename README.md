# deployment-utility-exercise

## Assumptions

* The user should be able to create a public app image and provide the url to it.

## Setting up

### Prerequisites

* You need to have node installed on your local computer.

* clone the repository using the command ```git clone https://github.com/agwadan/deployment-utility-exercise.git``` in your terminal or download the code.

### Setting up the frontend
* To set up the frontend, navigate to the frontend directory using the command ```cd frontend```.
* Type ```npm install``` to install the required dependencies.
* Run the app using the command ```npm run dev``` and it will be available at the following location [http://127.0.0.1:3000](http://127.0.0.1:3000). 
* The interface should look like this.

![frontend](https://user-images.githubusercontent.com/30318555/127167330-9c188a03-14f8-4624-9ab8-1af49b5f8085.png)



### Setting up the backend
* Open another terminal and navigate to the backend from the root directory using the command ```cd backend```.
* Install dependencies using the command ```npm install```.
* Run the backend using the command ```nodemon server```.
* You should see this in your terminal.

![backend](https://user-images.githubusercontent.com/30318555/126915169-10b94665-488a-401c-9c33-5af26a3b8790.png)

### Setting up Minikube
MiniKube is a utility you can use to run Kubernetes (k8s) on a local machine. A Docker container or a Virtual Machine is required to run Minikube on a local machine. In this case, A Docker container is what is used.

* You need to install Docker on your local machine. check [here](https://docs.docker.com/get-started/) to install docker depending on your operating system.
* We will need Minikube and Kubectl to set up a local kubernetes cluster. Follow [this link](https://minikube.sigs.k8s.io/) to install minkube on your local computer depending on your operating system. 
* You can install Kubectl [from here](https://kubernetes.io/docs/tasks/tools/) depending on your operating system.

## Important Commands

Below is a summary of some CLI commands that are helpful when interacting with docker.

* `docker images` --------> List available images.
* `docker ps` ------------> List all running containers.
* `docker run <id/img>` --> Run a container. locally or online.
* `docker run -p 3000:80 <id/img>` ---> run a container. (-p) on port 3000. (3000:80) map local port 3000 to container's port 80.
* `docker stop <conteriner_id>` ------> stop running container.
* `docker push username/image_name` --> push image to dockerhub.