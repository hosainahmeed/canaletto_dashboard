import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseApis = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rnj64vmh-9050.inc1.devtunnels.ms/api/v1",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    // apis provided tags
  ],
  endpoints: () => ({}),
});

export default baseApis;
