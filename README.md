[![Build Status](https://travis-ci.org/RIP21/CRA-components-development.svg?branch=master)](https://travis-ci.org/RIP21/CRA-components-development)
# create-react-app for components development
Is a minimal yet another  boilerplate based on top of the famous 
create-react-app, made especially for creating components libraries with 
rich online docs powered by Styleguidist and all power of CRA.
 
 ### Includes: 
 - stylelint of `styled-components` 
 - prettier 
 - eslint
 - create-react-app 
 - babel with CRA preset for components libs transpiling
 - Scripts for publishing components with ES6 imports support
 - Publishing script for handy 
 ```javascript 
 import Button from "components-lib/Button";
 ``` 
 imports. Which means no import of unnecessary components! 
 And also tree shaking!
 - Enzyme with `jest-enzyme` goodness!
 - lint-staged installed for running prettier before any commit. 
 So no wrong codestyle will leak into the codebase!
 - GitHub pages styleguide automatic deploy right after next release

## Commands
To develop components run
```bash
npm run styleguide 
```

To test
```bash
npm run test
# For watch mode
npm run test:watch
# For tests with coverage info
npm run test:coverage
```

To publish your lib run (which also will run a build process)
```bash
npm run release
```

Also you can run `build, test, test:coverage, 
(stylelint, eslint, prettier) -> stylecheck, demo:start / build` for your 
amazing landing page for your component lib and other commands 
which are pretty descriptive but just a part of the release/build process :)

## More details
As an example in boilerplate there is a `semantic-ui` Button component
with `semantic-ui-css` imported to styleguidist.
Landing page is empty styled with `styled-components`.

Since I use `styled-components` every day. There is also stylelint with 
`styled-components` preprocessor for linting styles in them. And hence 
no stylelinting of plain CSS.

All your components should be in `src/components` folder, so it will be visible
by styleguidist and so they will be bundled to the `lib` for future publishing.

There is CRA underneath, so you can use all its goodness to write your landing page
and also for testing your components library, collect test coverage on them etc.
All setup this way so they will run only on `src/components` and will ignore all other 
folders which are not related to components library.

Readme for your lib lay down in `LIBRARY.md` and will automatically be attached to 
the newly released version of the lib.

## More on release process
Basically when you run `npm run release`
It will run prettier, all linters, then all tests, and after all will bundle
ignoring `test.js` your components. After that it will generate `package.json` for
`lib` folder so handy `name/Button` imports will be possible. Then he will run `npm publish` 
on that newly created `package.json` and publish on Github Pages updated docs of 
your components.

All you need to do is to change package name in `scripts/copyBuildFiles.js` on line 52.
Version of the components lib will be derived from root `package.json`

## Known issues
If you run `npm run deploy:docs` or any other scripts that call him too, on Windows `cmd.exe` you will
get error like 
```
bash: /dev/tty: No such device or address
error: failed to execute prompt script (exit code 1)
fatal: could not read Username for 'https://github.com': Invalid argument
```
To successfully run in on Windows please use git bash or cygwin or anything that simulates linux bash.