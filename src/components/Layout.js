import React from 'react';

const Layout = (props) => {
    const { children } = props;
    console.log('child prop:', children);

    return (
        <div>
            <header style={{
                background: 'red',
                width: "100%",
                padding:"5px"
            }}>
                This is the header
            </header>
            <div>{children}</div>
        </div>
    )
}
export default Layout;
