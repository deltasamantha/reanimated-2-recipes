import React from "react";
import { View } from "react-native";
import Animated from "react-native-reanimated";
import Bubble from "../Bubble/Bubble";
import { styles } from "./ChatBubble.styles";

interface Props {
  progress: Animated.SharedValue<number>;
}

const ChatBubble: React.FC<Props> = ({ progress }: Props) => {
  const bubbles = [0, 1, 2];
  const delta = 1 / bubbles.length;
  return (
    <View style={styles.rootContainer}>
      {bubbles.map((i) => {
        const start = i * delta;
        const end = start + delta;
        return <Bubble key={i} {...{ start, end, progress }} />;
      })}
    </View>
  );
};

export default ChatBubble;
