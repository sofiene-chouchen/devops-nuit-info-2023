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
              mkdir /var/lib/jenkins/DATASSS
              docker cp poly:/app/  /var/lib/jenkins/DATASSS/
              docker stop poly
              
              '''
          }
        }
      stage("pushto github"){
          steps{
              sh'''
              cd /var/lib/jenkins/DATASSS/app
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