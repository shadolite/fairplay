import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "./global.css"
import { KanbanBoard } from './components/ui/shadcn-io/kanban';

export default function App() {
  return (
    <View style={styles.container}>
      <KanbanBoard id="fairplay" children=""></KanbanBoard>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
