// HelloWorld is capatilized because it's a React component. All components must be captialized for JSX to understand them
```javscript
const HelloWorld = () => {
  // return React.createElement('h1', null, 'Hello World');
  return <h1>Hello World</h1>; // gets convertered to ^
};
```
if you want your fragment tags to line up, rather than have unaligned fragment tags you can do this:
```javascript
  return (
    <>
      <h1>Hello World</h1>
      <span>test</span>
    </>
  );
```
* you can alias things when you do named imports `import { HelloWorld as Hello WorldB } from '.components/React`
* when hooks became offical, class-based components became no longer necessary
* the argument comes from the parent context, is evaluated, while the parameter is is used in the child
* paramenters are never an expression
* arguments are always an expression
`<ColorTool parameter={ argument }/>`
* https://reactjs.org/docs/typechecking-with-proptypes.html
* 