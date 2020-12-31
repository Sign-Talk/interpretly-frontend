import React from 'react'
import ClientJobPost from './JobPost/ClientJobPost'

const OnBoard = () => {
    return (
        <>
            <div style={{ width: '50%', margin: '5em auto' }}>
                <ClientJobPost 
                    onBoard={true}
                />
            </div>
        </>
    )
}

export default OnBoard
