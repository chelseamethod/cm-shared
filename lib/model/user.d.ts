import * as FirebaseFirestore from "@firebase/firestore-types";
export declare enum UserKeys {
    AllowsDailyNotification = "allowsDailyNotification",
    CompletedModules = "completedModules",
    CurrentModuleItemId = "currentModuleItemId",
    DailyNotificationMinute = "dailyNotificationMinute",
    IsActive = "isActive",
    IsOnboarding = "isOnboarding",
    JoinedMembersGroupAt = "joinedMembersGroupAt",
    LastDailyNotificationSentAt = "lastDailyNotificationSentAt",
    LastStreakActivityAt = "lastStreakActivityAt",
    LastTickAt = "lastTickAt",
    ModuleCursor = "moduleCursor",
    NextDailyNotificationAt = "nextDailyNotificationAt",
    NextTickAt = "nextTickAt",
    StreakCount = "streakCount",
    TelegramLinkKey = "telegramLinkKey",
    TelegramId = "telegramId",
    TelegramFirstName = "telegramFirstName",
    TelegramLastName = "telegramLastName",
    Timezone = "timezone",
    UscreenUserId = "uscreenUserId",
    UscreenCountry = "uscreenCountry",
    UscreenEmail = "uscreenEmail",
    UscreenNickname = "uscreenNickname",
    UscreenName = "uscreenName"
}
export interface ModuleCursor {
    moduleId: string;
    step: number;
    timestamp: FirebaseFirestore.Timestamp;
}
export interface User {
    [UserKeys.StreakCount]?: number;
    [UserKeys.LastStreakActivityAt]?: FirebaseFirestore.Timestamp;
    [UserKeys.UscreenUserId]?: string;
    [UserKeys.UscreenEmail]?: string;
    [UserKeys.UscreenNickname]?: string;
    [UserKeys.UscreenName]?: string;
    [UserKeys.UscreenCountry]?: string;
    [UserKeys.AllowsDailyNotification]?: boolean;
    [UserKeys.DailyNotificationMinute]?: number;
    [UserKeys.LastDailyNotificationSentAt]?: FirebaseFirestore.Timestamp;
    [UserKeys.TelegramLinkKey]?: string;
    [UserKeys.TelegramId]?: string;
    [UserKeys.TelegramFirstName]?: string;
    [UserKeys.TelegramLastName]?: string;
    [UserKeys.IsOnboarding]?: boolean;
    [UserKeys.Timezone]: string;
    [UserKeys.ModuleCursor]?: ModuleCursor;
    [UserKeys.JoinedMembersGroupAt]?: FirebaseFirestore.Timestamp;
    [UserKeys.LastTickAt]?: FirebaseFirestore.Timestamp;
    [UserKeys.CurrentModuleItemId]?: string;
    [UserKeys.IsActive]?: boolean;
    [UserKeys.CompletedModules]?: string[];
    [UserKeys.NextDailyNotificationAt]?: FirebaseFirestore.Timestamp;
    [UserKeys.NextTickAt]?: FirebaseFirestore.Timestamp;
}
