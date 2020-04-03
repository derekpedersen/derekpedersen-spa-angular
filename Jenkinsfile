pipeline {
    agent {
        label 'build-node-stable'
    }
    stages {
        stage('Checkout') {
            steps{
                dir('/root/workspace/derekpedersen-spa-angular') {
                    checkout scm
                }
            }
        }
        stage('Build') {
            steps{
                dir('/root/workspace/derekpedersen-spa-angular') {
                    sh 'npm install'
                    sh 'npm run build:ci'
                }
            }
        }
        stage('Test') {
            steps{
                dir('/root/workspace/derekpedersen-spa-angular') {
                    sh 'npm run test:ci'
                }
            }
        }
        stage('Docker') {
            steps {
                dir('/root/workspace/derekpedersen-spa-angular') {
                    sh 'npm run docker:build'
                    sh 'npm run docker:tag'
                    sh 'npm run docker:publish'
                }
            }
        }
        stage('Publish') {
            when {
                expression { env.BRANCH_NAME == 'master' }
            }
            steps {
                withCredentials([[$class: 'StringBinding', credentialsId: 'GCLOUD_PROJECT_ID', variable: 'GCLOUD_PROJECT_ID']]) {
                    dir('/root/workspace/derekpedersen-spa-angular') {
                        sh 'make publish'
                    }
                }
            }
        }
    //     stage('Deploy') {
    //         when {
    //             expression { env.BRANCH_NAME == 'master' }
    //         }
    //         steps {
    //             withCredentials([[$class: 'StringBinding', credentialsId: 'GCLOUD_PROJECT_ID', variable: 'GCLOUD_PROJECT_ID']]) {
    //                 dir('/root/workspace/derekpedersen-spa-angular') {
    //                     sh 'make deploy'
    //                 }
    //             }
    //         }
    //     }
    // }
    // post {
    //     always {
    //         withCredentials([[$class: 'StringBinding', credentialsId: 'DEREKPEDERSEN_SPA_COVERALLS_TOKEN', variable: 'COVERALLS_REPO_TOKEN']]) {
    //             dir('/root/workspace/derekpedersen-spa-angular') {
    //                 step([$class: 'CoberturaPublisher', autoUpdateHealth: false, autoUpdateStability: false, coberturaReportFile: '**/cobertura-coverage.xml', failUnhealthy: false, failUnstable: false, maxNumberOfBuilds: 0, onlyStable: false, sourceEncoding: 'ASCII', zoomCoverageChart: false]) 
    //                 sh 'npm run coveralls'
    //             }
    //         }
    //     }
    }
}