import * as FirebaseFirestore from '@firebase/firestore-types';
export declare enum MilestoneKeys {
    Id = "id",
    AchievedAt = "achievedAt",
    Category = "category",
    CategoryOrder = "categoryOrder",
    Name = "name",
    Description = "description",
    DescriptionAchieved = "descriptionAchieved",
    Image = "image",
    ImageAchieved = "imageAchieved",
    Video = "video",
    ShareVideo = "shareVideo",
    AnimatedImage = "animatedImage"
}
export interface Milestone {
    [MilestoneKeys.Id]?: string;
    [MilestoneKeys.AchievedAt]?: FirebaseFirestore.Timestamp;
    [MilestoneKeys.Category]?: string;
    [MilestoneKeys.CategoryOrder]?: number;
    [MilestoneKeys.Name]: string;
    [MilestoneKeys.Description]?: string;
    [MilestoneKeys.DescriptionAchieved]?: string;
    [MilestoneKeys.Image]?: {
        url: string;
        thumbnails: {
            [key: string]: {
                url: string;
            };
        };
        width: number;
        height: number;
    };
    [MilestoneKeys.ImageAchieved]?: {
        url: string;
        thumbnails: {
            [key: string]: {
                url: string;
            };
        };
        width: number;
        height: number;
    };
    [MilestoneKeys.Video]?: {
        url: string;
        filename: string;
        type: string;
        size: number;
    };
    [MilestoneKeys.ShareVideo]?: {
        url: string;
        filename: string;
        type: string;
        size: number;
    };
    [MilestoneKeys.AnimatedImage]?: {
        url: string;
        filename: string;
        size: number;
        type: string;
        width: number;
        height: number;
    };
}
export declare enum MilestoneCategory {
    WorkoutCount = "Workout Count",
    Streaks = "Streaks",
    ChallengeFoundations = "Foundations Challenge"
}
