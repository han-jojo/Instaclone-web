import { useHistory } from "react-router";
import { logUserOut } from "../apollo";

function Home() {
  return (
    <div>
      <h1>Hello world!</h1>
      <button onClick={() => logUserOut()}>Log out now!</button>
    </div>
  );
}
export default Home;
