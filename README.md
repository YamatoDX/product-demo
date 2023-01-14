This project is a demo on how to deploy docker image to cloud run with github actions

- Create a service account under IAM, create a key in json
- Give the following roles, `Editor, Cloud Run Admin, Storage Admin, Service Account User`
- We need to convert json to base64, use the following command for that
- `base64 -i something.json` in gitbash
- Enabled container-registry and cloud run API
- put the project id and secret in actions secrets
- deploy
- Remember to allocate CPU always when instance is created in cloud run, otherwise it will take some time for the server to start
- Every time we push a revision of the cloud run will be created and traffic will be directed to this

- "GCP Container Registry is to hold the Docker Image"
- "GCP Cloud Run to deploy a container made from the image help in container registry"
