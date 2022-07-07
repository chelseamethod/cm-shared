import * as FirebaseFirestore from "@firebase/firestore-types";
export declare enum UserKeys {
    AllowsDailyNotification = "allowsDailyNotification",
    CompletedModules = "completedModules",
    CurrentDailyItemId = "currentDailyItemId",
    CurrentModuleItemId = "currentModuleItemId",
    DailyNotificationMinute = "dailyNotificationMinute",
    Id = "id",
    IsActive = "isActive",
    IsOnboarding = "isOnboarding",
    JoinedMembersGroupAt = "joinedMembersGroupAt",
    LastDailyNotificationSentAt = "lastDailyNotificationSentAt",
    LastStreakActivityAt = "lastStreakActivityAt",
    LastTickAt = "lastTickAt",
    ModuleCursor = "moduleCursor",
    NextDailyNotificationAt = "nextDailyNotificationAt",
    StreakCount = "streakCount",
    Stats = "stats",
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
export declare enum ModuleCursorKeys {
    ModuleId = "moduleId",
    Step = "step",
    Timestamp = "timestamp"
}
export declare enum StatsKeys {
    StreakCount = "streakCount",
    WatchTime = "watchTime",
    WatchCount = "watchCount"
}
export interface ModuleCursor {
    [ModuleCursorKeys.ModuleId]: string;
    [ModuleCursorKeys.Step]: number;
    [ModuleCursorKeys.Timestamp]: FirebaseFirestore.Timestamp;
}
export interface Stats {
    [StatsKeys.StreakCount]?: number | FirebaseFirestore.FieldValue;
    [StatsKeys.WatchTime]?: number | FirebaseFirestore.FieldValue;
    [StatsKeys.WatchCount]?: number | FirebaseFirestore.FieldValue;
}
export interface User {
    [UserKeys.Id]?: string;
    [UserKeys.StreakCount]?: number | FirebaseFirestore.FieldValue;
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
    [UserKeys.Timezone]?: string;
    [UserKeys.ModuleCursor]?: ModuleCursor;
    [UserKeys.JoinedMembersGroupAt]?: FirebaseFirestore.Timestamp;
    [UserKeys.LastTickAt]?: FirebaseFirestore.Timestamp;
    [UserKeys.CurrentModuleItemId]?: string;
    [UserKeys.CurrentDailyItemId]?: string;
    [UserKeys.IsActive]?: boolean;
    [UserKeys.CompletedModules]?: string[];
    [UserKeys.NextDailyNotificationAt]?: FirebaseFirestore.Timestamp;
    [UserKeys.Stats]?: Stats;
}
