import baseApis from "../../baseApis";

const clientApi = baseApis.injectEndpoints({
    endpoints: (build) => ({
        addClient: build.mutation<any, any>({
            query: (data) => ({
                url: '/client/create',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Client']
        }),
        getAllClient: build.query<any, void>({
            query: () => ({
                url: '/client/get-all',
                method: 'GET',
            }),
            providesTags: ['Client']
        }),
        getSingleClient: build.query<any, string>({
            query: (id) => ({
                url: `/client/get-single/${id}`,
                method: 'GET',
            }),
            providesTags: ['Client']
        }),
        deleteClient: build.mutation<any, string>({
            query: (id) => ({
                url: `/client/delete/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Client']
        })
    })
})

export const {
    useAddClientMutation,
    useGetAllClientQuery,
    useGetSingleClientQuery,
    useDeleteClientMutation
} = clientApi

export default clientApi
