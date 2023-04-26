import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { GetAQVoltageResponse} from "./types";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: "main",
    tagTypes: ["AQVoltages"],
    endpoints: (build) => ({
        getAQVoltages: build.query<Array<GetAQVoltageResponse>,void>({
            query: ()=> "aqvoltage/aqvoltages",
            providesTags: ["AQVoltages"],
        }),
    }),
});


export const {useGetAQVoltagesQuery} = api;