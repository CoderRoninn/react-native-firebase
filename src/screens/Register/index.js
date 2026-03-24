import React, { useState } from 'react';
import { StatusBar, Text, View, TextInput, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getAuth, createUserWithEmailAndPassword } from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { COLORS } from '../../consts/design/theme';
import { SCREENS } from '../../consts/screens';

/**
 * RegisterScreen Component
 * Handles new user registration using Firebase Authentication
 */

const RegisterScreen = () => {
    // State definitions to hold user credentials
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    // Register function to create a new user
    const handleRegister = async () => {
        if (!email || !password) {
            Alert.alert("Error", "Please enter email and password to register.");
            return;
        }
        try {
            // Required for modular SDK
            const firebaseAuth = getAuth();
            await createUserWithEmailAndPassword(firebaseAuth, email, password);
            navigation.navigate(SCREENS.LOGIN); // Navigate to Login on success
        } catch (error) {
            console.log(error);
            if (error.code === 'auth/email-already-in-use') {
                Alert.alert("Error", "That email address is already in use!");
            } else {
                Alert.alert("Error", "Registration failed.");
            }
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.dark} />
            <View style={styles.content}>
                <Text style={styles.helloText}>Create Account</Text>

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

                {/* Register button */}
                <Pressable style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Register</Text>
                </Pressable>

                {/* Login Redirect */}
                <View style={styles.loginRedirectContainer}>
                    <Text style={styles.loginRedirectText}>Already have an account?</Text>
                    <Pressable onPress={() => navigation.navigate(SCREENS.LOGIN)}>
                        <Text style={styles.loginRedirectLink}>Sign In</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default RegisterScreen;
