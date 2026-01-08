import { useEffect, useState } from "react";
import { supabase } from "../supabase";

function MyRooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchMyRooms();
  }, []);

  const fetchMyRooms = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data, error } = await supabase
      .from("rooms")
      .select("*")
      .eq("user_id", user.id);

    if (!error) {
      setRooms(data);
    }
  };

  const deleteRoom = async (id) => {
    const confirmDelete = window.confirm("Delete this room?");
    if (!confirmDelete) return;

    const { error } = await supabase.from("rooms").delete().eq("id", id);

    if (!error) {
      fetchMyRooms();
    }
  };

  return (
    <div className="card">
      <h2>My Rooms</h2>

      {rooms.length === 0 && <p>No rooms added yet</p>}

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
          <p>{room.location}</p>
          <p>₹{room.rent}</p>
          <button onClick={() => deleteRoom(room.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default MyRooms;