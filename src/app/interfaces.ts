export interface StepsIF{
  name: string;
  attribute: string;
  operation: {
    type: string | null;
    value: string;
  },
  valueMain: number | string;
  valueOff?: number;
}

interface opType{
  value: string;
}
