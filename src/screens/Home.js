import { useHistory } from "react-router";  
import { logUserOut } from "../apollo";

function Home() {
  const history = useHistory();
  return (
    <div>
      <h1>Hello world!</h1>
      <button onClick={() => logUserOut(history)}>Log out now!</button>
    </div>
  );
}
export default Home;
