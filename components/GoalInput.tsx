import { useState } from 'react';
import {
  Button,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';

const GoalInput = ({ onAddGoal }: GoalInputProps) => {
  const [enteredGoal, setEnteredGoal] = useState<string>('');
  const goalInputHandler = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setEnteredGoal(e.nativeEvent.text);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <View style={styles.containerAddGoal}>
      <TextInput
        style={styles.inputGoal}
        placeholder="Add Goal"
        value={enteredGoal}
        onChange={goalInputHandler}
      />
      <Button title="Add" onPress={addGoalHandler} />
    </View>
  );
};

export default GoalInput;

type GoalInputProps = {
  onAddGoal: (enteredGoal: string) => void;
};

const styles = StyleSheet.create({
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
});
