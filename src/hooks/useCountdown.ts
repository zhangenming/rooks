import { useCallback, useState } from "react";
import { useIntervalWhen } from "./useIntervalWhen";

type CountdownOptions = {
  interval?: number;
  onDown?: (remainingTimeInMilliseconds: number) => void;
  onEnd?: (dateWhenCountdownEnded: Date) => void;
  startImmediate?: boolean | undefined;
};

/**
 *
 * useCountdown
 * Easy way to countdown until a given endtime in intervals
 *
 * @param endTime Time to countdown
 * @param options  Countdown options
 * @returns intervalCountRemaining Number of countdowns remaining.
 */
function useCountdown(endTime: Date, options: CountdownOptions = {}): number {
  const { interval = 1_000, onDown, onEnd, startImmediate = false } = options;
  const [time, setTime] = useState<Date>(() => new Date());
  const remainingTimeInMilliseconds = endTime.getTime() - time.getTime();
  const countdownIntervalsRemaining =
    remainingTimeInMilliseconds > 0
      ? Math.ceil(remainingTimeInMilliseconds / Math.max(interval, 1))
      : 0;
  const isCountdownEnabled = Boolean(countdownIntervalsRemaining);

  const onTick = useCallback(() => {
    const newTime = new Date();
    if (newTime > endTime) {
      if (onEnd) {
        onEnd(newTime);
      }

      setTime(endTime);

      return;
    }

    if (onDown) {
      onDown(remainingTimeInMilliseconds);
    }

    setTime(newTime);
  }, [endTime, onDown, onEnd, remainingTimeInMilliseconds]);

  useIntervalWhen(onTick, interval, isCountdownEnabled, startImmediate);

  return countdownIntervalsRemaining;
}

export { useCountdown };
