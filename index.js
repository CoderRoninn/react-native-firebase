import { registerRootComponent } from 'expo';

import App from './App';
import { listenBackgroundNotifications } from './src/services/notifications/pushNotificationService';

// Initialize the background listener as early as possible (Headless JS)
listenBackgroundNotifications();

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
