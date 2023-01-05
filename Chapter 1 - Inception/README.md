## What is Emmet?
A. Emmet is a toolkit. Rules for abbreviating regularly used syntaxes that are dynamically parsed. Unlike common snippets which are pre-made, emmet abbreviations produce output depending on what you type.

## Difference between library and framework.
A. Library -
* Does the bare minimum to get to where we need.
* The developer is in control. We call a method from a library as and when needed.
Framework -
* Requires specialized software to be installed to ‘develop’ something.
* The developer passes control to the software in the sense that the framework tells us what it requires to function properly.

## What is CDN? Why do we use it?
A. CDN stands for Content Delivery Network. In simple words, it is a set of many servers around the world, set up in a way such that data is distributed by whichever server is closest to the requester. In technical jargon, CDN is defined as a geographically distributed network of proxy servers and their data centers. The goal is to provide high availability and performance by distributing the service spatially relative to end users.

## Why is React known as React?
A. According to https://reactjs.org/blog/2016/09/28/our-first-50000-stars.html#fbolt-is-born, the library was initially called FBolt. Realizing that FBolt wouldn’t be a great name for the library when used on its own, Jordan Walke and Tom Occhino decided on a new name: “React.” After Tom sent out the diff to rename everything to React. Here is Jordan’s comment on it - I might add for the sake of discussion, that many systems advertise some kind of reactivity, but they usually require that you set up some kind of point-to-point listeners and won’t work on structured data. This API reacts to any state or property changes, and works with data of any form (as deeply structured as the graph itself) so I think the name is fitting. All in all, the name was pretty much a decision between the two major developers for reasons unknown but according to Jordan Walke, React is a fitting name because the library ‘reacts’ to any changes in properties.

## What is crossorigin in script tag?
A. There is a system called CORS which is used to determine whether browsers block frontend JavaScript code from accessing responses for cross-origin requests. crossorigin argument suggests that script from a different domain is allowed to run on the domain of the website which is using React (and might not be from the domain of the React CDN).

## What is the difference between React and ReactDOM?
A. React has the core tools of React. ReactDOM exposes DOM specific methods. If we were using another implementation of React like React Native (something that is outside the browser), we will still be utilizing all things in React but not ReactDOM.

## What is the difference between react.development.js and react.production.js files?
A. As the names suggest, react.development.js is for development purposes and react.production.js is for production scenarios. The reason why is because the production script is minified and optimized. Throwing less detailed errors, for example.

## What are async and defer?
A. Both async and defer are used to determine when a script is executed. Both scripts introduce delays but async will simply execute scripts when it is ready but defer on the other hand will execute the script only when HTML has been rendered. async should be used when order of execution doesn’t matter.
