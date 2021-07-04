import React from 'react'
const FilmFilter = ({handleTitleChang}) => {
    return (
        <div >
            <input type="search" placeholder="title search" onChange={(e)=>handleTitleChang(e.target.value)}></input>
        </div>
    )
}

export default FilmFilter