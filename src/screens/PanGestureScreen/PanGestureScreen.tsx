import React from "react";
import { Dimensions, View } from "react-native";
import { PanGestureHandler, PanGestureHandlerGestureEvent } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from "react-native-reanimated";
import { clamp } from "react-native-redash";
import CardView from "../../components/CardView/CardView";
import { CARD_HEIGHT, CARD_WIDTH } from "../../components/CardView/CardView.styles";
import { Card } from "../../model/Card";
import { styles } from "./PanGestureScreen.style";

const PanGestureScreen: React.FC = () => {
  const card: Card = { number: "1239 1112 3110 2828" };

  const { width, height } = Dimensions.get("window");
  const boundX = width - CARD_WIDTH;
  const boundY = height - CARD_HEIGHT;

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {
      offsetX: number;
      offsetY: number;
    }
  >({
    onStart: (_, ctx) => {
      ctx.offsetX = translateX.value;
      ctx.offsetY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = clamp(ctx.offsetX + event.translationX, 0, boundX);
      translateY.value = clamp(ctx.offsetY + event.translationY, 0, boundY);
    },
    onEnd: (event) => {
      translateX.value = withDecay({ velocity: event.velocityX, clamp: [0, boundX] });
      translateY.value = withDecay({ velocity: event.velocityY, clamp: [0, boundY] });
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    <View style={styles.rootContainer}>
      <PanGestureHandler {...{ onGestureEvent }}>
        <Animated.View style={animatedStyle}>
          <CardView card={card} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default PanGestureScreen;
