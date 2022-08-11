import { DateTime } from "luxon"

export enum STREAK_ACTION {
  INCREMENT = 'increment',
  NOOP = 'noop',
  RESET = 'reset',
}

export const getStreakActionOnActivity = function (activityAt: number, lastTime: number, zone: string, rolloverHour: number): STREAK_ACTION {
  const activityAtDateTime = DateTime.fromMillis(activityAt).setZone(zone).minus({ hours: rolloverHour });
  const lastStreakActivityAtDateTime = DateTime.fromMillis(lastTime).setZone(zone).minus({ hours: rolloverHour });
  
  if (activityAtDateTime.hasSame(lastStreakActivityAtDateTime, 'day')) {
    // same day as last streak activity
    return STREAK_ACTION.NOOP;
  } else if (activityAtDateTime.hasSame(lastStreakActivityAtDateTime.plus({ days: 1 }), 'day')) {
    // next day from last streak activity
    return STREAK_ACTION.INCREMENT;
  } else {
    return STREAK_ACTION.RESET;
  }
}

export const getStreakActionNow = function (now: number, lastTime: number, zone: string, rolloverHour: number): STREAK_ACTION {
  const nowDateTime = DateTime.fromMillis(now).setZone(zone).minus({ hours: rolloverHour });
  const lastStreakActivityAtDateTime = DateTime.fromMillis(lastTime).setZone(zone).minus({ hours: rolloverHour });

  if (nowDateTime.hasSame(lastStreakActivityAtDateTime, 'day')) {
    return STREAK_ACTION.NOOP;
  } else if (nowDateTime.diff(lastStreakActivityAtDateTime, 'days').days >= 1) {
    return STREAK_ACTION.RESET;
  } else {
    return STREAK_ACTION.NOOP;
  }
}