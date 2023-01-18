## CODE UPDATED IN LATEST WEEK FOLDER

## Q1. What is the difference between *Named* export, *Default* export and * as export?
A. In layman terms, a *Named* export is simply an export that has the same name as the name of the function component. In contrast, a *Default* export can use any name. Using named exports, we can export multiple components from the same file. Default exports allow us to export exactly one component.


PS - Although this explanation considers React centric ideas, named and default exports are not React centric.


There is no asterisk export. There is import * which will import everything from a from the component it is called on.

## Q2. What is the importance of `config.js` file?
A. A `config.js` file allows hard coding certain variables that will be used in multiple locations. For example - We are using the URL prefix for images and the list of restaurants. These variables are something used across multiple components. So, rather than defining them in multiple places, we define them in a single place and then import them into components as needed. This allow modularity and a single point of error if anything fails.

## Q3. What are React Hooks?
A. React Hooks are plain JS functions. They allow function components to have access to things like `state`.

## Q4. Why do we need a `useState` hook?
A. Updating state (changing values) is something that cannot be done directly and must be done using the `useState` hook. It is used to maintain the local state variable, from creation to updation.
