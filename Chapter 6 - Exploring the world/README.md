## Q1. What is a Microservice?
A. If a software is designed to do a task, it is broken into different services. These smaller components each work towards a specific task and are concerned only by it. Each such smaller software component is referred to as a micro-service.

## Q2. What is Monolith architecture?
A. An application designed as a single service.

## Q3. What is the difference between monolith and microservice?
A. A monolithic application is built as a single unit while an application with a microservices architecture is a collection of smaller, independently deployable services, each concerned about it's own, independent functioning only.

## Q4. Why do we need useEffect hook?
A. useEffect hook is used to run function on render of sepecific change of state of specific variables (defined in the dependency array).

Ex - 

```
useEffect(()=>{
    namasteReactFunction();
}, [namasteReactVariable])
```

In the above case, namasteReactFunction() will be called only when the value of namasteReactVariable changes.

## Q5. What is optional chaining?
A. Optional chaining is a safe way to access nested properties even in case an adjacent property does not exist. For example, if I want to get property `data` from variable `restaurants` but restaurants is not defined yet (in case of an API call, for example), we could use optional chaining to keep our application from breaking apart and instead gracefully handling the situation.

```const restaurantData = restaurant?.data```

## Q6. What is Shimmer UI?
A. A temporary component that is rendered in place of the actual component when the actual one is taking time to load (in case it is still attempting to process data). It resembles the page's actual UI and instead of blocking the entire page like traditional loaders components, Shimmer UI loaders are shaped similar to how the actual components will end up looking.

## Q7. What is the difference between JS Expression and JS Statement?
A. Expressions produce a value. Statements are calculated (two sided expression), they do something.

Ex - `canVote?true:false` is an expression. It produces the vaule true or false depending on some logic which was determined by a statement.

`let a = 10` is a statement.

## Q8. What is conditional rendering? Explain with code examples.
A. Conditional rendering refers to rendering a component a or b based on some condition.

Ex -
```
return (
    restaurantData?<Shimmer />:<RestaurantMenu {...restaurantId}/>
)
```

## Q9. What is CORS?
A. CORS stands for Cross-Origin Resource Sharing. It is a mechanism, provided in the header of an HTTP request that can allow it to indicate whether an origin other than its own is allowed to load resources.

## Q10. What is async await?
A. `async` and `await` are keywords that enable synchronous, promise-based behaviour to be written in a cleaner style. At the end of the day, they are promises being handled in the same way but a different look. They help us avoice callback hells and keep control of the program rather than handing it over to a callback function that may or may not complete.

## Q11. What is the use of `const json = await data.json();` in getRestaurants()?
A. in `getRestaurants()`, data is being fetched from an API. The `await` keyword actually returns a promise object, not the actual data. Basically, we are waiting for the JSON object and as soon as that is avaiable, `data.json()` assures that it is handed over successfully.