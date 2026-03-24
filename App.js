import React, { useEffect } from 'react';
import '@react-native-firebase/app';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeNavigator from './src/navigator/HomeNavigator';
import { requestNotificationPermission, getToken, listenForegroundNotifications } from './src/services/notifications/pushNotificationService';

export default function App() {

  useEffect(() => {
    requestNotificationPermission();
    getToken();
    // Stop listening when the app is closed to prevent memory leaks
    return listenForegroundNotifications();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


