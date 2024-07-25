import { api } from "./api";

const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: ({ page = 1, limit = 10, search = "" }) => {
        return {
          url: "/users",
          params: { page, limit, search },
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.users.map(({ _id }) => ({
                type: "Users",
                id: _id,
              })),
              { type: "Users", id: "LIST" },
            ]
          : [{ type: "Users", id: "LIST" }],
    }),
    patchUser: builder.mutation({
      query: ({ id }) => {
        const token = localStorage.getItem("token");
        return {
          url: `/users/${id}`,
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
      },
      invalidatesTags: (result, error, { id }) => {
        return [
          { type: "Users", id },
          { type: "Users", id: "LIST" },
        ];
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllUsersQuery, usePatchUserMutation } = usersApi;
