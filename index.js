/**
 * @format
 */
//import a library to help create a component
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//render to the device

AppRegistry.registerComponent(appName, () => App);
