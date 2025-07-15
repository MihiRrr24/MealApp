import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

const MealItem = ({ meal, onSelect }) => {
  return (
    <Pressable onPress={onSelect}>
      <View style={styles.card}>
        <Image source={{ uri: meal.imageUrl }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{meal.title}</Text>
          <Text style={styles.details}>{meal.duration}m | {meal.complexity}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    height: 200,
    width: '100%',
  },
  info: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  details: {
    fontSize: 14,
    color: 'gray',
  },
});

export default MealItem;
