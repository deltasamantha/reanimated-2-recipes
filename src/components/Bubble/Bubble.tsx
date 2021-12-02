import React from "react";
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from "react-native-reanimated";
import { styles } from "./Bubble.styles";

interface Props {
  progress: Animated.SharedValue<number>;
  start: number;
  end: number;
}

const Bubble: React.FC<Props> = ({ progress, start, end }: Props) => {
  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(progress.value, [start, end], [0.5, 1], Extrapolate.CLAMP);
    const scale = interpolate(progress.value, [start, end], [1, 1.5], Extrapolate.CLAMP);
    return { opacity, transform: [{ scale }] };
  });
  return <Animated.View style={[styles.rootContainer, animatedStyle]} />;
};

export default Bubble;
