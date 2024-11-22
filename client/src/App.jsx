import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/reducers/storeSlice";

function App() {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.store);

  return <></>;
}

export default App;
