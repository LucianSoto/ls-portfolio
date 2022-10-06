import { createSlice } from '@reduxjs/toolkit'

export const projectsSlice = createSlice ({
  name: 'projects',
  initialState: {
    display: true,
  },
  reducers: {
    changeProjects: (state) => {
      state.display = !state.display
    },
  },
})

export const { changeProjects } = projectsSlice.actions
export const selectDisplay = state => state.projects.display
export default projectsSlice.reducer
