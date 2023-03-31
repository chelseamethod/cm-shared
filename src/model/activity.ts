import *  as FirebaseFirestore from '@firebase/firestore-types';
import { Video } from './video';

export enum ActivityKeys {
  ActivityAt = 'activityAt',
  CreatedAt = 'createdAt',
  Type = 'type',
  Video = 'video',
  Actor = 'actor',
  Verb = 'verb',
  Object = 'object',
  To = 'to',
}

export interface Activity {
  [ActivityKeys.ActivityAt]: FirebaseFirestore.Timestamp;
  [ActivityKeys.CreatedAt]: FirebaseFirestore.Timestamp;
  [ActivityKeys.Type]: "watchedVideo" | "canceledSubscription";
  [ActivityKeys.Video]?: Video;
  
  [ActivityKeys.Actor]: string;
  [ActivityKeys.Verb]: "watched";
  [ActivityKeys.Object]: string;
}