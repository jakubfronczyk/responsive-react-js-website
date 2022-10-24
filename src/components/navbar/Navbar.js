import React, {useState} from 'react'
import styles from './Navbar.module.css'
import {AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser} from 'react-icons/ai'
import Logo from '../../images/logo.png'

function Navbar() {

    const [navbar, setNavbar] = useState(false)

    return (
        <header className={styles.navbar}>
            <img src={Logo} alt="/"/>
            <nav>
                <ul className={navbar ? [styles.menu, styles.active].join(' '): [styles.menu]}>
                    <li>
                        <a href="/">Learn more</a>
                    </li>
                    <li>
                        <a href="/">Log in</a>
                    </li>
                    <li>
                        <a href="/">Sing up</a>
                    </li>
                    <li>
                        <AiOutlineSearch size={25} style={{marginTop: '7px'}}/>
                    </li>
                    <li>
                        <AiOutlineUser size={25} style={{marginTop: '7px'}}/>
                    </li>
                </ul>
            </nav>
            <div onClick={()=> setNavbar(prevNavbar => !prevNavbar)}className={styles.mobile_btn}>
                {navbar ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
            </div>
        </header>
    )
}

export default Navbar