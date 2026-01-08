import { supabase } from "../supabase";

function AddRoom() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data: userData } = await supabase.auth.getUser();
    const user = userData.user;

    if (!user) {
      alert("Please login first");
      return;
    }

    const room = {
      title: e.target.title.value,
      location: e.target.location.value,
      rent: e.target.rent.value,
      property_type: e.target.property_type.value,
      tenant_type: e.target.tenant_type.value,
      contact: e.target.contact.value,
      user_id: user.id,
    };

    const { error } = await supabase.from("rooms").insert([room]);

    if (error) {
      alert(error.message);
    } else {
      alert("Room added successfully!");
      e.target.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Room</h2>

      <input name="title" placeholder="Title" required />
      <input name="location" placeholder="Location" required />
      <input name="rent" type="number" placeholder="Rent" required />
      <input name="property_type" placeholder="Property Type" required />
      <input name="tenant_type" placeholder="Tenant Type" required />
      <input name="contact" placeholder="Contact" required />

      <button type="submit">Add Room</button>
    </form>
  );
}

export default AddRoom;