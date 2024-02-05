import { useRef } from "react";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  return (
    <>
      <div className="signup-page">
        <h2>Signup</h2>
        <form>
          <label>Email:</label>
          <input
            type="email"
            required
            id="email"
            ref={emailRef}
          />
          <label>Password</label>
          <input
            type="password"
            required
            id="password"
            ref={passwordRef}
          />
          <label>Password Confirmation</label>
          <input
            type="password"
            required
            id="passwordConfirm"
            ref={passwordConfirmRef}
          />
          <button>Signup</button>
        </form>
        <p>Alredy have an account? Log in</p>
      </div>
    </>
  );
}

export default Signup;