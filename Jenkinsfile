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
              mkdir /cours/5em/Devops/nuit_info
              docker cp poly:/app/  /cours/5em/Devops/nuit_info
              docker stop poly
              
              '''
          }
        }
      stage("pushto github"){
          steps{
              sh'''
              cd /cours/5em/Devops/nuit_info/app
              git init
              git branch -M main
              git remote add origin git@github.com:sofiene-chouchen/devops-nuit-info-2023.git
              git pull origin main
              git add .
              git commit -m "first commit"
              git push -u origin main
              
              
              '''
          }
          

        }
      
    }
}