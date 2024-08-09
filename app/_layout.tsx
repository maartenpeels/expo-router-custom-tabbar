import {Stack} from 'expo-router';

const AppLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="modal" options={{presentation: 'modal'}}/>
    </Stack>
  );
}

export default AppLayout;
