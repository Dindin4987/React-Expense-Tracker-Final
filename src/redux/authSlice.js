import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser } from './authOperations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: localStorage.getItem("authToken") || null,
    refreshToken: localStorage.getItem("refreshToken") || null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = false;
      })
      
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        localStorage.setItem("authToken", action.payload.accessToken);
      })
      
      .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        localStorage.removeItem("authToken");
      })
      
      .addCase(refreshUser.pending, (state, _action) => {
        state.isRefreshing = true;
        
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        
        state.user = action.payload;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, (state, _action) => {
        
        state.isRefreshing = false;
        
      });
  },
});

export const authReducer = authSlice.reducer;