import { Pressable, StyleSheet, Text, View } from 'react-native';

const GoalItem = (props: any) => {
  const deleteGoal = () => props.onDelete(props.id);

  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={deleteGoal}
        style={({ pressed }) => pressed && styles.pressedItem}
        android_ripple={{ color: 'darkgrey' }}
      >
        <Text style={styles.goalText}>{props.data.item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 5,
    backgroundColor: '#5e0acc',
    borderColor: 'black',
    borderWidth: 1,
  },
  goalText: {
    padding: 10,
    color: 'white',
  },
  pressedItem: {
    backgroundColor: '#5e9acc',
    opacity: 0.5,
  },
});
