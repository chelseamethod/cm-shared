import *  as FirebaseFirestore from '@firebase/firestore-types';

export enum ActivityKeys {
  ActivityAt = 'activityAt',
  CreatedAt = 'createdAt',
  Type = 'type',
  VideoId = 'videoId',
}

export interface Activity {
  [ActivityKeys.ActivityAt]: FirebaseFirestore.Timestamp;
  [ActivityKeys.CreatedAt]: FirebaseFirestore.Timestamp;
  [ActivityKeys.Type]: "watchedVideo" | "canceledSubscription";
  [ActivityKeys.VideoId]?: string;
}