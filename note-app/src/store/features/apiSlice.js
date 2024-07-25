import {
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react'

export const rootApi = createApi({
    reducerPath: "rootApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:3000/`
    }),
    tagTypes: ['notes'],

    endpoints: (builder) => ({
        getAllNotes: builder.query({
            query: () => `notes`,
            providesTags: [`notes`]
        }),
        addNote: builder.mutation({
            query: (notes) => ({
                url: `notes`,
                method: `POST`,
                body: notes
            }),
            invalidatesTags: ['notes']
        }),
        removeNote: builder.mutation({
            query: (id) => ({
                url: `notes/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['notes']
        }),
        updateNote:builder.mutation({
            query:(note)=>({
                url:`notes/${note.id}`,
                method:`PUT`,
                body:note
                
            }),
            invalidatesTags: ['notes']
        })
        
    }),


})

export const {
    useGetAllNotesQuery,
    useAddNoteMutation,
    useRemoveNoteMutation,
    useUpdateNoteMutation

} = rootApi