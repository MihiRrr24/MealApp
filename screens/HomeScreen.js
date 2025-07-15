import { View, FlatList } from 'react-native';
import meals from '../data/meals';
import MealItem from '../components/MealItem';

const HomeScreen = ({ navigation }) => {
  const selectMeal = (meal) => {
    navigation.navigate('MealDetail', { meal });
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealItem meal={item} onSelect={() => selectMeal(item)} />
        )}
      />
    </View>
  );
};

export default HomeScreen;
