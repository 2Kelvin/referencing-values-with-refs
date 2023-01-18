export default function App() {
  return React.createElement(
    "h1",
    null,
    "Hello 2023"
  );
}

var root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(React.createElement(App, null));