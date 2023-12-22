import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'


export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://yt3.ggpht.com/tP8TaCX0NBEBZCfJZhXkyScAHoJXncwz-tSxLHF3642KkIfQxo__cR0DzUryBOzNtkLDu8ir=s108-c-k-c0x00ffffff-no-rj" />
                <Dropdown pointing="top left" text='Harun'>
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={signOut} text="Çıkış yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
