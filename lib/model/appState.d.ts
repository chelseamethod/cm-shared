export declare enum AppKeys {
    Telegram = "telegram"
}
export interface TelegramState {
    seenOnboarding20221026?: boolean;
}
export interface AppState {
    [AppKeys.Telegram]: TelegramState;
}
