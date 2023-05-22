import { useState } from 'react';
import {
  Button,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
  View,
  Modal,
} from 'react-native';

const GoalInput = ({ onAddGoal, onCancel, isVisible }: GoalInputProps) => {
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
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.addGoalContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add Goal"
          value={enteredGoal}
          onChange={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={onCancel} />
          </View>
          <View  style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

type GoalInputProps = {
  onAddGoal: (enteredGoal: string) => void;
  onCancel?: () => void;
  isVisible: boolean;
};

const styles = StyleSheet.create({
  addGoalContainer: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 24,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
  },
  textInput: {
    height: 40,
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    justifyItems: "center",
    gap: 10,
    padding: 10,
  },
  button: {
    width: 100,
  }
});
