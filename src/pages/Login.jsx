import { supabase } from "../supabase";

function Login() {
  const handleLogin = async () => {
    const email = document.getElementById("email").value;

    const { error } = await supabase.auth.signInWithOtp({
      email,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Login link sent to email!");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input id="email" type="email" placeholder="Enter email" />
      <button onClick={handleLogin}>Send Login Link</button>
    </div>
  );
}

export default Login;