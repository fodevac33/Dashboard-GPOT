import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { GetAQVoltageResponse, GetKpisResponse} from "./types";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: "main",
    tagTypes: ["Kpis", "AQVoltages"],
    endpoints: (build) => ({
        getKpis: build.query<Array<GetKpisResponse>,void>({
            query: ()=>"kpi/kpis/",
            providesTags: ["Kpis"],
        }),
        getAQVoltages: build.query<Array<GetAQVoltageResponse>,void>({
            query: ()=> "aqvoltage/aqvoltages",
            providesTags: ["AQVoltages"],
        }),
    }),
});


export const {useGetKpisQuery, useGetAQVoltagesQuery} = api;