import React from 'react'

const Card = ({ name, username, email, id }) => {
    return (
        <div className="App bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
            <div>
                <p>{id}. {name}</p>
                <h2>{username} </h2>
                <h3>{email}</h3>
            </div>
        </div>
    )
}

export default Card
