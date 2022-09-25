import { Box, Button, Card, CardActions, CardContent, Chip, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const Scorecard = ({ match }) => {

  const navigate = useNavigate()
  const { matchInfo, matchScore } = match
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>

        <Box justifyContent={'space-between'} flexDirection={'row'} display={'flex'}>
          <Typography sx={{ fontSize: 14, marginBottom: '20px' }} variant='body2' color="text.secondary" gutterBottom>
            {matchInfo?.seriesName}
          </Typography>
          <Chip sx={{ marginRight: '12px' }} size='small' color='primary' label={matchInfo.matchFormat} variant='outlined' />
        </Box>
        <Box justifyContent={'space-between'} flexDirection={'row'} display={'flex'}>
          <Typography variant="h5" component="div">
            {matchInfo?.team1?.teamSName}
          </Typography>
          <Typography variant="h5" component="div">
            {matchScore?.team1Score?.inngs1?.runs}{matchScore?.team1Score?'-':''}{matchScore?.team1Score?.inngs1?.wickets} {matchScore?.team1Score?'(':''}{matchScore?.team1Score?.inngs1?.overs}{matchScore?.team1Score?')':''}
          </Typography>
        </Box>

        <Box justifyContent={'space-between'} flexDirection={'row'} display={'flex'}>
          <Typography variant="h5" component="div">
            {matchInfo?.team2?.teamSName}
          </Typography>
          <Typography variant="h5" component="div">
            {matchScore?.team2Score?.inngs1?.runs}{matchScore?.team2Score?'-':''}{matchScore?.team2Score?.inngs1?.wickets} {matchScore?.team2Score?'(':''}{matchScore?.team2Score?.inngs1?.overs}{matchScore?.team2Score?')':''}
          </Typography>
        </Box>

        <Typography sx={{ mt: '20px' }} color="text.secondary">
          {matchInfo.status}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color='success' onClick={() => { navigate(`/match/${matchInfo.matchId}`) }}>Full score</Button>
      </CardActions>
    </Card>
  )
}

export default Scorecard