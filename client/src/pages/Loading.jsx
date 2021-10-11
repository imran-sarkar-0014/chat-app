import React from 'react'


const Loading = () => {
    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <img src="/fbMessenger.png" style={{ height: '250px', width: '250px' }} alt="" />
        </div>
    )
}

export default Loading
