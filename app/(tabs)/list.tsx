import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
} from 'react-native';
import { View } from '../../components/Themed';
import { useState } from 'react';
import GoalItem from '../../components/GoalItem';
import GoalInput from '../../components/GoalInput';

type GoalItem = {
  text: string;
  key: number;
};

export default function TabListScreen() {
  const [goals, setGoals] = useState<GoalItem[]>([]);

  const addGoalHandler = (enteredGoal: string) => {
    setGoals((goals) => [{ text: enteredGoal, key: Math.random() }, ...goals]);
  };
  
  const toGoalItem = (itemData: ListRenderItemInfo<GoalItem>) => (
    <GoalItem data={itemData} title={itemData.item?.text} />
  )

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.containerGoalList}>
        <FlatList
          keyExtractor={(item, index) => item.key.toString()}
          alwaysBounceVertical={false}
          data={goals}
          renderItem={toGoalItem}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  containerGoalList: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    gap: 5,
  },
});
