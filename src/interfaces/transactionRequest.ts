export interface TransactionRequest {
  id?: string;
  value: number;
  category: string;
  type: number;
  userId?: string;
}
