import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Meta from "../components/Meta";
import { useDispatch, useSelector } from "react-redux";

const HomeScreen = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(userInfo);
  return (
    <div>
      <Meta />
      <h1
        style={{
          textAlign: "center",
          color: "blue",
        }}
      >
        Home
      </h1>
      {!userInfo ? (
        <>
          <h4
            style={{
              textAlign: "center",
              color: "darkgray",
            }}
          >
            Please Log in to use our services
          </h4>

          <LinkContainer to="/login">
            <Nav.Link>
              <i className="fas fa-user"></i> Sign In
            </Nav.Link>
          </LinkContainer>
        </>
      ) : (
        <>
          <h2
            style={{
              textAlign: "center",
              color: "blue",
            }}
          >
            Welcome Back {userInfo.name}!!!
          </h2>
        </>
      )}
    </div>
  );
};

export default HomeScreen;
