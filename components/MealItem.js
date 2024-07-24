import {
  View,
  Pressable,
  Text,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

function MealItem({ title, imageUrl, duration, complexity, affordability }) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailsItem}>{duration} </Text>
            <Text style={styles.detailsItem}>{complexity.toUpperCase()} </Text>
            <Text style={styles.detailsItem}>
              {affordability.toUpperCase()}{" "}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}
export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "ios" ? "visible" : "hidden",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    margin: 8,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },

  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
