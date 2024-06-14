import React from 'react';

const Home = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Welcome to MyApp</h2>
            <p style={styles.paragraph}>This is the home page.</p>
        </div>
    );
};

const styles = {
    container: {
        padding: '2rem',
        textAlign: 'center'
    },
    heading: {
        fontSize: '2rem',
        margin: '0'
    },
    paragraph: {
        fontSize: '1.2rem'
    }
};

export default Home;
