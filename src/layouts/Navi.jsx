import React, { useState } from "react";
import CartSummary from "./CartSummary";
import { Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navi() {
  const { cartItems } = useSelector((state) => state.cart);

  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate();

  function handleSignOut() {
    //çıkış yap
    setIsAuthenticated(false); //çıkış yapınca false olur
    navigate("/");
  }

  function handleSignIn() {
    //giriş yap
    setIsAuthenticated(true); //giriş yapınca true olur
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item>
          <img alt="logo" src="images/logo/logo.png" />
          </Menu.Item>
          <Menu.Item name="Anasayfa" />
          <Menu.Item name="Bildirimler" />
          <Menu.Item name="Mesajlar" />
          <Menu.Menu position="right">
            {cartItems.length > 0 && <CartSummary />}
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
