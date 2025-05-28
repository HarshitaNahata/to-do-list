import React from 'react';

function Typography({ children, fontSize, bold }) {
    return (
        <div style={{ fontSize, fontWeight: bold ? "700" : "400" }}>
            {children}
        </div>
    );
}


export default Typography