import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./features/auth/authSlice";
import { useCounter } from "./customHooks/useCounter";
import Post from "./Post";

function App() {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const { count, increment, decrement } = useCounter(10);
  return (
    <>
      <div>
        <h2>Redux Toolkit (Javascript) </h2>
        {isLoggedIn ? (
          <>
            <p>Welcome {user}!</p>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={() => dispatch(login("Srikanth"))}>Login</button>
          </>
        )}
      </div>
      <button onClick={increment}>+ Increase</button>
      {count}
      <button onClick={decrement}>- Decrease </button>
      <Post post={"This is a post from parent to child"} />
    </>
  );
}

export default App;
