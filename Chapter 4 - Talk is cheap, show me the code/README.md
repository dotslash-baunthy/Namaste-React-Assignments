## Q1. Is JSX mandatory for React?
A. No.

## Q2. Is ES6 mandatory for React?
A. No.

## Q3. Explain `{TitleComponent}` vs. `{<TitleComponent />}` vs. `{<TitleComponent></TitleComponent>}` in JSX.
A. The difference between the three is -
* `{TitleComponent}` - TitleComponent is a JSX expression or variable.
* `<TitleComponent />` - It is similar to a self-closing tag in HTML.
* `<TitleComponent></TitleComponent>` - Equal to </TitleComponent> if the component does not have any children.

## Q4. How can I write comments in JSX?
A. Comments in JSX must be wrapped in curly braces like so -

`{/* This is a comment */}`

## Q5. What are `<React.Fragment></React.Fragment>` and `<></>`?
A. `<React.Fragment>` is the same as `<>`. Empty tags are shorthand. Since JSX components can only be used to return a single component, everthing being returned by a component are supposed to be wrapped inside a single tag like `div`. However, a `div` has properties of its own. This is the reason why `<React.Fragment>` was introduced. It is an empty tag. Logically understood by React to be nothing.

## Q6. What is Virtual DOM?
A. Virtual DOM is a concept which is a representation of UI kept in memory and synced with real DOM by ReactDOM.

## Q7. What is reconciliation in React?
A. In plain English, Reconcilation means restoration of compatibilty or equalling. Reconciliation is a process where the Virtual DOM is synced with actual DOM by ReactDOM such that both DOMs are same. React uses Diff algorithm for performing reconciliation.

## Q8. What is React Fiber?
A. React Fiber is a reimplementation of older versions of React reconciler.