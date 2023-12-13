import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://course-api.com/" }),
  endpoints: (builder) => ({
    postDoneTasks: builder.mutation({
      query: (tasksAr: { title: string; id: string }[]) => ({
        url: `react-store-products/post`,
        method: "POST",
        body: tasksAr,
      }),
    }),
  }),
});

export const { usePostDoneTasksMutation } = tasksApi;
