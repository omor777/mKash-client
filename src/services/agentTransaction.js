import { api } from "./api";

const agentTransactionApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTransaction: builder.query({
      query: ({ page = 1, limit = 10 }) => {
        const token = localStorage.getItem("token");
        return {
          url: "/transaction/agent",
          method: "GET",
          params: { page, limit },
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
      },
      providesTags: (result) => {
        return result.success
          ? [
              ...result.data.map(({ _id }) => {
                return { type: "TransactionAgent", id: _id };
              }),
              "TransactionAgent",
            ]
          : ["TransactionAgent"];
      },
    }),
  }),
});

export const { useGetTransactionQuery } = agentTransactionApi;
