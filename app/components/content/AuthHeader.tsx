import React from 'react'

const AuthHeader = () => {
    return (
        <div className={`absolute top-0 left-0 right-0 text-white  w-full p-4 flex place-content-center border-b`}>
            <div className={``}>
                <a href="/" className={`underline text-gray-500 hover:text-gray-500 text-lg`}>Home</a>
            </div>
        </div>
    )
}

export default AuthHeader
