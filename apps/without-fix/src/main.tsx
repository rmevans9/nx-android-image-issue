import { AppRegistry } from 'react-native';
import { TestImage } from '@android-issue/imagelib';

function App() {
  return <TestImage />;
}

AppRegistry.registerComponent('WithoutFix', () => App);
