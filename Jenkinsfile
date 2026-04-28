pipeline {
    agent any

    environment {
        IMAGE_NAME = "mohanraj2000/my-node-appp"
    }

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Mohanrajdq/my-node-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                sh 'docker push $IMAGE_NAME'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f deployment.yml'
                sh 'kubectl apply -f service.yml'
            }
        }
    }
}
