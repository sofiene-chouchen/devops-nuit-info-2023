pipeline{
    agent any
    environment{
        DOCKERHUB_CREDENTIALS = credentials('dh_cred')
        IMAGE_NAME = "sofienech/express-project:v3"
    }
    stages{
        stage("pull-docker-image"){
            steps{
              sh '''
                docker image pull ${IMAGE_NAME}
              '''
            }
        }
        stage("testtheimage"){
          steps{
              sh'''
              docker run ${IMAGE_NAME} -v /var/jenkins_home/data:/app
              
              '''
          }
          

        }
      
    }
}