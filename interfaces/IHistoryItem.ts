import { HistoryOperationTypes } from "../enums/HistoryOperationTypes";

export interface IHistoryItem {
  _id: string;
  sum: number;
  bonuses: number;
  operationType: HistoryOperationTypes;
  qrStr: string;
  partherId: string;
  userId: string;
}
