import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useCallback } from "react";
import { FlatList, View } from "react-native";
import MainListItem from "../../components/MainListItem/MainListItem";
import { ItemType, MainItem } from "../../model/MainItem";
import { RootStackParamList } from "../../navigation/RootNavigator";
import { mainItems } from "../../utils/DataUtils";
import { styles } from "./HomeScreen.styles";

type RootNavProps = NativeStackNavigationProp<RootStackParamList>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<RootNavProps>();

  const onPressItem = useCallback(
    (type: ItemType) => {
      switch (type) {
        case "overview":
          navigation.navigate("Overview");
          break;
        case "pan-gesture":
          navigation.navigate("PanGesture");
          break;
        case "transition":
          navigation.navigate("Transition");
          break;
        case "card":
          navigation.navigate("Card");
          break;
        case "drag-card":
          navigation.navigate("DragCard");
          break;
        case "transition-new":
          navigation.navigate("TransitionNew");
          break;
        case "hoc":
          navigation.navigate("HigherOrder");
          break;
        case "circle-progress":
          navigation.navigate("CircleProgress");
          break;
        default:
          navigation.navigate("Home");
          break;
      }
    },
    [navigation],
  );

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={mainItems}
        renderItem={({ item }) => (
          <MainListItem
            item={item}
            onPress={() => {
              onPressItem(item.type);
            }}
          />
        )}
        keyExtractor={(item: MainItem, index: number) => `${index}_${item.type}`}
      />
    </View>
  );
};

export default HomeScreen;
