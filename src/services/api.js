import {fetchBaseQuery,createApi} from '@reduxjs/toolkit/query/react'

export const Api = createApi({
    reducerPath : 'Api',
    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:9000/'
    }),


    endpoints :(builder) =>({
        doctorGet : builder.query({
            query :() =>({
                url:'/doctordetail',
                method:'GET',
                headers:{
                'Content-Type':'application/json'
                }
            })
        }),

        doctorGetByid: builder.query({
            query: (id) => ({
                url: `doctordetail/${id}`,
                headers: {
                    'Content-Type':'application/json'
                }
            })
        }),

        contactUs : builder.mutation({
            query :(args) =>({
                url:`/contactus`,
                method:'POST',
                body: args,
                headers:{
                'Content-Type':'application/json'
                }
            })
        }),

        signUp : builder.mutation({
            query :(data) =>({
                url:`/signup`,
                method:'POST',
                body: data,
                headers:{
                'Content-Type':'application/json'
                }
            })
        }),
        singnIn : builder.mutation({
            query :(data) =>({
                url:`/signin`,
                method:'POST',
                body: data,
                headers:{
                'Content-Type':'application/json'
                }
            })
        }),


    })
})

export const {useDoctorGetQuery , useDoctorGetByidQuery , useContactUsMutation ,useSignUpMutation ,useSingnInMutation} = Api