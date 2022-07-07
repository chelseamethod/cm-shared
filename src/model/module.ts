export enum ModuleKeys {
  Id = 'id',
  Name = 'name',
  Description = 'description',
  Steps = 'steps',
  IsSelectable = 'isSelectable',
  Duration = 'duration',
}

export interface Module {
  [ModuleKeys.Id]?: string;
  [ModuleKeys.Name]: string;
  [ModuleKeys.Description]: string;
  [ModuleKeys.Steps]: number;
  [ModuleKeys.IsSelectable]: boolean;
  [ModuleKeys.Duration]: string;
}

export enum ModuleItemKeys {
  CoachNote = 'coachNote',
  Id = 'id',
  NotificationText = 'notificationText',
  Post = 'post',
  Step = "step",
  Title = 'title',
  UscreenUrl = 'uscreenUrl',
  WorkoutImage = 'workoutImage',
  Day = 'day',
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
    thumbnails: { [key: string]: { url: string } }
  }
}
