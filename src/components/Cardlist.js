import React from 'react'
import Card from './Card'

const Cardlist = ({ robots }) => {
    const robotList = robots.map(robot => {
        return (
            <Card
                key={robot.id}
                id={robot.id}
                name={robot.name}
                username={robot.username}
                email={robot.email}
            />
        )
    })
    return (
        <div>
            {robotList}
        </div>
    )
}

export default Cardlist
