import React from 'react';
import DefaultNavbar from '@theme-original/Navbar';

const containerStyle = {
    position: 'sticky',
    top: 0,
    backgroundColor: '#910f0f',
    color: 'white',
    zIndex: 1000,
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '70px',
    padding: '0 16px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.42)',
};

const closeButtonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    fontSize: '22px',
};

export default function Navbar(props) {
    const [showBanner, setShowBanner] = React.useState(true);

    return (
        <>
            {showBanner && (
                <div style={containerStyle}>
                    <b>
                        These docs are old and won't be updated. Go to <a style={{
                            color: '#4599ed',
                            textDecoration: 'underline',
                        }} href='https://docs.kognic.com'>docs.kognic.com</a> for our latest documentation!
                    </b>
                    <button
                        style={closeButtonStyle}
                        onClick={() => setShowBanner(false)}>
                        ╳
                    </button>
                </div>
            )}
            <DefaultNavbar {...props} />
        </>
    );
}
