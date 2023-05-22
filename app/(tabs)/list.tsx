import { Button, FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';
import { View } from '../../components/Themed';
import { useState } from 'react';
import GoalItem from '../../components/GoalItem';
import GoalInput from '../../components/GoalInput';

type GoalItem = {
  text: string;
  id: number;
};

export default function TabListScreen() {
  const [canShowModal, setIsVisible] = useState<boolean>(false);
  const [goals, setGoals] = useState<GoalItem[]>([]);

  const showModal = () => setIsVisible(true);

  const addGoalHandler = (enteredGoal: string) => {
    setGoals((goals) => [{ text: enteredGoal, id: Math.random() }, ...goals]);
    closeModal();
  };

  const closeModal = () => setIsVisible(false);

  const toGoalItem = (itemData: ListRenderItemInfo<GoalItem>) => (
    <GoalItem
      data={itemData}
      id={itemData.item.id}
      onDelete={deleteGoalHandler}
      title={itemData.item?.text}
    />
  );

  const deleteGoalHandler = (goalKey: number) => {
    setGoals((goals) => goals.filter((goal) => goal.id !== goalKey));
  };

  return (
    <View style={styles.container}>
      <Button color={'#5e0acc'} title="Add New Goal" onPress={showModal} />
      <GoalInput
        onAddGoal={addGoalHandler}
        onCancel={closeModal}
        isVisible={canShowModal}
      />
      <View style={styles.containerGoalList}>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
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
