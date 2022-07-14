import { Video } from "./video";
export declare enum ModuleKeys {
    Id = "id",
    Name = "name",
    Description = "description",
    Steps = "steps",
    IsSelectable = "isSelectable",
    Duration = "duration"
}
export interface Module {
    [ModuleKeys.Id]?: string;
    [ModuleKeys.Name]: string;
    [ModuleKeys.Description]: string;
    [ModuleKeys.Steps]: number;
    [ModuleKeys.IsSelectable]: boolean;
    [ModuleKeys.Duration]: string;
}
export declare enum ModuleItemKeys {
    CoachNote = "coachNote",
    Id = "id",
    NotificationText = "notificationText",
    Post = "post",
    Step = "step",
    Title = "title",
    UscreenUrl = "uscreenUrl",
    WorkoutImage = "workoutImage",
    Day = "day",
    Additional = "additional"
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
    [ModuleItemKeys.WorkoutImage]?: {
        url: string;
        thumbnails: {
            [key: string]: {
                url: string;
            };
        };
    };
    [ModuleItemKeys.Additional]?: Video[];
}
