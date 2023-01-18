# referencing-values-with-refs

In this read, I learnt:

- use a `ref` to **make a component remember some information without it (the new information) triggering new renders
  **
- use a ref by `importing the useRef hook`. When initializing it (a ref), **pass an initial value** you want to reference as the only argument to useRef(). useRef returns an object with a property of current set to the initial value you passed it. You can access the current value of a ref using `ref.current`. The value stored in current is _mutable_ and _react does not track it_. This is why it's called an `escape hatch` (by avoid being tracked by react, hence new data from it doesn't triggers rerenders)
- `ref is a plain Javascript object with a current property you can read and modify`. Just like state, refs are retained between rerenders by React. However, `when ref changes it doesn't trigger a new rerender`
- refs and state can be combined in a single component
- when some info is needed for rendering keep it in state. Info that is only needed by event handlers and changing it doesn't need to trigger a rerender, keep it in ref
