export declare enum TelegramUserKeys {
    Id = "id",
    IsBot = "is_bot",
    FirstName = "first_name",
    LastName = "last_name",
    LanguageCode = "language_code"
}
export interface TelegramUser {
    [TelegramUserKeys.Id]: string;
    [TelegramUserKeys.IsBot]: boolean;
    [TelegramUserKeys.FirstName]: string;
    [TelegramUserKeys.LastName]: string;
    [TelegramUserKeys.LanguageCode]: string;
}
