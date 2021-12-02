import { useEffect } from "react";
import Animated, { useDerivedValue, useSharedValue, withSpring } from "react-native-reanimated";

export const useSpring = (state: number | boolean): Animated.SharedValue<number> => {
  const value = useSharedValue(0);

  useEffect(() => {
    value.value = typeof state === "number" ? state : state ? 1 : 0;
  }, [state, value]);
  return useDerivedValue(() => {
    return withSpring(value.value);
  }, []);
};
