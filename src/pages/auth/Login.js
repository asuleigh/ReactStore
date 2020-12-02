import React, { useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { Button } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";


const Login = ({history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  let dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    // console.table(email, password); 
    try {
        const result = await auth.signInWithEmailAndPassword(email, password);
        // console.log(result);
        // make request to our own database to create and update the user
        // we will get our own response to dispatch to redux store
        const {user} = result
        const idTokenResult = await user.getIdTokenResult();
        dispatch({ 
            type: "LOGGED_IN_USER",
            payload: {
              email: user.email,
              token:idTokenResult.token,
            }
          });
        history.push('/');
    } catch (error) {
        console.log(error);
        toast.error(error.message);
        setLoading(false);
    }
  };

  const loginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        autoFocus
      />
      <input
        type="password"
        className="form-control"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        autoFocus
      />
      </div>

      <br />

    <Button 
        onClick = {handleSubmit}
        type="primary"
        className="mb-3"
        block
        shape="round"
        icon={< MailOutlined/>}
        size="large"
        disabled={!email || password.length < 6}>
        Login with Email and Password
    </Button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Login</h4>
          <p>Login to your account below</p>
          {loginForm()}
        </div>
      </div>
    </div>
  );
};

export default Login;


