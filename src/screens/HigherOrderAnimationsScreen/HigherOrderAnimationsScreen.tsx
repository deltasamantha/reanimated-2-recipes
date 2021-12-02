import React, { useCallback, useEffect } from "react";
import { View } from "react-native";
import {
  Easing,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import Button from "../../components/Button/Button";
import ChatBubble from "../../components/ChatBubble/ChatBubble";
import { styles } from "./HigherOrderAnimationsScreen.styles";

const HigherOrderAnimationsScreen: React.FC = () => {
  const paused = useSharedValue<boolean>(true);
  const neeet = useSharedValue(0);
  const progress = useDerivedValue(() => {
    return withRepeat(withTiming(1), -1, true);
  }, []);

  useEffect(() => {
    neeet.value = withRepeat(withTiming(1, { duration: 1000, easing: Easing.circle }), -1, true);
  }, [neeet]);

  const pauseAnimationHandler = useCallback(() => {
    paused.value = !paused.value;
  }, [paused]);

  return (
    <>
      <View style={styles.rootContainer}>
        <ChatBubble progress={neeet} />
      </View>
      <Button title={"Pause"} onPress={pauseAnimationHandler} />
    </>
  );
};

export default HigherOrderAnimationsScreen;
