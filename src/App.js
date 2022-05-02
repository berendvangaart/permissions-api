import {useDispatch, useSelector} from "react-redux";
import {decreaseCounter, increaseCounter} from "./Store/Counter/counter.actions";

function App() {

  const dispatch = useDispatch()
  const state = useSelector((state) => state.counter)

  return (
    <div>
      <h1>{state.count}</h1>
        <button onClick={() => dispatch(increaseCounter(10))}>Increase Count</button>
        <button onClick={() => dispatch(decreaseCounter(10))}>Decrease Count</button>
    </div>
  );
}

export default App;
