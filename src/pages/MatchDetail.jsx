import { Box, Typography } from '@mui/material'
import React from 'react'
import data from '../utils/matchType.json'
const MatchDetail = () => {
  const {matchInfo} = data;
  const date = new Date (matchInfo.matchStartTimestamp)
  console.log(date.getMonth()+1, date.getDate(), date.getHours(), date.getMinutes())
  return (
    <Box>
      <Typography variant='h4' color='text.primary'>{matchInfo.team1.name} vs {matchInfo.team2.name}, {matchInfo.matchDescription}, {matchInfo.matchFormat}</Typography>
      <Box display='flex' flexDirection='row' gap={1}>
      <Typography variant='body1' color='gray'><b>Series:</b> {matchInfo.series.name}</Typography>
      <Typography variant='body1' color='gray'><b>Venue:</b> {matchInfo.venue.name}, {matchInfo.venue.city}</Typography>
      <Typography variant='body1' color='gray'><b>Date: </b>{`${date.getDate()}/${date.getMonth()+1} - ${date.getHours()}:${date.getMinutes()} HOURS LOCAL`} </Typography>
      </Box>
    </Box>
  )
}

export default MatchDetail