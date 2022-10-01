import * as FirebaseFirestore from '@firebase/firestore-types';
export declare enum MilestoneKeys {
    Id = "id",
    AchievedAt = "achievedAt",
    Category = "category",
    Name = "name",
    Description = "description",
    ImageUrl = "imageUrl",
    VideoUrl = "videoUrl"
}
export interface Milestone {
    [MilestoneKeys.Id]?: string;
    [MilestoneKeys.AchievedAt]?: FirebaseFirestore.Timestamp;
    [MilestoneKeys.Category]?: string;
    [MilestoneKeys.Name]: string;
    [MilestoneKeys.Description]?: string;
    [MilestoneKeys.ImageUrl]?: string;
    [MilestoneKeys.VideoUrl]?: string;
}
