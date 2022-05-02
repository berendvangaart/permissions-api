import {useDispatch, useSelector} from "react-redux";
import {decreaseCounter, increaseCounter} from "./Store/Counter/counter.actions";
import Button from 'react-bootstrap/Button'


function App() {

  const dispatch = useDispatch()
  const state = useSelector((state) => state.counter)

  return (
    <div>
      <h1>{state.count}</h1>
        <Button onClick={() => dispatch(increaseCounter(10))}>Increase Count</Button>
        <Button onClick={() => dispatch(decreaseCounter(10))}>Decrease Count</Button>
    </div>
  );
}

export default App;
