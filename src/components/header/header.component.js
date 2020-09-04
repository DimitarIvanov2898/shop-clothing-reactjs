import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import './header.styles.scss'
import { auth } from '../../firebase/firebase.utils'

const Header = () => {
    const { currentUser } = useSelector((x) => x.user);
    const { hidden } = useSelector((x) => x.cart);

    return (
        <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                Shop
            </Link>
            <Link className='option' to='/shop'>
                Contact
            </Link>
            {
                currentUser?.id ? 
                (<div className='option' onClick={() => auth.signOut()}>Sign Out</div>) :
                (<Link className='option' to='/signin'>Sign In</Link>)
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
        
    </div>
    )
    
}


export default (Header)