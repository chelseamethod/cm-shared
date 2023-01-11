import * as FirebaseFirestore from "@firebase/firestore-types";
import { Video } from "./video";
export declare enum ModuleKeys {
    Id = "id",
    Name = "name",
    Description = "description",
    Steps = "steps",
    IsSelectable = "isSelectable",
    Duration = "duration",
    ShortName = "shortName",
    Image = "image",
    LongDescription = "longDescription",
    Tagline = "tagline",
    Instructors = "instructors",
    WelcomeMessage = "welcomeMessage",
    NextKickoffDate = "nextKickoffDate",
    LastStepId = "lastStepId"
}
export interface Module {
    [ModuleKeys.Id]?: string;
    [ModuleKeys.Name]: string;
    [ModuleKeys.Description]: string;
    [ModuleKeys.Steps]: number;
    [ModuleKeys.IsSelectable]: boolean;
    [ModuleKeys.Duration]: string;
    [ModuleKeys.ShortName]: string;
    [ModuleKeys.WelcomeMessage]: string;
    [ModuleKeys.Image]?: {
        url: string;
        thumbnails: {
            [key: string]: {
                url: string;
            };
        };
        width: number;
        height: number;
    };
    [ModuleKeys.LongDescription]: string;
    [ModuleKeys.Tagline]: string;
    [ModuleKeys.Instructors]: {
        name: string;
        avatarImage?: {
            url: string;
            thumbnails: {
                [key: string]: {
                    url: string;
                };
            };
            width: number;
            height: number;
        };
    }[];
    [ModuleKeys.NextKickoffDate]: FirebaseFirestore.Timestamp;
    [ModuleKeys.LastStepId]?: string;
}
export declare enum ModuleItemKeys {
    CoachNote = "coachNote",
    Id = "id",
    NotificationText = "notificationText",
    Post = "post",
    Step = "step",
    Title = "title",
    UscreenUrl = "uscreenUrl",
    Day = "day",
    Additional = "additional",
    Video = "video",
    IsLastStep = "isLastStep",
    ModuleShortName = "moduleShortName"
}
export interface ModuleItem {
    [ModuleItemKeys.CoachNote]?: string;
    [ModuleItemKeys.Id]?: string;
    [ModuleItemKeys.NotificationText]?: string;
    [ModuleItemKeys.Title]?: string;
    [ModuleItemKeys.UscreenUrl]?: string;
    [ModuleItemKeys.Step]?: number;
    [ModuleItemKeys.Day]?: string;
    [ModuleItemKeys.Post]?: string;
    [ModuleItemKeys.Additional]?: Video[];
    [ModuleItemKeys.Video]?: Video;
    [ModuleItemKeys.IsLastStep]?: boolean;
    [ModuleItemKeys.ModuleShortName]?: string;
}
