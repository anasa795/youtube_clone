import React from 'react'
import { Stack } from '@mui/material'
import { categories } from './utils/constants'

// const selectedCategory = 'New'
const Sidebar = (props) => {
  const { selectedCategory, setselectedCategory } = props

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
      }}
    >
      {categories.map((category) => {
        
        return (
          <button
            className="category-btn"
            onClick={() => setselectedCategory(category.name)}
            style={{
              background: category.name === selectedCategory && '#FC1503',
              color: '#fff',
            }}
            key={category.name}
          >
            <span
              style={{
                color: category.name === selectedCategory ? 'white' : 'red',
                marginRight: '15px',
              }}
            >
              {category.icon}
            </span>
            <span>{category.name}</span>
          </button>
        )
      })}
    </Stack>
  )
}

export default Sidebar
