export enum VideoKeys {
  Id = "id",
  Name = "name",
  Description = "description",
  UscreenId = "uscreenId",
  UscreenUrl = "uscreenUrl",
  Duration = "duration",
  Difficulty = "difficulty",
  Focus = "focus",
  Tags = "tags",
  Image = "image",
  Orientation = "orientation",
  CoachNote = "coachNote",
  OverlayImage = "overlayImage",
  ModuleItems = "moduleItems",
  MuxKey = "muxKey",
}

export interface Video {
  [VideoKeys.Id]?: string;
  [VideoKeys.Name]?: string;
  [VideoKeys.Description]?: string;
  [VideoKeys.Duration]?: number;
  [VideoKeys.UscreenId]?: string;
  [VideoKeys.UscreenUrl]?: string;
  [VideoKeys.Difficulty]?: string;
  [VideoKeys.Focus]?: string;
  [VideoKeys.Tags]?: string[];
  [VideoKeys.Orientation]?: string;
  [VideoKeys.CoachNote]?: string;
  [VideoKeys.MuxKey]?: string;
  [VideoKeys.ModuleItems]?: { moduleId: string; moduleItemId: string }[];
  [VideoKeys.Image]?: {
    url: string;
    filename: string;
    type: string;
    thumbnails: { [key: string]: { url: string } };
    width: number;
    height: number;
  };
  [VideoKeys.OverlayImage]?: {
    url: string;
    filename: string;
    type: string;
    thumbnails: { [key: string]: { url: string } };
    width: number;
    height: number;
  };
}
