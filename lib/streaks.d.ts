export declare enum STREAK_ACTION {
    INCREMENT = "increment",
    NOOP = "noop",
    RESET = "reset"
}
export declare const getStreakActionOnActivity: (activityAt: number, lastTime: number, zone: string, rolloverHour: number) => STREAK_ACTION;
export declare const getStreakActionNow: (now: number, lastTime: number, zone: string, rolloverHour: number) => STREAK_ACTION;
