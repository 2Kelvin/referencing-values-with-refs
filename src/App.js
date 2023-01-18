function Stopwatch() {
  const [startTime, setStartTime] = React.useState(null);
  const [now, setNow] = React.useState(null);
  const intervalRef = React.useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div className="w-72 m-auto p-6 rounded-lg shadow-md bg-white">
      <h1 className="text-sm font-mono text-center">Time passed</h1>
      <p className="text-pink-400 text-center font-bold text-5xl">
        {secondsPassed.toFixed(3)}
      </p>
      <div className="flex justify-between">
        <button
          className="rounded-lg font-mono shadow-md w-24 h-12 bg-teal-500 font-bold px-5 py-2 my-5 cursor-pointer"
          onClick={handleStart}
        >
          Start
        </button>

        <button
          className="rounded-lg font-mono shadow-md w-24 h-12 bg-red-500 font-bold px-5 py-2 my-5 cursor-pointer"
          onClick={handleStop}
        >
          Stop
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="grid place-content-center h-screen bg-slate-400/50">
      <Stopwatch />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(<App />);
