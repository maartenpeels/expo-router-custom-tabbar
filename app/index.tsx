import {Link} from 'expo-router';
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";

const IndexScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.button}>
        <Link href="/modal/tab1">
          <Text style={styles.buttonText}>Open Tab 1</Text>
        </Link>
      </TouchableHighlight>


      <TouchableHighlight style={styles.button}>
        <Link href="/modal/tab2">
          <Text style={styles.buttonText}>Open Tab 2</Text>
        </Link>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    margin: 10,
    backgroundColor: '#818181',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
export default IndexScreen;
