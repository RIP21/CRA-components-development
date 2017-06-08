#create-react-app components development
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

##Commands
To develop components run
```bash
npm run styleguide 
```

To build styleguide 
```bash
npm run styleguide:build
```

To build components library without publishing it run
```bash
npm run build
```

To publish your lib run (which also will run a build)
```bash
npm run release
```

Also you can run `test, test:coverage, 
(stylelint, eslint, prettier) -> stylecheck, demo:start / build` for your 
amazing landing page for your component lib

##More details
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

##More on release process
Basically when you run `npm run release`
It will run prettier, all linters, then all tests, and after all will bundle
ignoring `test.js` your components. After that it will generate `package.json` for
`lib` folder so handy `name/Button` imports will be possible. Then he will run `npm publish` 
on that newly created `package.json`

All you need to do is to change package name in `scripts/copyBuildFiles.js` on line 52.
Version of the components lib will be derived from root `package.json`
