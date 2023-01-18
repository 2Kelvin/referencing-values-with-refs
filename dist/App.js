var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function Stopwatch() {
  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      startTime = _React$useState2[0],
      setStartTime = _React$useState2[1];

  var _React$useState3 = React.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      now = _React$useState4[0],
      setNow = _React$useState4[1];

  var intervalRef = React.useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(function () {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  var secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return React.createElement(
    "div",
    { className: "w-72 m-auto p-6 rounded-lg shadow-md bg-white" },
    React.createElement(
      "h1",
      { className: "text-sm font-mono text-center" },
      "Time passed"
    ),
    React.createElement(
      "p",
      { className: "text-pink-400 text-center font-bold text-5xl" },
      secondsPassed.toFixed(3)
    ),
    React.createElement(
      "div",
      { className: "flex justify-between" },
      React.createElement(
        "button",
        {
          className: "rounded-lg font-mono shadow-md w-24 h-12 bg-teal-500 font-bold px-5 py-2 my-5 cursor-pointer",
          onClick: handleStart
        },
        "Start"
      ),
      React.createElement(
        "button",
        {
          className: "rounded-lg font-mono shadow-md w-24 h-12 bg-red-500 font-bold px-5 py-2 my-5 cursor-pointer",
          onClick: handleStop
        },
        "Stop"
      )
    )
  );
}

export default function App() {
  return React.createElement(
    "div",
    { className: "grid place-content-center h-screen bg-slate-400/50" },
    React.createElement(Stopwatch, null)
  );
}

var root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(React.createElement(App, null));