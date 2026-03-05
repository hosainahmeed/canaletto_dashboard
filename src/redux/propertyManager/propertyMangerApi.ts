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
        }),
        getSinglePropertyManager: build.query<any, void>({
            query: (id) => ({
                url: `/property-manager/get-single/${id}`,
                method: 'GET',
            })
        })
    })
})

export const {
    useAddPropertyManagerMutation,
    useGetAllPropertyManagerQuery,
    useGetSinglePropertyManagerQuery
} = propertyManagerApi

export default propertyManagerApi
