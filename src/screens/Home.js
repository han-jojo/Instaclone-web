import { logUserOut } from "../apollo";

function Home() {
  return (
    <div>
      <h1>Hello world!</h1>
      <button onClick={() => logUserOut(false)}>Log out now!</button>
    </div>
  );
}
export default Home;
