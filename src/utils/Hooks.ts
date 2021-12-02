import { useEffect } from "react";
import Animated, {
  defineAnimation,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { PhysicsAnimationState } from "react-native-redash";

export const useSpring = (state: number | boolean): Animated.SharedValue<number> => {
  const value = useSharedValue(0);

  useEffect(() => {
    value.value = typeof state === "number" ? state : state ? 1 : 0;
  }, [state, value]);
  return useDerivedValue(() => {
    return withSpring(value.value);
  }, []);
};

// interface DecayAnimationState extends PhysicsAnimationState {
//   lastTimeStamp: number;
// }

// const withDecay = (initialVelocity: number) => {
//   "worklet";
//   return defineAnimation<DecayAnimationState>(() => {
//     const animation = (state: DecayAnimationState, now: number) => {
//       return true;
//     };
//     const start = (state: DecayAnimationState, currant: number, now: number) => {
//       state.current = currant;
//       state.velocity = initialVelocity;
//       state.lastTimeStamp = now;
//     };
//     return {
//       animation,
//       start,
//     };
//   });
// };
