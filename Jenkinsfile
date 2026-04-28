pipeline {
    agent any

    environment {
        APP_NAME = "my-node-app"
        CONTAINER_NAME = "my-node-container"
        PORT = "3000"
    }

    stages {

        stage('Clone') {
            steps {
                echo 'Code pulled from GitHub'
            }
        }

        stage('Build') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t $APP_NAME .'
            }
        }

        stage('Stop Old Container') {
            steps {
                echo 'Stopping old container...'
                sh 'docker rm -f $CONTAINER_NAME || true'
            }
        }

        stage('Run Container') {
            steps {
                echo 'Starting new container...'
                sh 'docker run -d -p $PORT:$PORT --name $CONTAINER_NAME $APP_NAME'
            }
        }

        stage('Verify') {
            steps {
                echo 'Checking running containers...'
                sh 'docker ps'
            }
        }
    }
}
