import { api } from "./api";

const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/users",
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllUsersQuery } = usersApi;
