import {createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "../api/weatherAction.ts";

const messageSlice = createSlice({
    name: 'message',
    initialState: 'Enter city name',
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWeather.pending, () => 'Loading...')
            .addCase(fetchWeather.fulfilled, _state => "")
            .addCase(fetchWeather.rejected, () => 'Enter correct city name')
    }
})

export default messageSlice.reducer