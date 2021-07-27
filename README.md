# deployment-utility-exercise

## Assumptions

* The user should be able to create a public app image and provide the url to it.

## Setting up

### Prerequisites

* You need to have git installed on your local computer.
* You need to have node installed on your local computer.

* clone the repository using the command ```git clone https://github.com/agwadan/deployment-utility-exercise.git``` in your terminal.

### Setting up the frontend
* To set up the frontend, navigate to the frontend directory using the command ```cd frontend```.
* Type ```npm install``` to install the required dependencies.
* Run the app using the command ```npm run dev``` and it will be available at the following location [http://127.0.0.1:3000](http://127.0.0.1:3000). 
* The interface should look like this.
* 
* ![styling](https://user-images.githubusercontent.com/30318555/126914899-4eebdf29-e15e-4db9-b6f4-29f4a709cbb0.png)


### Setting up the backend
* Open another terminal and navigate to the backend from the root directory using the command ```cd backend```.
* Install dependencies using the command ```npm install```.
* Run the backend using the command ```nodemon server```.
* You should see this in your terminal.

![backend](https://user-images.githubusercontent.com/30318555/126915169-10b94665-488a-401c-9c33-5af26a3b8790.png)

### Setting up Minikube
* You need to install Docker on your local machine as well. check here [here](https://docs.docker.com/get-started/) to install docker depending on your operating system.
* We will need Minikube and Kubectl to set up a local kubernetes cluster. Follow [this link](https://minikube.sigs.k8s.io/) to install minkube on your local computer depending on your operating system. 
* You can install Kubectl [from here](https://kubernetes.io/docs/tasks/tools/) depending on your operating system.

