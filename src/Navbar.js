import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <h1 style={styles.logo}>MyApp</h1>
            <ul style={styles.navLinks}>
                <li><Link style={styles.link} to="/">Home</Link></li>
                <li><Link style={styles.link} to="/about">About</Link></li>
                <li><Link style={styles.link} to="/contact">Contact</Link></li>
                <li style={styles.navItem}><Link style={styles.link} to="/Login">Login</Link></li>
                <li style={styles.navItem}><Link style={styles.link} to="/Signup">Signup</Link></li>

            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: '#333',
        color: '#fff'
    },
    logo: {
        margin: '0'
    },
    navLinks: {
        listStyleType: 'none',
        display: 'flex',
        margin: '0',
        padding: '0'
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        marginLeft: '1rem'
    }
};

export default Navbar;
