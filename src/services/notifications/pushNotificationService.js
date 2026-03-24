import { getApp } from '@react-native-firebase/app';
import {
    getMessaging,
    getToken as getMessagingToken,
    onMessage,
    setBackgroundMessageHandler,
    requestPermission,
    AuthorizationStatus,
} from '@react-native-firebase/messaging';

const messagingInstance = getMessaging(getApp());

/**
 * Requests notification permission from the user
 */
export const requestNotificationPermission = async () => {
    const authStatus = await requestPermission(messagingInstance);

    const isGranted =
        authStatus === AuthorizationStatus.AUTHORIZED ||  // user fully approved notifications
        authStatus === AuthorizationStatus.PROVISIONAL;   // iOS only: notifications allowed silently (no sound/banner)

    console.log('Notification permission:', isGranted ? 'Granted' : 'Denied');
    return isGranted;
};

/**
 * Gets the FCM token for this device
 */
export const getToken = async () => {
    const token = await getMessagingToken(messagingInstance);
    console.log('FCM Token:', token);
    return token;
};

/**
 * Listens for notifications while the app is in the foreground
 */
export const listenForegroundNotifications = () => {
    const unsubscribe = onMessage(messagingInstance, async remoteMessage => {
        console.log('Foreground notification received:', remoteMessage);
    });

    return unsubscribe; // call this when the component unmounts
};

/**
 * Handles notifications when the app is in the background or closed (Background)
 */
export const listenBackgroundNotifications = () => {
    setBackgroundMessageHandler(messagingInstance, async remoteMessage => {
        console.log('Background notification received:', remoteMessage);
    });
};
