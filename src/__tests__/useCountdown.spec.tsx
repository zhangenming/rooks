/**
 * @jest-environment jsdom
 */
import { act, renderHook, cleanup } from "@testing-library/react-hooks";
import { useCountdown } from "../hooks/useCountdown";

jest.useFakeTimers("modern");
jest.spyOn(global, "clearInterval");

const advanceTimersInsideAct = (time: number) => {
  act(() => {
    jest.advanceTimersByTime(time);
  });
};

describe("useCountdown", () => {
  it("is defined", () => {
    expect(useCountdown).toBeDefined();
  });
  describe("works with default interval of 1_000 ms", () => {
    const now = Date.now();

    afterEach(() => {
      void cleanup();
      jest.resetAllMocks();
      jest.clearAllTimers();
    });

    it("should run interval and clear it after unmount", () => {
      const testStartDateNow = Date.now();
      const endTime = new Date(testStartDateNow + 3_000);
      const onDown = jest.fn();
      const { result, unmount } = renderHook(() =>
        useCountdown(endTime, {
          onDown,
        })
      );

      expect(result.current).toBe(3);
      expect(onDown).toHaveBeenCalledTimes(0);

      advanceTimersInsideAct(1_000);
      expect(result.current).toBe(2);

      unmount();

      expect(clearInterval).toHaveBeenCalledTimes(1);
    });

    it("should call onDown after every interval", () => {
      const endTime = new Date(now + 3_000);
      const onDown = jest.fn();

      renderHook(() => useCountdown(endTime, { onDown }));

      expect(onDown).toHaveBeenCalledTimes(0);
      advanceTimersInsideAct(1_000);
      expect(onDown).toHaveBeenCalledTimes(1);
      advanceTimersInsideAct(1_000);
      expect(onDown).toHaveBeenCalledTimes(2);
      advanceTimersInsideAct(1_000);
      expect(onDown).toHaveBeenCalledTimes(3);
      advanceTimersInsideAct(1_000);
      expect(onDown).toHaveBeenCalledTimes(3);
    });

    it("should call onEnd after it ends", () => {
      const endTime = new Date(now + 3_000);
      const onEnd = jest.fn();
      renderHook(() => useCountdown(endTime, { onEnd }));
      expect(onEnd).toHaveBeenCalledTimes(0);
      advanceTimersInsideAct(2_000);
      expect(onEnd).toHaveBeenCalledTimes(0);
      advanceTimersInsideAct(2_000);
      expect(onEnd).toHaveBeenCalledTimes(1);
      expect(clearInterval).toHaveBeenCalledTimes(1);
    });
  });

  describe("works with default interval of 5_000 ms", () => {
    const now = Date.now();
    const intervalDuration = 5_000;
    afterEach(() => {
      void cleanup();
      jest.resetAllMocks();
      jest.clearAllTimers();
    });

    it("should run interval and clear it after unmount", () => {
      const testStartDateNow = Date.now();
      const endTime = new Date(testStartDateNow + intervalDuration * 3);
      const onDown = jest.fn();
      const { result, unmount } = renderHook(() =>
        useCountdown(endTime, {
          interval: intervalDuration,
          onDown,
        })
      );

      expect(result.current).toBe(3);
      expect(onDown).toHaveBeenCalledTimes(0);

      advanceTimersInsideAct(intervalDuration);
      expect(result.current).toBe(2);

      unmount();

      expect(clearInterval).toHaveBeenCalledTimes(1);
    });

    it("should call onDown after every interval", () => {
      const endTime = new Date(now + intervalDuration * 3);
      const onDown = jest.fn();

      renderHook(() =>
        useCountdown(endTime, { interval: intervalDuration, onDown })
      );

      expect(onDown).toHaveBeenCalledTimes(0);
      advanceTimersInsideAct(intervalDuration);
      expect(onDown).toHaveBeenCalledTimes(1);
      advanceTimersInsideAct(intervalDuration);
      expect(onDown).toHaveBeenCalledTimes(2);
      advanceTimersInsideAct(intervalDuration);
      expect(onDown).toHaveBeenCalledTimes(3);
      advanceTimersInsideAct(intervalDuration);
      expect(onDown).toHaveBeenCalledTimes(3);
    });

    it("should call onEnd after it ends", () => {
      const endTime = new Date(now + intervalDuration * 3);
      const onEnd = jest.fn();
      renderHook(() =>
        useCountdown(endTime, { interval: intervalDuration, onEnd })
      );
      expect(onEnd).toHaveBeenCalledTimes(0);
      advanceTimersInsideAct(intervalDuration * 2);
      expect(onEnd).toHaveBeenCalledTimes(0);
      advanceTimersInsideAct(intervalDuration * 2);
      expect(onEnd).toHaveBeenCalledTimes(1);
      expect(clearInterval).toHaveBeenCalledTimes(1);
    });
  });

  describe("works with default interval of 1_000 ms in startImmediate mode", () => {
    const now = Date.now();

    afterEach(() => {
      void cleanup();
      jest.resetAllMocks();
      jest.clearAllTimers();
    });

    it("should run interval and clear it after unmount", () => {
      const testStartDateNow = Date.now();
      const endTime = new Date(testStartDateNow + 3_000);
      const onDown = jest.fn();
      const { result, unmount } = renderHook(() =>
        useCountdown(endTime, {
          onDown,
          startImmediate: true,
        })
      );

      expect(result.current).toBe(3);
      expect(onDown).toHaveBeenCalledTimes(1);
      act(() => {
        jest.runOnlyPendingTimers();
      });
      expect(result.current).toBe(2);
      advanceTimersInsideAct(1_000);
      expect(result.current).toBe(1);

      unmount();

      expect(clearInterval).toHaveBeenCalledTimes(1);
    });

    it("should call onDown after every interval", () => {
      const endTime = new Date(now + 3_000);
      const onDown = jest.fn();

      renderHook(() => useCountdown(endTime, { onDown, startImmediate: true }));
      expect(onDown).toHaveBeenCalledTimes(1);
      advanceTimersInsideAct(1_000);
      expect(onDown).toHaveBeenCalledTimes(2);
      advanceTimersInsideAct(1_000);
      expect(onDown).toHaveBeenCalledTimes(3);
      advanceTimersInsideAct(1_000);
      expect(onDown).toHaveBeenCalledTimes(4);
      advanceTimersInsideAct(1_000);
      expect(onDown).toHaveBeenCalledTimes(4);
    });

    it("should call onEnd after it ends", () => {
      const endTime = new Date(now + 3_000);
      const onEnd = jest.fn();
      renderHook(() => useCountdown(endTime, { onEnd }));
      expect(onEnd).toHaveBeenCalledTimes(0);
      advanceTimersInsideAct(2_000);
      expect(onEnd).toHaveBeenCalledTimes(0);
      advanceTimersInsideAct(2_000);
      expect(onEnd).toHaveBeenCalledTimes(1);
      expect(clearInterval).toHaveBeenCalledTimes(1);
    });
  });

  describe("works with default interval of 5_000 ms in startImmediateMode", () => {
    const now = Date.now();
    const intervalDuration = 5_000;
    afterEach(() => {
      void cleanup();
      jest.resetAllMocks();
      jest.clearAllTimers();
    });

    it("should run interval and clear it after unmount", () => {
      const testStartDateNow = Date.now();
      const endTime = new Date(testStartDateNow + intervalDuration * 3);
      const onDown = jest.fn();
      const { result, unmount } = renderHook(() =>
        useCountdown(endTime, {
          interval: intervalDuration,
          onDown,
          startImmediate: true,
        })
      );

      expect(result.current).toBe(3);
      expect(onDown).toHaveBeenCalledTimes(1);
      expect(onDown).toHaveBeenCalledWith(15_000);
      act(() => {
        jest.runOnlyPendingTimers();
      });
      expect(result.current).toBe(2);
      advanceTimersInsideAct(intervalDuration);
      expect(result.current).toBe(1);

      unmount();

      expect(clearInterval).toHaveBeenCalledTimes(1);
    });

    it("should call onDown after every interval", () => {
      const endTime = new Date(now + intervalDuration * 3);
      const onDown = jest.fn();

      renderHook(() =>
        useCountdown(endTime, {
          interval: intervalDuration,
          onDown,
          startImmediate: true,
        })
      );

      expect(onDown).toHaveBeenCalledTimes(1);
      advanceTimersInsideAct(intervalDuration);
      expect(onDown).toHaveBeenCalledTimes(2);
      advanceTimersInsideAct(intervalDuration);
      expect(onDown).toHaveBeenCalledTimes(3);
      advanceTimersInsideAct(intervalDuration);
      expect(onDown).toHaveBeenCalledTimes(4);
      advanceTimersInsideAct(intervalDuration);
      expect(onDown).toHaveBeenCalledTimes(4);
    });

    it("should call onEnd after it ends", () => {
      const endTime = new Date(now + intervalDuration * 3);
      const onEnd = jest.fn();
      renderHook(() =>
        useCountdown(endTime, {
          interval: intervalDuration,
          onEnd,
          startImmediate: true,
        })
      );
      expect(onEnd).toHaveBeenCalledTimes(0);
      advanceTimersInsideAct(intervalDuration * 2);
      expect(onEnd).toHaveBeenCalledTimes(0);
      advanceTimersInsideAct(intervalDuration * 2);
      expect(onEnd).toHaveBeenCalledTimes(1);
      expect(clearInterval).toHaveBeenCalledTimes(1);
    });
  });
});
