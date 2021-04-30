export interface IProductlogResponse {
  id: number;
  design_name: string;
  product_description: string;
  color: string;
  size: string;
  image: string;
  price: string;
  amount: number;
}

export interface IShippingResponse {
  id: number;
  first_name: string, 
  last_name: string,
  address: string,
  city: string,
  state: string,
  zip_code: string,
  mobile_number: string,
  image: string,

}