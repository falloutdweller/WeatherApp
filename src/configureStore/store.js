import weather from "../features/weather/weatherSlice";
import message from "../features/message/messageSlice";

import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        weather, message
    }
});