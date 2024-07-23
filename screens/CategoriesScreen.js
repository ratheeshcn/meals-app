import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { StyleSheet } from "react-native";

function CategoriesScreen({ navigation }) {
  function renderedcategoryItem(itemData) {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  function pressHandler() {
    navigation.navigate("MealsOverview");
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderedcategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
