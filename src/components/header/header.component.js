import React from 'react'
import { useSelector } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/crown.svg'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles.js'
import { auth } from '../../firebase/firebase.utils'

const Header = () => {
    const { currentUser } = useSelector((x) => x.user);
    const { hidden } = useSelector((x) => x.cart);

    return (
        <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                Shop
            </OptionLink>
            <OptionLink to='/shop'>
                Contact
            </OptionLink>
            {
                currentUser?.id ? 
                (<OptionLink as='div' onClick={() => auth.signOut()}>Sign Out</OptionLink>) :
                (<OptionLink to='/signin'>Sign In</OptionLink>)
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
        
    </HeaderContainer>
    )
    
}


export default (Header)