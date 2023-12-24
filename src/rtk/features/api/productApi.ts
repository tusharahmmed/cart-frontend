import {tagTypes} from "@/rtk/tag-types";
import {baseApi} from "./baseApi";
const PRODUCT_URL = "/products";

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => ({
        url: PRODUCT_URL,
        method: "GET",
      }),
      providesTags: [tagTypes.product],
    }),
    getProductDetails: build.query({
      query: (id) => ({
        url: `${PRODUCT_URL}/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {useGetAllProductsQuery, useGetProductDetailsQuery} = productApi;
