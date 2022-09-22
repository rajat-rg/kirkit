import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getMatches } from '../store/MatchSlice'
const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMatches())
    }, [])
    
  return (
    <div style={{background:'pink'}}>Home</div>
  )
}

export default Home