export declare enum AppKeys {
    Telegram = "telegram"
}
export interface TelegramState {
    seenOnboarding20221026?: boolean;
    seenCardio14April2023?: boolean;
}
export interface AppState {
    [AppKeys.Telegram]: TelegramState;
}
