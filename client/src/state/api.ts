import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { GetAcuVoltageResponse} from "./types";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: "main",
    tagTypes: ["AcuVoltages"],
    endpoints: (build) => ({
        getAcuVoltages: build.query<Array<GetAcuVoltageResponse>,void>({
            query: ()=> "acuvoltage/acuvoltages",
            providesTags: ["AcuVoltages"],
        }),
    }),
});


export const {useGetAcuVoltagesQuery} = api;