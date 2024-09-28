import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://expense-tracker.b.goit.study/api/';

// Utility to add JWT
const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
    'auth/register',
    async ({ name, email, password }, thunkAPI) => {
        try {
            const res = await axios.post('/auth/register', {
                name, email, password
            });
            setAuthHeader(res.data.token);
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async ({ email, password }, thunkAPI) => {
        try {
            const res = await axios.post('/auth/login', {
                email, password,
            });
            setAuthHeader(res.data.token);
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const logout = createAsyncThunk("auth/logout",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token;

        try {
            if (!token) {
                return thunkAPI.rejectWithValue("No access token available.");
            }

            setAuthHeader(token);

            await axios.get("/auth/logout");

            clearAuthHeader();
            return { message: "Logged out successfully" };
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
            }
)


export const refreshUser = createAsyncThunk(
    'auth/refreshUser',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const accessToken = state.auth.token;

        if (!accessToken) {
            return thunkAPI.rejectWithValue("No access token available.");
        }

        setAuthHeader(accessToken);

        try {
            const response = await axios.get("/users/current");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || error.message);
        }
    }
);