# Frontend-Assets

Pure vanilla ES6 import/export JavaScript. No frontend framework. No jQuery.
Recommended to read [this tutorial by DigitalOcean](https://www.digitalocean.com/community/tutorials/js-modules-es6) to understand how ES6 and import/export are working!

##### Frontend Frameworks
Frameworks like Vue.js or React-Native are nice, but those heavily depends on the project type you are writing. A new Laravel would fit perfectly into Vue.js frontend as an engine. React to write the perfect hybrid app for Android and iOS at the same time which share the same code. But what for a TYPO3 where the frontend engine can't be rendered by Vue.js as it's made to use their own (Fluid-)Template engine.

##### ES6 as benefit to write OOP JavaScript code:
Since "old" programmers - or those who simply copy&paste and coming up with the argument while using jQuery telling you "it's working" or like "how it always has been done" are those who aren't spending their own time into development.
Anyone in your company or yourself as a single-person programming would definitely benefit from the Frontend-Assets since it's designed as OOP. Obviously it's highly inspired by PHP PSR (PHP Standard Recommendations) where the Symfony application has the perfect packages done e.g. the PSR-11 Container - where in our JavaScript Frontend-Assets we got a similiar usage of this using following function:
```js
const App = Application || window.Application;
      App.getContainer();
```
This contains all references to created instances which has been done using:
```js
import LoadEvent from './../Event/DOM/LoadEvent';
...
App.add('DOMLoadEvent', new LoadEvent(this));
```
This is a living-example right inside of the `Container.js` class.
#
#### When to use Frontend-Assets
As mentioned before it depends on the type of the project. It's recommended to use it only if:
- You're not writing a Vue.js application
- You're not using react(-native)
- You're on the web (obviously)
- You into OOP and good code-quality 😁
#
### Installation & Extend Frontend-Assets

```sh
git clone https://github.com/iammati/frontend-assets
```

The entire setup is written in Laravel Mix - which uses WebPack - alternatively you can change it to a pure WebPack setup, but it was easier to use Mix since it has no big config js-file as WebPack by default has.

In order to properly extend the Frontend-Assets - which comes with some predefined handy scripts - you can simply look into `assets/js/Project.js` and `assets/js/App/Project.js`.

The former gets `require()`'d inside `assets/js/Application.js`. It predefines e.g. the `const Application` to be accessible inside of your custom project `.js`-files.
The latter is then your actual "main" `.js`-file. Here you can change what happens the first, as second, as third etc. When to do this and that. Anything.
#
### Support
**Frontend-Assets** officially supports only all modern browser based on chromium. Since the Microsoft Edge browser is ending their support on 9th March 2021 while the Internet Explorer will end on August 17th, 2021 there's no reason to support those two browsers at all. The new Edge browser is running on Chromium - which is anyways the standard and state-of-the-arts for now.
#
### License
MIT
Feel free to clone, change the source, re-publish the **Frontend-Assets**. Please only provide a copyright to the source code with a reference to the [origin GitHub repository](https://github.com/iammati/frontend-assets/).
