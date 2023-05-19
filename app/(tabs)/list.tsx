import {
  Button,
  FlatList,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
} from 'react-native';
import { View, Text } from '../../components/Themed';
import { useState } from 'react';

export default function TabListScreen() {
  const [enteredGoal, setEnteredGoal] = useState<string>('');
  const [goals, setGoals] = useState<{ text: string; key: number }[]>([]);

  const goalInputHandler = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setEnteredGoal(e.nativeEvent.text);
  };

  const addGoalHandler = () => {
    setGoals((goals) => [{ text: enteredGoal, key: Math.random() }, ...goals]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerAddGoal}>
        <TextInput
          style={styles.inputGoal}
          placeholder="Add Goal"
          value={enteredGoal}
          onChange={goalInputHandler}
        />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <View style={styles.containerGoalList}>
        <FlatList
          keyExtractor={(item, index) => item.key.toString()}
          alwaysBounceVertical={false}
          data={goals}
          renderItem={(itemData) => (
            <Text style={styles.goalListItem}>{itemData.item?.text}</Text>
          )}
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
  containerAddGoal: {
    flex: 0,
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
  },
  inputGoal: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  containerGoalList: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    gap: 5,
  },
  goalListItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'darkgreen',
    color: 'white',
    borderRadius: 4,
  },
});
