import *  as FirebaseFirestore from '@firebase/firestore-types';

export enum MilestoneKeys {
  Id = 'id',
  AchievedAt = 'achievedAt',
  Category = 'category',
  CategoryOrder = 'categoryOrder',
  Name = 'name',
  Description = 'description',
  DescriptionAchieved = 'descriptionAchieved',
  ImageUrl = 'imageUrl',
  ImageAchievedUrl = 'imageAchievedUrl',
  VideoUrl = 'videoUrl',
  ShareVideoUrl = 'shareVideoUrl',
}

export interface Milestone {
  [MilestoneKeys.Id]?: string;
  [MilestoneKeys.AchievedAt]?: FirebaseFirestore.Timestamp;
  [MilestoneKeys.Category]?: string;
  [MilestoneKeys.CategoryOrder]?: number;
  [MilestoneKeys.Name]: string;
  [MilestoneKeys.Description]?: string;
  [MilestoneKeys.DescriptionAchieved]?: string;
  [MilestoneKeys.ImageUrl]?: string;
  [MilestoneKeys.ImageAchievedUrl]?: string;
  [MilestoneKeys.VideoUrl]?: string;
  [MilestoneKeys.ShareVideoUrl]?: string;
}