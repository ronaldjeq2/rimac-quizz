export interface IPlanState {
  name: string;
  price: number;
  disccountPrice?: number;
  description: string[];
  age: number;
}

export type TPlansState = IPlanState[];
