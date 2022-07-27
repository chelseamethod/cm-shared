import *  as FirebaseFirestore from '@firebase/firestore-types';

export enum MessageKeys {
    TelegramId = 'telegramId',
    Date = 'date',
    Text = 'text',
    From = 'from',
  }
  
  export interface Message {
    [MessageKeys.TelegramId]: string;
    [MessageKeys.Date]: FirebaseFirestore.Timestamp;
    [MessageKeys.Text]?: string;
    [MessageKeys.From]?: {
      telegramId: string;
      firstName: string;
      lastName: string;
    }
  }