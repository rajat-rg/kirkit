import { Box, Button, ButtonGroup, Chip, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Scorecard from '../components/Scorecard'
import { getMatches } from '../store/MatchSlice'



import matchTypeFile from '../utils/matchType.json'
const Home = () => {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   console.log('dispatching')
  //   dispatch(getMatches())
  // }, [])

  const [matchTime, setMatchTime] = useState('live')
  const [matchType, setMatchType] = useState('International')
  const [matchesOfType, setMatchesOfType] = useState([])
  const { typeMatches } = matchTypeFile;

  useEffect(() => {
    typeMatches.forEach(element => {
      if (element.matchType === matchType) {
        setMatchesOfType(element.seriesMatches)
      }
    });
  }, [matchType, typeMatches])
  return (
    <Paper elevation={0} sx={{ padding: '12px' }}>
      <Typography variant='h3'>Cricket Score</Typography>
      <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{ marginTop: '6px' }}>
        <Button variant={`${matchTime}` === 'live' ? 'contained' : 'filled'}
          onClick={() => setMatchTime('live')}
          color='warning' value="live">Live</Button>
        <Button variant={`${matchTime}` === 'recent' ? 'contained' : 'filled'}
          onClick={() => setMatchTime('recent')}
          color='warning' value="recent">Recent</Button>
        <Button variant={`${matchTime}` === 'upcoming' ? 'contained' : 'filled'}
          onClick={() => setMatchTime('upcoming')}
          color='warning' value="upcoming">Upcoming</Button>
      </ButtonGroup>
      <Box sx={{ marginY: '12px' }}>
        <Chip sx={{ marginRight: '12px' }} color='success' label="International" variant={`${matchType}` === 'International' ? 'filled' : 'outlined'} onClick={() => { setMatchType('International') }} />
        <Chip sx={{ marginRight: '12px' }} color='success' label="League" variant={`${matchType}` === 'League' ? 'filled' : 'outlined'} onClick={() => { setMatchType('League') }} />
        <Chip sx={{ marginRight: '12px' }} color='success' label="Domestic" variant={`${matchType}` === 'Domestic' ? 'filled' : 'outlined'} onClick={() => { setMatchType('Domestic') }} />
        <Chip sx={{ marginRight: '12px' }} color='success' label="Women" variant={`${matchType}` === 'Women' ? 'filled' : 'outlined'} onClick={() => { setMatchType('Women') }} />
      </Box>
      <Grid container spacing={4} wrap='wrap'>
        {matchesOfType.length === 0 ? <Typography>No matches scheduled</Typography> :
          matchesOfType.map((item) => {
            return item?.seriesAdWrapper?.matches?.map(match => {
              return <Grid item xs={12} md={6}><Scorecard match={match} /></Grid>
            })

          })
        }
      </Grid>
    </Paper>
  )
}

export default Home