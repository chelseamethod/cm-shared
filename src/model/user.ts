import * as FirebaseFirestore from "@firebase/firestore-types";
import { ModuleItem } from "./module";

export enum UserKeys {
  AllowsDailyNotification = "allowsDailyNotification",
  CompletedModules = "completedModules",
  CurrentModuleItem = "currentModuleItem",
  DailyNotificationMinute = "dailyNotificationMinute",
  IsActive = "isActive",
  IsOnboarding = "isOnboarding",
  JoinedMembersGroupAt = "joinedMembersGroupAt",
  LastDailyNotificationSentAt = "lastDailyNotificationSentAt",
  LastDailyNotificationSentDay = "lastDailyNotificationSentDay",
  LastStreakActivityAt = "lastStreakActivityAt",
  LastTickAt = 'lastTickAt',
  ModuleCursor = "moduleCursor",
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
  UscreenName = "uscreenName",
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
  [UserKeys.LastDailyNotificationSentDay]?: string;
  [UserKeys.LastTickAt]?: FirebaseFirestore.Timestamp;
  [UserKeys.CurrentModuleItem]?: ModuleItem;
  [UserKeys.IsActive]?: boolean;
  [UserKeys.CompletedModules]?: string[];
}
