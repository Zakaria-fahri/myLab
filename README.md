###  TechnicalTask

 ### Overview

This is a simple application deployed in an AWS EKS cluster. The deployment process involves a CI/CD pipeline that uses AWS CodeBuild to build the Docker image and push it to AWS ECR.

### Deployment Architecture

The application is hosted on an AWS EKS cluster. The CI/CD pipeline automates the following steps:

1. **Build Phase:**
   - The Docker image is built using AWS CodeBuild.

2. **Image Repository:**
   - The built Docker image is pushed to AWS ECR (Elastic Container Registry).

3. **Deployment:**
   - The latest Docker image is deployed to the AWS EKS cluster.

### CI/CD Pipeline

The CI/CD pipeline is configured to trigger on code changes and follows these steps:

- Code changes push to the repository trigger the pipeline.
- AWS CodeBuild builds the Docker image.
- The image is pushed to AWS ECR.
- The EKS cluster is updated with the latest image.
