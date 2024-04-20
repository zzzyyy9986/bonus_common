//{
//         json: {
//             code: 3,
//             user: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "МВМ"',
//             items: [ [Object], [Object] ],
//             nds18: 795300,
//             region: '23',
//             userInn: '7707548740  ',
//             dateTime: '2024-01-31T21:26:00',
//             kktRegId: '0002831634018996    ',
//             metadata: {
//                 id: 5146001311476515000,
//                 ofdId: 'ofd9',
//                 address: '350059,Россия,Краснодарский край,город Краснодар г.о.,,Краснодар г,,Уральская ул,,д. 98/11,,,,',
//                 subtype: 'receipt',
//                 receiveDate: '1970-01-01T00:00:00Z'
//             },
//             operator: 'Старший продавец Путря Владимир Сергеевич',
//             totalSum: 4771800,
//             creditSum: 0,
//             numberKkt: '00106909197875',
//             fiscalSign: 1511848317,
//             prepaidSum: 0,
//             operatorInn: '234809466904',
//             retailPlace: 'Операционная касса',
//             shiftNumber: 175,
//             cashTotalSum: 0,
//             provisionSum: 0,
//             ecashTotalSum: 4771800,
//             operationType: 1,
//             redefine_mask: 2,
//             requestNumber: 12,
//             fiscalDriveNumber: '7284440500275777',
//             messageFiscalSign: 9297119866918795000,
//             retailPlaceAddress: '350059, Краснодарский край, г.Краснодар, ул.Уральская, 98/11',
//             appliedTaxationType: 1,
//             fiscalDocumentNumber: 4044,
//             fiscalDocumentFormatVer: 4
//         },
//
//     }
import { NalogItem } from "./NalogItem";

export interface TaxResponse {
  json: {
    user: string;
    items: NalogItem[];
    region: string;
    userInn: string;
    dateTime: string;
    metadata: {
      id: number;
      ofdId: string;
      address: string;
      subtype: string;
      receiveDate: string;
    };
    totalSum: number;
  };
}
