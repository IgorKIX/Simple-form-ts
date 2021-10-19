# Simple-form-ts

This is a simple app which allows you to create a new user by the form or to choose the already created user from the list. After login/Sign in process you wil be able to creat the event, which once created, will be available on the list on the right side of the screen.

This is a "translation" of the [simple-form-react-node](https://github.com/IgorKIX/simple-form-react-node) to typescript.

### Status

For now, I'm moving features to ts. My goal is to move the React part - Node will probably stay in clean JS.

## Instructions
The app is using a Docker containers, so to make it works you need to install a docker on your computer.

After getting the docker on your computer you can enter to the main dir which contains docker-compose.yml file. There you have to run the `docker-compose up`. The installation process can take a moment.

> I've added the script to package.json file in react-ts directory, to speed up the development. So if you wish you can skip the `docker-compose up` command. Just go straight to react-ts dir and run `npm run reload`. Just check if `&&` in the script is acceptable on your system

After that you can go to your browser and check the http://localhost:3000/, where you should find that the app is running.
## Stack
* [axios](https://axios-http.com/)
* [formik](https://formik.org/)
* [yup](https://github.com/jquense/yup)
* [Started by `create-react-app`](https://create-react-app.dev/)
