import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import AddRoom from "./pages/AddRoom"
import MyRooms from "./pages/MyRooms"

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Room Finder Website</h1>

        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/login">Login</Link> |{" "}
          <Link to="/add-room">Add Room</Link> |{" "}
          <Link to="/my-rooms">My Rooms</Link>
        </nav>
<div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-room" element={<AddRoom />} />
          <Route path="/my-rooms" element={<MyRooms />} />
        </Routes>
      </div>
      </div>

    </BrowserRouter>
  )
}

export default App