import { useEffect } from "react";
import { socket } from "./socket";

function App() {
  useEffect(() => {
    socket.on("newOrder", msg => alert(msg));
  }, []);

  return <h1>Pharmacy Order System</h1>;
}

export default App;
