import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList/MealList";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
  const favMealsContext = useContext(FavoritesContext);
  const favMeals = MEALS.filter((meal) =>
    favMealsContext.ids.includes(meal.id)
  );

  if (favMeals.length === 0) {
    return (
      <View>
        <Text>You have no favorite meals yet.</Text>
      </View>
    );
  }
  return <MealList items={favMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
