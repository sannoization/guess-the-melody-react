This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
[![pipeline](https://github.com/sannoization/guess-the-melody-react/actions/workflows/pages/pages-build-deployment/badge.svg?branch=master)](https://github.com/sannoization/guess-the-melody-react/actions/workflows/pages/pages-build-deployment)


# Requirements
- node v16.13.2
- npm v8.1.2 +

# How to edit

- add audio files and pictures to folder `public/audio` to the structure similar to current.
- You can name your folders inside tours as you want.
- Then fix paths to your files in `src/data/config.json` and `src/data/finalTour.json`
- Run app with `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Run in dev mode
```shell
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build app for production
```shell
npm run build
```
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

Run on server
```shell
serve -s build
```

### Run tests
```shell
npm test
```
