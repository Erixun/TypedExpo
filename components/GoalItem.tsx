import { StyleSheet, Text, View } from "react-native";

const GoalItem = (props: any) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.data.item.text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#5e0acc',
    borderColor: 'black',
    borderWidth: 1,
  },
  goalText: {
    color: 'white',
  },
});

