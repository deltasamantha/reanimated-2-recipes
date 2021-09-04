import React from "react";
import { TouchableOpacity } from "react-native";
import { MainItem } from "../../model/MainItem";
import AppText from "../AppText/AppText";
import { styles } from "./MainListItem.styles";

interface Props {
  item: MainItem;
  onPress: () => void;
}

const MainListItem: React.FC<Props> = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.rootContainer}>
      <AppText size="m" weight="regular" type="secondary">
        {item.title}
      </AppText>
    </TouchableOpacity>
  );
};

export default MainListItem;
