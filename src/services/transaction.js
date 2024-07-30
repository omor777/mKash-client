import { getToken } from "../utils/localstorage";
import { api } from "./api";

const transactionApi = api.injectEndpoints({
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
                return { type: "Transaction", id: _id };
              }),
              "Transaction",
            ]
          : ["Transaction"];
      },
    }),
    approveTransaction: builder.mutation({
      query: ({ id }) => {
        const token = localStorage.getItem("token");
        return {
          url: `/transaction/agent/${id}`,
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
      },
      invalidatesTags: (_result, _error, { id }) => {
        return [{ type: "Transaction", id }, "Transaction"];
      },
    }),
    cashOut: builder.mutation({
      query: (body) => {
        const token = getToken();
        return {
          url: "/transaction/cashOut",
          method: "POST",
          body,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
      },
      invalidatesTags: ["Transaction"],
    }),
    cashIn: builder.mutation({
      query: (body) => {
        const token = getToken();
        return {
          url: "/transaction/cashIn",
          method: "POST",
          body,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
      },
      invalidatesTags: ["Transaction"],
    }),
    transactionHistoryAgent: builder.query({
      query: () => {
        const token = getToken();
        return {
          url: "/transaction/history",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
      },
      transformResponse: ({ success, data }, _meta, _arg) => {
        return {
          success,
          data: data.map((item) => ({
            id: item._id,
            amount: item.amount,
            transaction_type: item.transaction_type,
            name: item.from.name,
            email: item.from.email,
            mobile_number: item.from.mobile_number,
          })),
        };
      },
    }),
  }),
});

export const {
  useGetTransactionQuery,
  useApproveTransactionMutation,
  useCashOutMutation,
  useCashInMutation,
  useTransactionHistoryAgentQuery,
} = transactionApi;
