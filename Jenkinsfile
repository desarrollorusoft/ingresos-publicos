pipeline {
	agent any
	stages {
		stage('npm install') {
			steps {
				bat 'npm install'
			}
		}
		stage('angular build') {
			steps {
				bat 'ng build --prod --verbose'
			}
		}
		stage('copy /dist') {
			steps {
				sshPublisher(publishers: [sshPublisherDesc(configName: 'mvl51 (Produccion - MVL)', transfers: [sshTransfer(excludes: '', execCommand: '''cd /usr/local/
				mv prueba-pipeline prueba-pipeline_old
				cp /var/www/WARs/ingresos-publicos /usr/local/prueba-pipeline''', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '/var/www/WARs/ingresos-publicos/', remoteDirectorySDF: false, removePrefix: '', sourceFiles: '/dist')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true)])
			}
		}
		stage('clean workspace') {
			steps {
				cleanWs()
			}
		}
	}
}