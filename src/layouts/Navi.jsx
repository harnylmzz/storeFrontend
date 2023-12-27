import React, { useState } from 'react'
import CartSummary from './CartSummary'
import { Container, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { useNavigate } from 'react-router-dom'

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const navigate = useNavigate();

    function handleSignOut() { //çıkış yap
        setIsAuthenticated(false) //çıkış yapınca false olur
        navigate("/");

    }

    function handleSignIn() { //giriş yap
        setIsAuthenticated(true) //giriş yapınca true olur
    }

    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item name='home' />
                    <Menu.Item name='Bildirimler' />
                    <Menu.Menu position='right'>
                        <CartSummary />

                        {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}

                    </Menu.Menu>
                </Container>
            </Menu>
        </div >
    )
}
