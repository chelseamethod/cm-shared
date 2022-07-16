import { Video } from "./video";

export enum ModuleKeys {
  Id = 'id',
  Name = 'name',
  Description = 'description',
  Steps = 'steps',
  IsSelectable = 'isSelectable',
  Duration = 'duration',
  ShortName = 'shortName',
  Image = 'image',
}

export interface Module {
  [ModuleKeys.Id]?: string;
  [ModuleKeys.Name]: string;
  [ModuleKeys.Description]: string;
  [ModuleKeys.Steps]: number;
  [ModuleKeys.IsSelectable]: boolean;
  [ModuleKeys.Duration]: string;
  [ModuleKeys.ShortName]: string;
  [ModuleKeys.Image]?: {
    url: string;
    thumbnails: { [key: string]: { url: string } }
    width: number;
    height: number;
  },
}

export enum ModuleItemKeys {
  CoachNote = 'coachNote',
  Id = 'id',
  NotificationText = 'notificationText',
  Post = 'post',
  Step = "step",
  Title = 'title',
  UscreenUrl = 'uscreenUrl',
  Day = 'day',
  Additional = 'additional',
  Video = 'video',
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
  [ModuleItemKeys.Video]?: Video
}
