export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export interface IUser {
  _id: string;
  fullName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}
export type IProduct = {
  _id: string;
  title: string;
  image: string;
  color: string;
  size: string;
  price: number;
};

export type IItemsList = {
  _id: string;
  productId: IProduct;
  size: "sm" | "md" | "xl" | "2xl" | "3xl" | "4xl";
  color: string;
  quantity: number;
};

export type ICart = {
  _id: string;
  userId: string;
  items: IItemsList[];
};
