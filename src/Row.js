import React, { useEffect, useState } from 'react'

function Row(props) {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        
    },[])

    return (
    <div>
        <h1>{props.title}</h1>
    </div>
  )
}

export default Row;
