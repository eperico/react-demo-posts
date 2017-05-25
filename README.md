# React Demo Posts

React project starter provides an architecture to share application logic between a React Web app and a React Native app.
Component rendering stays unique to each platform (web/native).


## Technologies Used

  - [React](https://facebook.github.io/react/)
  - [React Native](https://facebook.github.io/react-native/)
  - [Redux](http://redux.js.org/)
  - [Webpack](https://webpack.github.io/)
  - [Babel](https://babeljs.io/)


## Directory Structure

`android` houses the Android project files, `ios` houses the iOS project files,
and `web` houses the `webpack` configs and `index.html` (it is also the
destination of our minified bundle).

The `app` itself is primarily based on my [React/Webpack/Redux Boilerplate][bp],
for more info on that head over there.


## Entry Points

The entry point for the iOS app is `index.ios.js`, for android is
`index.android.js`, and for the web app is `app/web/index.js`.

## Configured Scripts

### Running in dev/production

There are 7 defined scripts in [package.json][pg]:

  1. `start`
  2. `ios-bundle`
  3. `ios-dev-bundle`
  4. `android-bundle`
  5. `android-dev-bundle`
  6. `web-bundle`
  7. `web-dev`

You can run those scripts doing:
`npm run <script_name>`

### start

`start` is used when running/bundling the native application. When you open
either the xcode project or the android studio project and hit "run", it
kicks off a node server via the `start` command. Every time you make a
JavaScript change, instead of needing to rebuild and recompile your application,
you simply refresh the app and the changes are magically there. As this is not
a React Native guide I will not be going into more detail than that - further
information can be found on Facebook's [React Native Getting Started][gs] guide.

### bundlin

For `ios-bundle`, `ios-dev-bundle`, `android-bundle`, and `android-dev-bundle`,
the script builds the JavaScript bundle (either minified or not-minified
depending on the presence of `dev` or not), and places it where the
corresponding project expects it to be for running locally on your device.
Again, you can find more info on running on your device on Facebook's
[React Native Getting Started][gs].

### web town

`web-dev` kicks off a webpack server on port 3001, it utilizes hot reloading
with some redux-time-machine-magic to have a crazy awesome dev experience where
you can rewind and revert actions in your application.

`web-bundle` creates a minified JavaScript bundle (that also houses the minified
css) and places it next to the `index.html` in `web/public` that you can serve
with any static file server.

### clean

Every now and then, when React Native is doing it's thing, you'll swear that
you've changed something, but alas it is still causing your app to break! oh
noes! what do we do!

I'm glad you asked! Just run `npm run clean`!

## Further Configuration

Webpack sets the `PLATFORM_ENV` environment variable to be `web`. You can use
this check to conditionally load different files depending on if you're building
your native or web app. For example - you can abstract out the difference
between local storage mechanisms.

[gs]: https://facebook.github.io/react-native/docs/getting-started.html
[bp]: https://github.com/kauffecup/react-redux-webpack-boilerplate
[bg]: http://jkaufman.io/react-web-native-codesharing/


## Run Native App

- Install following modules:

  Watchman is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance.

  `brew update && brew install watchman`

  React Native command line interface.

  `npm install -g react-native-cli`

  Standalone app for debugging React Native apps, includes React Inspector / Redux DevTools.

  `brew cask install react-native-debugger`

- Launch the App

  `npm start`

  From another terminal windows

  `react-native run-ios`

  `react-native run-android`
