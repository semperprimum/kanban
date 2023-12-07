import Logo from "../../assets/logo-light.svg?react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../../features/auth/authSlice";
import { Input } from "../../components/styles/Modal.styled";
import {
  AuthWrapper,
  AuthContainer,
  AuthHeader,
  Paragraph,
} from "../../components/styles/Auth.styled";
import { Button } from "../../components";
import { Spinner, SpinnerContainer } from "../../components/ui/Spinner.styled";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

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
    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );
  }
  return (
    <AuthWrapper>
      <AuthContainer>
        <Logo />
        <AuthHeader>Register</AuthHeader>
        <form onSubmit={onSubmit}>
          <Input
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={onChange}
          />
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
          <Input
            type="password"
            id="password2"
            name="password2"
            value={password2}
            placeholder="Confirm password"
            onChange={onChange}
          />
          <Button $small type="submit">
            Submit
          </Button>
        </form>
        <Paragraph>
          Already have an account? <Link to={"/login"}>Log in</Link>.
        </Paragraph>
      </AuthContainer>
    </AuthWrapper>
  );
};
