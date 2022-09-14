"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStreakActionNow = exports.getStreakActionOnActivity = exports.STREAK_ACTION = void 0;
const luxon_1 = require("luxon");
var STREAK_ACTION;
(function (STREAK_ACTION) {
    STREAK_ACTION["INCREMENT"] = "increment";
    STREAK_ACTION["NOOP"] = "noop";
    STREAK_ACTION["RESET"] = "reset";
})(STREAK_ACTION = exports.STREAK_ACTION || (exports.STREAK_ACTION = {}));
const getStreakActionOnActivity = function (activityAt, lastTime, zone, rolloverHour) {
    const activityAtDateTime = luxon_1.DateTime.fromMillis(activityAt).setZone(zone).minus({ hours: rolloverHour });
    const lastStreakActivityAtDateTime = luxon_1.DateTime.fromMillis(lastTime).setZone(zone).minus({ hours: rolloverHour });
    if (activityAtDateTime.hasSame(lastStreakActivityAtDateTime, 'day')) {
        // same day as last streak activity
        return STREAK_ACTION.NOOP;
    }
    else if (activityAtDateTime.hasSame(lastStreakActivityAtDateTime.plus({ days: 1 }), 'day')) {
        // next day from last streak activity
        return STREAK_ACTION.INCREMENT;
    }
    else {
        return STREAK_ACTION.RESET;
    }
};
exports.getStreakActionOnActivity = getStreakActionOnActivity;
const getStreakActionNow = function (now, lastTime, zone, rolloverHour) {
    const nowDateTime = luxon_1.DateTime.fromMillis(now).setZone(zone).minus({ hours: rolloverHour });
    const lastStreakActivityAtDateTime = luxon_1.DateTime.fromMillis(lastTime).setZone(zone).minus({ hours: rolloverHour });
    // console.log('now: ', nowDateTime.toISO(), 'last activity ', lastStreakActivityAtDateTime.toISO());
    // console.log('is same day as last activity', lastStreakActivityAtDateTime.hasSame(nowDateTime, 'day'));
    // console.log('is next day from last activity', lastStreakActivityAtDateTime.plus({ days: 1 }).hasSame(nowDateTime, 'day'));
    // console.log(!lastStreakActivityAtDateTime.hasSame(nowDateTime, 'day') && !lastStreakActivityAtDateTime.plus({ days: 1 }).hasSame(nowDateTime, 'day'));
    if (!lastStreakActivityAtDateTime.hasSame(nowDateTime, 'day') &&
        !lastStreakActivityAtDateTime.plus({ days: 1 }).hasSame(nowDateTime, 'day')) {
        return STREAK_ACTION.RESET;
    }
    else {
        return STREAK_ACTION.NOOP;
    }
};
exports.getStreakActionNow = getStreakActionNow;
//# sourceMappingURL=streaks.js.map