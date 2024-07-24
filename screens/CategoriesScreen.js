import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { StyleSheet } from "react-native";

function CategoriesScreen({ navigation }) {
  function renderedcategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryID: itemData.item.id,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
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
