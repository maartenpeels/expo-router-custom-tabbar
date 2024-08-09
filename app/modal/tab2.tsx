import {StatusBar} from 'expo-status-bar';
import {Platform, StyleSheet, Text, View} from 'react-native';

const Tab2Screen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab 2</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Tab2Screen;
