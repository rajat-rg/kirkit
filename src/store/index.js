import { configureStore } from '@reduxjs/toolkit'
import MatchSlice from './MatchSlice'
export default configureStore({
  reducer: {Match:MatchSlice},
})