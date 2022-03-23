import type { ChangeEvent } from "react";
import { useState, useEffect, useCallback } from "react";

type InputChangeEvent = ChangeEvent<HTMLInputElement>;

type InputHandler = {
  /**
   * Function to handle onChange of an input element
   *
   * @param event The input change event
   */
  onChange: (event: InputChangeEvent) => void;

  /**
   * The current value of the input
   */
  value: string;
};

type Options = {
  /**
   * validate
   *
   * Validator function which can be used to prevent updates
   *
   * @param {string} New value
   * @param {string} Current value
   * @returns {boolean} Whether an update should happen or not
   */
  validate?: (newValue: string, currentValue: string) => boolean;
};

const defaultOptions: Options = {};

/**
 *
 * useInput Hook
 *
 * Handles an input's value and onChange props internally to
 * make text input creation process easier
 *
 * @param {any} [initialValue] Initial value of the input
 * @param {Options} [opts] Options object
 * @returns {InputHandler} Input handler with value and onChange
 */
function useInput(
  initialValue: string = "",
  options: Options = defaultOptions
): InputHandler {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(
    (event: InputChangeEvent) => {
      const newValue = event.target.value;
      let shouldUpdate = true;
      if (typeof options.validate === "function") {
        shouldUpdate = options.validate(newValue, value);
      }

      if (shouldUpdate) {
        setValue(newValue);
      }
    },
    [options, value]
  );

  // sync with default value
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handler: InputHandler = {
    onChange,
    value,
  };

  return handler;
}

export { useInput };
