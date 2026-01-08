import { useEffect, useState } from "react";
import { supabase } from "../supabase";

function Home() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    const { data, error } = await supabase
      .from("rooms")
      .select("*")
      

    if (error) {
      console.log(error);
    } else {
      setRooms(data);
    }
  };

  return (
    <div className="card">
      <h2>Available Rooms</h2>

      {rooms.length === 0 && <p>No rooms available</p>}

      {rooms.map((room) => (
        <div
          key={room.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{room.title}</h3>
          <p>Location: {room.location}</p>
          <p>Rent: ₹{room.rent}</p>
          <p>Property Type: {room.property_type}</p>
          <p>Tenant Type: {room.tenant_type}</p>
          <p>Contact: {room.contact}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;