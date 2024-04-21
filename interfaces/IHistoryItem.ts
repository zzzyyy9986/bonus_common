import { HistoryOperationTypes } from "../enums/HistoryOperationTypes";

export interface IHistoryItem {
  _id: string;
  sum: number;
  bonuses: number;
  operationType: HistoryOperationTypes;
  qrStr: string;
  partnerId: string;
  userId: string;
  partner: {
    name: string;
  };
  time: number;
}
export interface IHistoryItemFull extends IHistoryItem {
  partnerName: string;
}
