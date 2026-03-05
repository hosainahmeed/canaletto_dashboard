import baseApis from "../baseApis";

const profileApis = baseApis.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query({
      query: () => ({
        url: '/profile',
        method: 'GET'
      })
    }),

  })
})

export const {
  useGetProfileQuery
} = profileApis
