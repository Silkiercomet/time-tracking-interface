# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![screen of the proyect](screenshot.png)



### Links

- Solution URL: [Add solution URL here](https://github.com/Silkiercomet/time-tracking-interface)
- Live Site URL: [Add live site URL here](https://silkiercomet.github.io/time-tracking-interface/)

## My process

### Built with

- Semantic HTML5 markup && BEM
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- stackoverflow and much love


### What I learned

i learned that you need to set a timeout in order to make an element (well one of the ways of doing it) 
content transition from vanilla JS, also lear how to import or read the content from a JSON file,

To see how you can add code snippets, see below:

```js
function toggleTransitionWithTimeout(x) {
    x.style.display = 'none'
    x.classList.remove("fade"); // removing the class
    setTimeout(() => {
      requestAnimationFrame(() => {
        // We are manually adding new content and adding class again to node
        x.style.display = 'inline-block'
        x.classList.add("fade");
      });
    }, 225); // timeout
  }
```
```js
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
```



### Continued development

in the future im gonna work on adding constructor functions and classes to add more personalize components to the proyect at one point i will love to add a little database that carries numbers
of the suty time of the user


### Useful resources

- [resource 1](https://codesandbox.io/s/vanilla-js-text-transition-example-hc7kq?from-embed=&file=/src/index.js:749-776) - This helped me for making the content change have a smooth transition
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
