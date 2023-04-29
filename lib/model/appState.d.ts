export declare enum AppKeys {
    Telegram = "telegram"
}
export interface TelegramState {
    seenOnboarding20221026?: boolean;
    seenCore14May2023?: boolean;
}
export interface AppState {
    [AppKeys.Telegram]: TelegramState;
}
