import java.text.SimpleDateFormat 
def startDate 
def endDate 
def projectId= "139" 
def projectName= "WSS" 
def moduleId= "55" 
def moduleName= "TERA" 
def newBuildId= "3.0.0.${BUILD_ID}" 
def sonarUrl= "http://52.188.21.117:9000/" 
def tomcatCredIdForJenkins= "tomcat21" 
def tomcatServer= "http://52.188.21.117:8012"


def CODE =  readJSON text: '{"url":"http://52.188.21.117:8888/root/wss.git","scm":"gitlab","branch":"master","credId":"gitlab"}'
def UNITTEST =  readJSON text: '{"command":"mvn clean test"}'
def BUILD =  readJSON text: '{"command":"mvn package"}'
def ANALYSIS =  readJSON text: '{"sonarkey":"wss"}'
def DEPLOYMENT =  readJSON text: '{"contextPath":"wss"}' 

pipeline {
agent any
options {
skipDefaultCheckout()
 }
	stages {

		stage('CODE'){
		        steps{
		        script{
					buildName newBuildId
				}
				 	
					 
		            git url: CODE.url, credentialsId: CODE.credId, branch: CODE.branch 
		        }

		}
		stage('UNIT-TEST'){
			
		      steps{
		            println "Test code ..."
		           	//executeCmd(UNITTEST.command);
		         }
		}
		stage('Build'){
		       steps{
		       		script{
		       		startDate = new Date()
		       		}
		       		println "Building code ...."
		            executeCmd(BUILD.command);
		       }
			   
		}

		stage('SonarQube analysis') {
				steps {
					println "Static code Analysis..."
					withSonarQubeEnv('sonarserver') {
					executeCmd("mvn sonar:sonar -Dsonar.host.url="+ sonarUrl +" -Dsonar.projectKey="+ANALYSIS.sonarkey);
						  
					}
					
				}
				
		   }
	
		stage('Deployment'){
			             steps{            
		                    deploy adapters: [tomcat8(credentialsId: tomcatCredIdForJenkins,
		                            path: '', url: tomcatServer)],
		                            contextPath: DEPLOYMENT.contextPath,
		                            onFailure: true,
		                            war: 'target/*.war'
		            }
		           
			
		}

	}
}

//Helper Methods 

void executeCmd(String CMD){
	if(isUnix()){
		sh "echo linux"
		sh CMD
	}
	else{
		 bat "echo windows"
		 bat CMD
	}
}
