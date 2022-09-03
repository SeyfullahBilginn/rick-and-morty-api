# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![dashboard-preview](https://user-images.githubusercontent.com/86732121/188273063-c5c771af-c7e8-469e-a296-a078fedcea1f.gif)


## Development Process

### `Structure`
  I tried to use functional components. I created file named "service" for fetching datas from rick and morty api. I want to collect states widely used (not only for only this project, but also for a large scale project) in contexts which are pagination context and layout context. I wanted to design an algorithm for different versions of pagination (left-aligned, middle aligned, right aligned) as seen below:
  
(rick and morty api doesn't have more than 7 pages. If it had more than 7 pages, it would look like this)
![pagination-preview](https://user-images.githubusercontent.com/86732121/188273094-e6cd2585-890d-4435-a2d9-ccc46c4f9154.gif)

I decided to display page variable in url.For that reason, I used [url object](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL) . Thus, users can send the link to share the page they monitor.

## 🛠️ Installation Steps

1. Clone the repository

```bash
git clone https://github.com/rahuldkjain/github-profile-readme-generator.git
```

2. Change the working directory

```bash
cd github-profile-readme-generator
```

3. Install dependencies

```bash
npm install
```

4. Run the app

```bash
npm start
```

## Available Scripts


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
