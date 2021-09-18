import React from "react";
import { View } from "react-native";
import { PanGestureHandler, PanGestureHandlerGestureEvent } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { clamp } from "react-native-redash";
import { styles } from "./DragCard.styles";

const SPRING_CONFIG = {
  damping: 80,
  overshootClamping: true,
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 0.1,
  stiffness: 500,
};

const DragCard: React.FC = () => {
  const translateY = useSharedValue(10);
  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {
      offsetX: number;
      offsetY: number;
    }
  >({
    onStart: (_, context) => {
      context.offsetY = translateY.value;
    },
    onActive: (event, context) => {
      translateY.value = clamp(context.offsetY + event.translationY, 10, 180);
    },
    onEnd: (event) => {
      if (event.translationY > 0) {
        if (event.translationY > 70) {
          translateY.value = withSpring(180, SPRING_CONFIG);
        } else {
          translateY.value = withSpring(10, SPRING_CONFIG);
        }
      } else {
        if (event.translationY < -70) {
          translateY.value = withSpring(10, SPRING_CONFIG);
        } else {
          translateY.value = withSpring(180, SPRING_CONFIG);
        }
      }
    },
  });

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <View style={styles.rootContainer}>
      <PanGestureHandler {...{ onGestureEvent }}>
        <Animated.View style={[style]}>
          <View style={styles.card}>
            <View style={[styles.dragHandle]} />
          </View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default DragCard;
