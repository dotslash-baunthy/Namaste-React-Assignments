## Q1. What are the various ways to add images into our app? Explain with code example.
A. The various way to add images into our app are -
- By URL of the image - Upload the image into a CDN and use the URL.

```
const IMG_URL = "https://cdn/img/imgurl_123";
<img src={"IMG_URL"}></img>
```
- Putting the image locally in the project and provide relative path.

```
<img src={"../assets/img/img_123.jpg"}></img>
```
- Importing image and then using a variable (similar to the point above)

```
import image from "../assets/img/img_123.jpg"
<img src={image}></img>
```

## Q2. What would happen if we do `console.log(useState())`?
A. It logs and array of length 2. The first element is the starting value (in this case it is blank). The second element is a function which allows us to change the value of a state variable. useState can be destructured and the two elements have their values assigned to constants in our code.

## Q3. How will `useEffect` behave if we don't add a dependency array?
A. When we do not provide a dependency array, useEffect()hook will run after every state change.

## Q4. What is an SPA?
A. SPA stands for Single Page Application. It is fast because instead of loading entire pages, it loads a single page and then updates components in the body of that document.

## Q5. What is the difference between Client Side Routing and Server Side Routing?
A. Differences are -
- Server side routing - Only requests the needed data and then renders it. Every page results in a full refresh since data is stored on the server and only that which is needed is fetched.
- Client side routing - Storage of the data is done on the client side itself. Since the entire page does not need to load but only specific components render, routing between "views" are generally faster. It is slow during the initial load because all code/components/data needs to load during the initial request. Loads a good amount of data that may not be needed by you.