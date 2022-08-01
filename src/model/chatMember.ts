export enum ChatMemberKeys {
    TelegramId = 'telegramId',
    FirstName = 'firstName',
    LastName = 'lastName',
  }
  
  export interface ChatMember {
    [ChatMemberKeys.TelegramId]: string;
    [ChatMemberKeys.FirstName]: string;
    [ChatMemberKeys.LastName]: string;
  }