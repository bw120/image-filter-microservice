# Udagram Image Filtering Microservice

### Endpoint on Elastic Beanstalk
* Endpoint: http://image-filter-bwright-dev-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=<em>{image url}</em>
** Example: `http://image-filter-bwright-dev-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2017/03/GettyImages-654745934-1024x687.jpg`

### Deployment screenshot
![Alt text](/deployment_screenshots/image-filter-service-deployed.png?raw=true "Image Filtering Microservice Deployed to Elastic Beanstalk")
[screenshot](deployment_screenshots/image-filter-service-deployed.png)
### Setup Node Environment

You'll need to create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
2. run the development server with `npm run dev`
3. The endpoint will be available locally at: `http://localhost:8082/filteredimage?image_url={{image url}}`

### Deploying your system

Follow the process described in the course to `eb init` a new application and `eb create` a new environment to deploy your image-filter service! Don't forget you can use `eb deploy` to push changes.
