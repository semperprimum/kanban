import Logo from "../../assets/logo-light.svg?react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../../features/auth/authSlice";
import { AiOutlineLoading } from "react-icons/ai";
import {
  AuthContainer,
  AuthHeader,
  AuthWrapper,
  Paragraph,
} from "../../components/styles/Auth.styled";
import { Input } from "../../components/styles/Modal.styled";
import { Button } from "../../components";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  if (isLoading) {
    return (
      <div style={{display: "grid", placeItems: "center", height: "100vh"}}>
        <AiOutlineLoading style={{fontSize: "5rem"}} />
      </div>
    );
  }
  return (
    <AuthWrapper>
      <AuthContainer>
        <Logo />
        <AuthHeader>Log in</AuthHeader>
        <form onSubmit={onSubmit}>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={onChange}
          />
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={onChange}
          />
          <Button $small type="submit">
            Submit
          </Button>
        </form>
        <Paragraph>
          Don't have an account yet? <Link to={"/register"}>Register</Link>.
        </Paragraph>
      </AuthContainer>
    </AuthWrapper>
  );
};
