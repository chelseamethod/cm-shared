export enum ChatKeys {
  AirtableId = 'airtableId',
  MemberCount = 'memberCount',
  TelegramId = 'telegramId',
  Title = 'title',
  Type = 'type',
}

export interface Chat {
  [ChatKeys.AirtableId]: string;
  [ChatKeys.MemberCount]: number;
  [ChatKeys.TelegramId]: string;
  [ChatKeys.Title]: string;
  [ChatKeys.Type]: "group" | "private" | "channel";
}

export enum ChatMemberKeys {
  TelegramId = 'telegramId',
  FirstName = 'firstName',
  LastName = 'lastName',
}