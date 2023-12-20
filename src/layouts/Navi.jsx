import React from 'react'
import CartSummary from './CartSummary'
import { Button, Container, Menu } from 'semantic-ui-react'


export default function Navi() {
    return (
        <div>
            <Menu inverted fixed = "top">

                <Container>
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item
                        name='Mesajlar'
                    />
                    <Menu.Menu position='right'>
                        <CartSummary />
                        <Menu.Item>
                            <Button primary>Giriş Yap</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div >
    )
}
