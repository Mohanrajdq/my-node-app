pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                echo 'Code already cloned by Jenkins'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t my-node-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker rm -f my-node-container || true'
                sh 'docker run -d -p 3000:3000 --name my-node-container my-node-app'
            }
        }
    }
}
