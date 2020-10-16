import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as authApi from "./service/authService";
import * as userApi from "./service/userService";
import jwtDecode from "jwt-decode";

const tokenKey = "token";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkApi) => {
    try {
      const { data: jwt } = await authApi.login(user);
      localStorage.setItem(tokenKey, jwt);
      window.location = "/products";
    } catch (ex) {
      if (ex.response) {
        return thunkApi.rejectWithValue(ex.response.data);
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkApi) => {
    try {
      await userApi.register(user);
    } catch (ex) {
      if (ex.response) {
        return thunkApi.rejectWithValue(ex.response.data);
      }
    }
  }
);

const slice = createSlice({
  name: "users",
  initialState: {
    loginErrors: "",
    registerErrors: "",
  },
  reducers: {},
  extraReducers: {
    [loginUser.rejected]: (users, action) => {
      users.loginErrors = action.payload;
    },
    [registerUser.rejected]: (users, action) => {
      users.registerErrors = action.payload;
      console.log(users.registerErrors);
    },
  },
});

export const getLoginError = (state) => state.users.loginErrors;
export const getRegisterError = (state) => state.users.registerErrors;

export function logout() {
  localStorage.removeItem(tokenKey);
}

export async function updateUserScore(userId, data) {
  await userApi.updateScore(userId, data);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}
export default slice.reducer;
