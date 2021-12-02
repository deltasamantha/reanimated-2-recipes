import React, { useCallback, useEffect } from "react";
import { View } from "react-native";
import { Easing, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";
import { withPause } from "react-native-redash";
import Button from "../../components/Button/Button";
import ChatBubble from "../../components/ChatBubble/ChatBubble";
import { styles } from "./HigherOrderAnimationsScreen.styles";

const HigherOrderAnimationsScreen: React.FC = () => {
  const paused = useSharedValue<boolean>(false);
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withPause(
      withRepeat(withTiming(1, { duration: 1000, easing: Easing.circle }), -1, true),
      paused,
    );
  }, [paused, progress]);

  const pauseAnimationHandler = useCallback(() => {
    paused.value = !paused.value;
  }, [paused]);

  return (
    <>
      <View style={styles.rootContainer}>
        <ChatBubble progress={progress} />
      </View>
      <Button title={"Pause"} onPress={pauseAnimationHandler} />
    </>
  );
};

export default HigherOrderAnimationsScreen;
