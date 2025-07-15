import { View, Text, Image, StyleSheet } from 'react-native';

const MealDetailScreen = ({ route }) => {
  const { meal } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal.title}</Text>
      <Text style={styles.details}>Duration: {meal.duration} mins</Text>
      <Text style={styles.details}>Complexity: {meal.complexity}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, alignItems: 'center' },
  image: { width: '100%', height: 200, borderRadius: 10 },
  title: { fontSize: 22, fontWeight: 'bold', marginTop: 10 },
  details: { marginTop: 5, fontSize: 16, color: 'gray' },
});

export default MealDetailScreen;
