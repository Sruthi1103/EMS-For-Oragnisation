# Event Management System

This is an personal project to experiment my understanding in docker , Travis CI/CD and AWS Elastic BeanStalk .

***Prerequisites to run code :***

1. mongodb connection string
2. active account in travis CI
3. active account in AWS
4. Create the AWS_ACCESS_KEY and AWS_ACCESS_SECRET using IAM

***Steps to run the code :***
1. Pull the code to your github repository
2. Select the repository in Travis CI with your active account( https://travis-ci.org/)
3. Setup the application and environment in AWS Elastic BeanStalk
4. Set the below environment details by going to setting in TravisCI as well as in elastic bealstalk by going to configuration -> software -> edit
  - DATABASE=$DATABASE_CONNECTION_STRING
  - PORT=$PORT
  - SECRET=$ENCRYPTION_SECRET (some String value)
  - CSV_UPLOAD_PATH=$CSV_UPLOAD_PATH (/data/csv/)

5. Once it is done , commit the code and automatically Travis CI will listem to the commits and run the pipeline to deploy it in elastc beanstalk.


***Continuous Integration / Continuous Deployment workflow :***

![Travis](https://user-images.githubusercontent.com/54848201/172120145-f28e3186-9a82-422f-aa3f-4ca84666fdc5.JPG)


***The working archietecture of the application after hosted in AWS Elastic BeanStalk***

![Capture](https://user-images.githubusercontent.com/54848201/172118148-ab602ffc-9a12-43df-9f69-8d1848f293e5.JPG)

Thank You , 
Happy Coding !!!


