import {apiSlice} from "../api/apiSlice.js";



export const reportApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        searchReport: builder.mutation({
            query: (data) => ({
                url: "/report/search-report",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                }catch(err) {
                    //ErrorToast("Something went wrong!")
                    //console.log(err)
                }
            }
        }),
    }),
})


export const {useSearchReportMutation} = reportApi;