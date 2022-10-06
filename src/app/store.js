import { configureStore } from '@reduxjs/toolkit'
// import reducerName from '../components/reducerSlice
import projectsReducer from './gridSlice'


export default configureStore ({
  reducer: {
    projects: projectsReducer,
  }
})