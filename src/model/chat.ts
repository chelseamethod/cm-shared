import *  as FirebaseFirestore from '@firebase/firestore-types';

export enum ChatKeys {
  AirtableId = 'airtableId',
  LastActivityAt = 'lastActivityAt',
  MemberCount = 'memberCount',
  TelegramId = 'telegramId',
  Title = 'title',
  Type = 'type',
  TelegramInviteLink = 'telegramInviteLink',
}

export interface Chat {
  [ChatKeys.AirtableId]: string;
  [ChatKeys.MemberCount]: number;
  [ChatKeys.TelegramId]: string;
  [ChatKeys.Title]: string;
  [ChatKeys.Type]: "group" | "private" | "channel";
  [ChatKeys.TelegramInviteLink]: string;
  [ChatKeys.LastActivityAt]: Date | string | number | FirebaseFirestore.Timestamp;

}

export enum ChatMemberKeys {
  TelegramId = 'telegramId',
  FirstName = 'firstName',
  LastName = 'lastName',
}