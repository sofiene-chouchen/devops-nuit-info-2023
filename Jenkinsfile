pipeline{
    agent any
    parameters {
    string description: 'github url ', name: 'Github_url'
}
    environment{
        IMAGE_NAME = "sofienech/devops_poly:v1"
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
              docker stop poly
              docker rm poly
              docker run -d --name poly ${IMAGE_NAME} 
              mkdir /var/lib/jenkins/daTas
              docker cp poly:/app/  /var/lib/jenkins/daTas/
              docker stop poly
              
              '''
          }
        }
      stage("pushto github"){
          steps{
              sh'''
              cd /var/lib/jenkins/daTas/
              git add .
              git commit -m "first commit"
              git push -u origin main
              
              
              '''
          }
          

        }
      
    }
}