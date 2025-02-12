import Booking from "./pages/Booking";
import Room from "./pages/Room";
import "./index.css";

function App() {
  return (
    <div className="container">
      <h1>Hotel Booking System</h1>
      <div className="sections">
        <Booking />
        <Room />
      </div>
    </div>
  );
}

export default App;