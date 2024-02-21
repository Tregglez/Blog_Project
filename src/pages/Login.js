import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from '@supabase/auth-ui-shared';
import supabase from "../config/supabaseClient";
import { useNavigate } from "react-router-dom-v5-compat";

function Login() {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event, session) => {
    if (session?.user) {
      navigate("/admin-secure-dashboard");
    }
  });

  return (
    <div className="login-container">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme='dark'
      />
    </div>
  );
}

export default Login;
