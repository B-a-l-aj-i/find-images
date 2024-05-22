import {useState} from 'react'
import  "./style.css"

function SearchBar({onSubmit}){

  let [term,setTerm]=useState('')

  const handleChange=(e)=>{
    setTerm(e.target.value)
  }

  
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(term);
    onSubmit(term)
  }
  
  return(
    <div>
        <form onSubmit={handleSubmit}  >
         <input placeholder='search-for-images' className='search-bar' value={term} onChange={handleChange} />
        </form>

        </div>
    )
}


export default SearchBar