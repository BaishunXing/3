import { createSlice } from '@reduxjs/toolkit'

const USERS = [
  { id: 1, username: 'admin',  password: 'admin123', name: 'Admin' },
  { id: 2, username: 'alice',  password: 'alice123', name: 'Alice' },
  { id: 3, username: 'bob',    password: 'bob123',   name: 'Bob'   },
]

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(sessionStorage.getItem('user')) || null,
    error: null,
  },
  reducers: {
    login(state, action) {
      const { username, password } = action.payload
      const found = USERS.find(u => u.username === username && u.password === password)
      if (found) {
        const { password: _, ...safeUser } = found
        state.user = safeUser
        state.error = null
        sessionStorage.setItem('user', JSON.stringify(safeUser))
      } else {
        state.error = 'Invalid username or password'
      }
    },
    logout(state) {
      state.user = null
      state.error = null
      sessionStorage.removeItem('user')
    },
    clearError(state) {
      state.error = null
    },
  },
})

export const { login, logout, clearError } = authSlice.actions
export default authSlice.reducer