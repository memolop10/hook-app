import React from 'react'

const Small = React.memo(({ value }) => {

    console.log('Me volvi a llmar :(');

    return (
        <small>
            { value }
        </small>
    )
})

export default Small
