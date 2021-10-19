import UserForm from "./components/UserForm";
import UsersList from "./components/UsersList";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <UserForm />
      <UsersList />
    </div>
  );
};

export default Login;
