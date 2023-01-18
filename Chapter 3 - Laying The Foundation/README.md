## CODE UPDATED IN LATEST WEEK FOLDER

## Q1. What is JSX?
A. From https://reactjs.org/ - JSX is a syntax extension to Javascript. It is neither string, nor HTML.
The main reason for using JSX is the ease of development. Instead of having HTML and JS as two different items altogether, JSX tries to bring together the simplicity of HTML in JS. JSX might look like HTML but it has the full power of Javascript behind it.
Examples -
* Using JSX -
~~~~
const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
~~~~
* Without using JSX -
~~~~
const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
~~~~

## Q2. What are the superpowers of JSX?
A. Some good things about JSX are -
* JSX makes it easier to write or add HTML in React.
* JSX can easily convert HTML tags to react elements.
* JSX allows us to put HTML elements in DOM without using appendChild() or createElement() method.
* As JSX is an expression, we can use it inside of if statements and for loops, assign it to variables, accept it as arguments, or return it from functions.
* JSX prevents XSS (cross-site-scripting) attacks popularly known as injection attacks.
* It is type-safe, and most of the errors can be found at compilation time.

## Q3. What is the role of type attribute in script tag? What options can I use here?
A. As the name suggests, the type attribute inside the script tag specifies what type of script we want to add to our page. Possible values are -
* text/javascript
* text/ecmascript
* module
* text/babel
* text/typescript

## Q4. Explain `{TitleComponent}` vs. `{<TitleComponent />}` vs. `{<TitleComponent></TitleComponent>}`.
A. The difference between the three is -
* `{TitleComponent}` - TitleComponent is a JSX expression or variable.
* `<TitleComponent />` - It is similar to a self-closing tag in HTML.
* `<TitleComponent></TitleComponent>` - Equal to </TitleComponent> if the component does not have any children.
