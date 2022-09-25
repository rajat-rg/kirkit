import { Box,Divider, Stack, Typography } from '@mui/material'
import {Link} from 'react-router-dom'
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
      sx={{ maxWidth:'20vw', width: { xs: '0vw', sm:'20vw' }, display: { xs: 'none', sm: 'block' }, padding: '12px', background:'#1A1717' }}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      <><Typography variant='h6' color='text.primary'>News by category</Typography>
        {
          newsCategory.storyType.map(item => {
            return <Box padding={0.7} marginY={0} key={item.name} ><Link to={`news/category/${item.id}`} style={{textDecoration:'none', color:'inherit'}} >
            <Typography variant='subtitle1' fontWeight={500} fontSize={14} color='text.secondary'>{item.name.toUpperCase()}</Typography>
          </Link></Box>
          })
        }</>
      
      <><Typography variant='h6' color='text.primary'>News by topic</Typography>
        {

          newsTopic.map(item => {
            return <Box padding={0.7} marginY={0} key={item.headline} ><Link to={`news/topic/${item.id}`} style={{textDecoration:'none', color:'inherit'}} >
            <Typography variant='subtitle1' fontWeight={500} fontSize={14} color='text.secondary' >{item.headline.toUpperCase()}</Typography>
          </Link></Box>
          })
        }</>
    </Stack>
  )
}

export default Sidebar