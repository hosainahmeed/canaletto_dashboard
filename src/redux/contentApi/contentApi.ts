import baseApis from "../baseApis";

const contentApi = baseApis.injectEndpoints({
    endpoints: (build) => ({
        addLifestyle: build.mutation<any, FormData>({
            query: (data) => ({
                url: '/lifestyle/create',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['LifeStyle'],
        }),
    })
})

export const {
    useAddLifestyleMutation
} = contentApi

export default contentApi
