export enum ChatKeys {
  TelegramId = 'telegramId',
  Title = 'title',
  Type = 'type',
}

export interface Chat {
  [ChatKeys.TelegramId]: string;
  [ChatKeys.Title]: string;
  [ChatKeys.Type]: "group" | "private" | "channel";
}