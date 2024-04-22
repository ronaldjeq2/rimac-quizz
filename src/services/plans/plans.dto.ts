export interface IPlanInfo {
  name: string;
  price: number;
  description: string[];
  age: number;
}

export type TGetPlansResponse = IPlanInfo[];

export interface IGetPlansResponse {
  list: IPlanInfo[];
}
