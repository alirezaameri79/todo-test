import { ITodo } from "../types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["Todos"], //defining tags' type
  endpoints: (builder) => ({
    getTodos: builder.query<ITodo[], void>({
      query: () => "/todos",
      transformResponse: (response: ITodo[]) => {
        let copy = response.filter((r) => r.id <= 10);
        return copy.sort((a, b) => b.id - a.id);
      },
      providesTags: ["Todos"], // defining a tag for this call
    }),
    addTodo: builder.mutation({
      query: (todo: ITodo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todos"], // invalidate this tag for this mutation so that data can automatically re-fetched
    }),
    updateTodo: builder.mutation({
      query: (todo: ITodo) => ({
        url: `todos/${todo.id}`,
        method: "PUT",
        body: todo,
      }),
      invalidatesTags: ["Todos"], // invalidate this tag for this mutation so that data can automatically re-fetched
    }),
    deleteTodo: builder.mutation({
      query: (id: number) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"], // invalidate this tag for this mutation so that data can automatically re-fetched
    }),
  }),
});

// custom hooks based on the methods that we provide
export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = apiSlice;
