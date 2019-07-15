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