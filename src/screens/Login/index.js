import React, { useState, useEffect } from 'react';
import { StatusBar, Text, View, TextInput, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import styles from './styles';
import { COLORS } from '../../consts/design/theme';
import { SCREENS } from '../../consts/screens';
import { useNavigation } from '@react-navigation/native';

/**
 * LoginScreen Component
 * Handles user authentication via email, password, and Google Sign-In
 */

const LoginScreen = () => {
    // State definitions to hold user credentials
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    // Configure Google Sign-In on component mount
    useEffect(() => {
        // Initialize the Google SDK with requirements from google-services.json
        GoogleSignin.configure({
            webClientId: '803647786106-dv050mlra64vhpi924rk5ik2nbvbsgiv.apps.googleusercontent.com',
        });
    }, []);

    // Login function
    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("Error", "Please enter your email and password.");
            return;
        }
        try {
            // Required for modular SDK
            const firebaseAuth = getAuth();
            await signInWithEmailAndPassword(firebaseAuth, email, password);
            navigation.navigate(SCREENS.HOME);
        } catch (error) {
            console.log(error);
            Alert.alert("Error", "Invalid credentials or a problem occurred.");
        }
    };

    /**
     * Google Sign-In function
     * Triggers the Google sign-in flow and authenticates with Firebase
     */
    const onGoogleButtonPress = async () => {
        try {
            // Check if your device supports Google Play
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            
            // Get the users ID token
            const signInResult = await GoogleSignin.signIn();

            // Handle ID token (supporting v13+ and older versions of google-signin)
            let idToken = signInResult.data?.idToken || signInResult.idToken;

            if (!idToken) {
                throw new Error('No ID token found');
            }

            // Create a Google credential with the token
            const googleCredential = GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            const auth = getAuth();
            await signInWithCredential(auth, googleCredential);
            
            // Başarılı girişten sonra hiçbir log basmadan direkt yandaki ekrana (HOME) gönder:
            navigation.navigate(SCREENS.HOME);
            
        } catch (error) {
            console.log('Google Sign-In Error:', error);
            if (error.code !== 'SIGN_IN_CANCELLED') {
                Alert.alert("Error", "Google Sign-In failed.");
            }
        }
    };


    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.dark} />
            <View style={styles.content}>
                <Text style={styles.helloText}>Sign In</Text>

                {/* Email input */}
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                />

                {/* Password input */}
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword} // Updates the state whenever you type
                    secureTextEntry // Hides the password for privacy
                />

                {/* Login button */}
                <Pressable style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>

                {/* Google Sign-In button */}
                <Pressable style={styles.googleButton} onPress={onGoogleButtonPress}>
                    <Text style={styles.buttonText}>Sign In with Google</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;
