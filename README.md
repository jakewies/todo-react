# TODO React

This web app is built on top of React using [create-react-app](https://github.com/facebookincubator/create-react-app) and integrates with [Firebase's](https://firebase.google.com/) realtime database via [Re-base](https://github.com/tylermcginnis/re-base).

## Live Demo

A demo of the app is available [here](https://jake-wies.github.io/todo-react/).

**Note**: The live demo does not feature real time data persistence with Firebase. The reason for this being lack of user authentication. Every user who accesses the live demo would be able to read / write to the database. Can't have that! You can see the database feature in action if you choose to clone the repo. See below.

## Getting Started

This project is purely educational. It's my first application built with React. With that being said, anyone doing the same can contribute. You can also clone it and get your hands dirty to see how it works.

#### Clone the repo

```
// ssh
git clone git@github.com:jake-wies/todo-react.git

// https
git clone https://github.com/jake-wies/todo-react.git
```

#### Install dependencies

```
npm install
```

#### Firebase

Before starting the app locally, go to the [Firebase console](https://console.firebase.google.com/) and create a new project. Once that's done you'll be able to add the proper configuration settings in order to sync with Firebase's realtime database.

1. After creating your project, click the red `<>` icon titled **Add Firebase to your web app**
2. Copy the `config` object
3. Open up `/src/firebase-config.js` and replace the default configuration settings
4. Open `/src/index.js`. There are a 2 lines that need to be uncommented in order to get Firebase working.

 ```
 import Base from './rebase';
 ```

 ```
 componentDidMount() {
   // ...
 }
 ```

 The first line imports the `Re-base` class from `/src/rebase.js`. The second syncs the `App` component's state to Firebase when it mounts.

**Note**: The `messagingSenderId` property is not used in this project. Feel free to leave it out.

#### Run the app

Everything is set to run the application. Just run `npm start` in your terminal and profit!
