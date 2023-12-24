import {tagTypes} from "@/rtk/tag-types";
import {baseApi} from "./baseApi";

const CART_URL = "/cart";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addtoCart: builder.mutation({
      query: (data) => ({
        url: `${CART_URL}/add-new`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.cart],
    }),
    getCart: builder.query({
      query: (id) => ({
        url: `/${CART_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.cart],
    }),
    removeFromCart: builder.mutation({
      query: ({userId, data}) => ({
        url: `/${CART_URL}/remove/${userId}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.cart],
      // async onQueryStarted(arg, {queryFulfilled, dispatch}) {
      //   try {
      //     const result = await queryFulfilled;
      //
      //   } catch (error) {
      //     // do nothing
      //   }
      // },
    }),
  }),
});

export const {
  useAddtoCartMutation,
  useGetCartQuery,
  useRemoveFromCartMutation,
} = cartApi;
