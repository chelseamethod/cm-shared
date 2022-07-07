export declare enum VideoKeys {
    Id = "id",
    Name = "name",
    Description = "description",
    UscreenId = "uscreenId",
    UscreenUrl = "uscreenUrl",
    Duration = "duration",
    Difficulty = "difficulty",
    Focus = "focus",
    Tags = "tags"
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
}
