import React from 'react'
import { useState } from 'react'
const AddMovies = (props) => {
   const [name,setName]=useState('new movie')
   const [category,setCategory]=useState('')
   const [stars,setStars]=useState(0)
   const [desc,setDesc]=useState('')
   const [cover,setCover]=useState('')
   const [year,setYear]=useState(0)
   const [quality,setQuality]=useState('')
   const [link,setLink]=useState('')
   const handleclick =(e)=>{
    e.preventDefault();
    props.movie({name:name,category:category,stars:stars,desc:desc,cover:cover,year:year,quality:quality,link:link})
   }
   console.log(props.movie)
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Movie name:</label>
                <input type='text' placeholder= 'Add movie name'
                 onChange={(e)=> setName(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Category:</label>
                <input type='text' placeholder= 'Category'
                 onChange={(e)=> setCategory(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Stars:</label>
                <input type={Number} placeholder= 'Stars'
                onChange={(e)=> setStars(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Movie description:</label>
                <input type='text' placeholder= 'Movie description'
                 onChange={(e)=> setDesc(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Movie cover:</label>
                <input type='text' placeholder= 'Plaste a link of photo cover'
                onChange={(e)=> setCover(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Year:</label>
                <input type={Number} placeholder= 'Year'
                onChange={(e)=> setYear(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Movie quality:</label>
                <input type='text' placeholder= 'Movie quality'
                 onChange={(e)=> setQuality(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Movie link:</label>
                <input type='text' placeholder= 'Plaste the link of movie'
                onChange={(e)=> setLink(e.target.value)}></input>
            </div>
            <button onClick={handleclick}  >save</button>

        </form>
    )
}

export default AddMovies
