import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseApis = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "", // TODO: Replace with your API base URL
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
