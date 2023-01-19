# referencing-values-with-refs

![stopwatch_ref](https://user-images.githubusercontent.com/85868026/213131933-c2e0e52b-45a2-4317-b77e-ea0a0e04a2c0.png)

In this read, I learnt:

- use a `ref` to **make a component remember some information without it (the new information) triggering new renders**
- use a ref by `importing the useRef hook`. When initializing it (a ref), **pass an initial value** you want to reference as the only argument to useRef(). useRef returns an object with a property of current set to the initial value you passed it. You can access the current value of a ref using `ref.current`. The value stored in current is _mutable_ and _react does not track it_. This is why it's called an `escape hatch` (by avoid being tracked by react, hence new data from it doesn't triggers rerenders)
- `ref is a plain Javascript object with a current property you can read and modify`. Just like state, refs are retained between rerenders by React. However, `when ref changes it doesn't trigger a new rerender`
- refs and state can be combined in a single component
- when some info is needed for rendering keep it in state. Info that is only needed by event handlers and changing it doesn't need to trigger a rerender, keep it in ref
- _a ref is a regular state varaible without a setter function_
- **use refs when you need to communicate to external APIs (like a browser API) that wont affect the appearance of the component (the UI).** Here are a few examples:
  - storing timeout IDS
  - storing & manipulating DOM elements
  - storing objects that dont calculate JSX
- `if your component needs to store a value that doesn't impact rendering use refs`
- `best practices for refs`:
  - [x] **only use ref as an escape hatch**. To hold onto values not used for rendering
  - [x] **don't read or write ref during rendering**. It makes it hard to predict your component's behavior
- remember,
  - a ref is just a regular javacsript object (with a single property; current) that can be mutated and is never used in rendering
  - a ref retains information between component rerenders
