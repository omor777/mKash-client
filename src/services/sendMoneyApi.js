import { api } from "./api";

const sendMoneyApi = api.injectEndpoints({
  endpoints: (builder) => ({
    sendMoney: builder.mutation({
      query: (body) => {
        const token = localStorage.getItem("token");
        return {
          url: "/transaction/sendMoney",
          method: "POST",
          body,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useSendMoneyMutation } = sendMoneyApi;
