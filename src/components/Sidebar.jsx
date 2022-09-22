import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import newsCategory from '../utils/newsCategory.json'
const Sidebar = () => {
  const [newsTopic, setNewsTopic] = useState([])
  useEffect(() => {
    const getTopic = async () => {
      const data = await axios.get('https://cricbuzz-cricket.p.rapidapi.com/news/v1/topics', {
        headers: {
          'X-RapidAPI-Key': 'f9e1c867f9msh14fa5acd59c8de5p18e24djsn6f64e5916cf5',
          'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
        }
      })
      setNewsTopic(data.data.topics.slice(0, 10))
    }
    getTopic()
  }, [])


  return (
    <Stack
      sx={{ minWidth: '15vw', width: { xs: '0vw' }, display: { xs: 'none', md: 'block' }, margin: 'auto' }}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      <><Typography variant='h6' color='text.primary'>News by category</Typography>
        {
          newsCategory.storyType.map(item => {
            return <Box><Button color='secondary'>{item.name}</Button></Box>
          })
        }</>
      <><Typography variant='h6' color='text.primary'>News by topic</Typography>
        {

          newsTopic.map(item => {
            return <Box><Button>{item.headline}</Button></Box>
          })
        }</>
    </Stack>
  )
}

export default Sidebar