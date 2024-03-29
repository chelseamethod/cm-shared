import * as FirebaseFirestore from "@firebase/firestore-types";
import { AppState } from "./appState";
import { ModuleItem } from "./module";

export enum UserKeys {
  AirtableId = "airtableId",
  AllowsDailyNotification = "allowsDailyNotification",
  AppState = "appState",
  CompletedModules = "completedModules",
  CreatedAt = "createdAt",
  DailyItemId = "dailyItemId",
  DailyNotificationMinute = "dailyNotificationMinute",
  Id = "id",
  IsActive = "isActive",
  JoinedMembersGroupAt = "joinedMembersGroupAt",
  LastDailyNotification = "lastDailyNotification",
  LastStreakActivityAt = "lastStreakActivityAt",
  LastTickAt = 'lastTickAt',
  Module = "module",
  ModuleHistory = 'moduleHistory',
  Phone = 'phone',
  ReferralCode = "referralCode",
  RegisteredForSquadAt = 'registeredForSquadAt',
  StreakCount = "streakCount",
  StartAt = "startAt",
  Stats = "stats",
  TelegramFirstName = "telegramFirstName",
  TelegramId = "telegramId",
  TelegramLastName = "telegramLastName",
  TelegramLinkKey = "telegramLinkKey",
  TelegramSmallGroupId = "telegramSmallGroupId",
  TelegramSmallGroupUrl = "telegramSmallGroupUrl",
  Timezone = "timezone",
  Uid = "uid",
  UscreenUserId = "uscreenUserId",
  UscreenCountry = "uscreenCountry",
  UscreenEmail = "uscreenEmail",
  UscreenNickname = "uscreenNickname",
  UscreenName = "uscreenName",
}

export enum UserModuleKeys {
  LastCompletedStep = "lastCompletedStep",
  LastCompletedTimestamp = "lastCompletedTimestamp",
  ModuleId = "moduleId",
  ModuleItemId = 'moduleItemId',
  StartStep = "startStep",
  StartTimestamp = "startTimestamp",
}

export enum StatsKeys {
  StreakCount = "streakCount",
  WatchTime = "watchTime",
  WatchCount = "watchCount",
}

export interface UserModule {
  [UserModuleKeys.ModuleId]?: string;
  [UserModuleKeys.ModuleItemId]?: string;
  [UserModuleKeys.LastCompletedStep]?: number;
  [UserModuleKeys.LastCompletedTimestamp]?: FirebaseFirestore.Timestamp;
  [UserModuleKeys.StartStep]?: number;
  [UserModuleKeys.StartTimestamp]?: FirebaseFirestore.Timestamp;
}

export enum UserModuleHistoryKeys {
  CompletedItems = 'completedItems'
}

export interface UserModuleHistory {
  [UserModuleHistoryKeys.CompletedItems]?: {
    moduleItemId: string,
    step?: number,
    day?: string,
    completedAt: FirebaseFirestore.Timestamp,
  }[]
}

export interface Stats {
  [StatsKeys.StreakCount]?: number | FirebaseFirestore.FieldValue;
  [StatsKeys.WatchTime]?: number | FirebaseFirestore.FieldValue;
  [StatsKeys.WatchCount]?: number | FirebaseFirestore.FieldValue;
}

export enum TouchpointIds {
  TouchpointDripWorkoutReminderWorkflow20230104 = 'TouchpointDripWorkoutReminderWorkflow20230104',
  OnboardingModal20221026 = 'OnboardingModal20221026',
}

export enum TouchpointChannels {
  Email = 'email',
  TelegramApp = 'telegramApp',
}

export interface Touchpoint {
  id: TouchpointIds;
  channel: TouchpointChannels;
  createdAt: FirebaseFirestore.Timestamp;
}

export interface TouchpointOnboardingModal20221026 extends Touchpoint {
  id: TouchpointIds.OnboardingModal20221026;
  channel: TouchpointChannels.Email;
}

export interface TouchpointDripWorkoutReminderWorkflow20230104 extends Touchpoint {
  id: TouchpointIds.TouchpointDripWorkoutReminderWorkflow20230104;
  channel: TouchpointChannels.TelegramApp;
}

export interface User {
  [UserKeys.Id]?: string;
  [UserKeys.AirtableId]?: string;
  [UserKeys.StreakCount]?: number | FirebaseFirestore.FieldValue;
  [UserKeys.LastStreakActivityAt]?: FirebaseFirestore.Timestamp;
  [UserKeys.UscreenUserId]?: string;
  [UserKeys.UscreenEmail]?: string;
  [UserKeys.UscreenNickname]?: string;
  [UserKeys.UscreenName]?: string;
  [UserKeys.UscreenCountry]?: string;
  [UserKeys.AllowsDailyNotification]?: boolean;
  [UserKeys.DailyNotificationMinute]?: number;
  [UserKeys.TelegramLinkKey]?: string;
  [UserKeys.TelegramId]?: string;
  [UserKeys.TelegramFirstName]?: string;
  [UserKeys.TelegramLastName]?: string;
  [UserKeys.Timezone]?: string;
  [UserKeys.Module]?: UserModule;
  [UserKeys.JoinedMembersGroupAt]?: FirebaseFirestore.Timestamp;
  [UserKeys.LastTickAt]?: FirebaseFirestore.Timestamp;
  [UserKeys.DailyItemId]?: string;
  [UserKeys.IsActive]?: boolean;
  [UserKeys.Stats]?: Stats,
  [UserKeys.TelegramSmallGroupId]?: string;
  [UserKeys.TelegramSmallGroupUrl]?: string;
  [UserKeys.Phone]?: string;
  [UserKeys.RegisteredForSquadAt]?: FirebaseFirestore.Timestamp;
  [UserKeys.StartAt]?: FirebaseFirestore.Timestamp;
  [UserKeys.CreatedAt]?: FirebaseFirestore.Timestamp;
  [UserKeys.ReferralCode]?: string;
  [UserKeys.AppState]?: AppState;
  [UserKeys.Uid]?: string;
  [UserKeys.LastDailyNotification]?: {
    moduleId: string;
    moduleItemId: string;
    firstSentAt: FirebaseFirestore.Timestamp;
  };
}
