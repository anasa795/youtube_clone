import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
const SearchBar = () => {
  const [searchTerm,setSearchTerm]=useState('')

  const navigate=useNavigate()
  const submitHandler=(e)=>{
    e.preventDefault()
    if(searchTerm){
      navigate(`/search/${searchTerm}`)

      setSearchTerm('')
    }
  }


  return (
    <Paper
      component="form"
      onSubmit={submitHandler}
      sx={{
        borderRadius: 20,
        pl: 2,
        border: '1px solid red',
        mr: { sm: 5 },
        boxShadow: 'none',
      }}
    >
      <input
        className="search-bar"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => {setSearchTerm(e.target.value)}}
      ></input>
      <IconButton type="search" sx={{ color: 'red', p: '10px' }}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
