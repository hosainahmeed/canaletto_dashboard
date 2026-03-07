import baseApis from "../baseApis";

const propertyManagerApi = baseApis.injectEndpoints({
    endpoints: (build) => ({
        addPropertyManager: build.mutation<any, any>({
            query: (data) => ({
                url: '/client/create',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['PropertyManager']
        }),
        getAllPropertyManager: build.query<any, void>({
            query: () => ({
                url: '/client/get-all',
                method: 'GET',
            }),
            providesTags: ['PropertyManager']
        }),
        getSinglePropertyManager: build.query<any, string>({
            query: (id) => ({
                url: `/client/get-single/${id}`,
                method: 'GET',
            }),
            providesTags: ['PropertyManager']
        }),
        deletePropertyManger: build.mutation<any, string>({
            query: (id) => ({
                url: `/client/delete/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['PropertyManager']
        })
    })
})

export const {
    useAddPropertyManagerMutation,
    useGetAllPropertyManagerQuery,
    useGetSinglePropertyManagerQuery,
    useDeletePropertyMangerMutation
} = propertyManagerApi

export default propertyManagerApi
