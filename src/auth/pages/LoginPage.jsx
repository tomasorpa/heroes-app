import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate("/", {
      replace: true,
    });
  };

  return (
    <>
      <h2>LoginPage</h2>
      <button onClick={onLogin}>login</button>
    </>
  );
};
