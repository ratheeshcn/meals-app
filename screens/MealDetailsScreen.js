import { Text, View, Image, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

function MealDetailsScreen({ route }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailsText}
      />
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Ingredients</Text>
      </View>

      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}

      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Steps</Text>
      </View>

      {selectedMeal.steps.map((steps) => (
        <Text key={steps}>{steps}</Text>
      ))}
    </View>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },

  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailsText: {
    color: "white",
  },

  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
  },

  subTitleContainer: {
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 24,
    textAlign: "center",
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
