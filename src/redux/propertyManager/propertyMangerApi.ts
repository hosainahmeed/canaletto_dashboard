import baseApis from "../baseApis";

const propertyManagerApi = baseApis.injectEndpoints({
  endpoints: (build) => ({
    addPropertyManager: build.mutation<any, any>({
      query: (data) => ({
        url: '/property-manager/create',
        method: 'POST',
        body: data
      })
    }),
    getAllPropertyManager: build.query<any, void>({
        query: () => ({
            url: '/property-manager/get-all',
            method: 'GET',
        })
    })
  })
})

export const {
  useAddPropertyManagerMutation,
  useGetAllPropertyManagerQuery
} = propertyManagerApi

export default propertyManagerApi
