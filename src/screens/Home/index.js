import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import { SCREENS } from '../../consts/screens';
import { COLORS } from '../../consts/design/theme';


const HomeScreen = () => {
    // State to store food data and loading status
    const [foodData, setFoodData] = useState();
    const [loading, setLoading] = useState(true);

    /* 
    Alternative: One-time data fetch method (Non real-time)
    Use this if you only need to fetch data once when the component mounts.
    
    const getFoodDataOnce = async () => {
        try {
            const foodCollection = await firestore().collection('foods').get();
            setFoodData(foodCollection.docs[0]?.data());
            console.log("collection0.data (once):", foodCollection.docs[0]?.data());
            setLoading(false);
        } catch (error) {
            console.error("Firestore error:", error);
            setLoading(false);
        }
    }
    */

    // Function to add a brand new food item to the Firestore 'foods' collection
    const addFood = async () => {
        try {
            await firestore().collection('foods').add({
                title: "New Food Item",
                price: 150,
                rating: 4,
                image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
            });
            console.log("Food added successfully!");
        } catch (error) {
            console.error("Error adding food: ", error);
        }
    }

    // Function to delete the current food item from Firestore
    const deleteFood = async () => {
        if (!foodData?.id) return;
        try {
            await firestore().collection('foods').doc(foodData.id).delete();
            console.log("Food deleted successfully!");
        } catch (error) {
            console.error("Error deleting food: ", error);
        }
    }

    // Function to update the current food item in Firestore
    const updateFood = async () => {
        if (!foodData?.id) return;
        try {
            await firestore().collection('foods').doc(foodData.id).update({
                title: "Updated Food Item",
                price: 250,
                rating: 5
            });
            console.log("Food updated successfully!");
        } catch (error) {
            console.error("Error updating food: ", error);
        }
    }

    // Function as real-time listener to fetch food data from Firestore
    const getFoodData = () => {
        return firestore()
            .collection('foods')
            .onSnapshot(querySnapshot => {
                // Save the first document's data and its ID to state
                const firstDoc = querySnapshot.docs[0];
                if (firstDoc) {
                    setFoodData({ id: firstDoc.id, ...firstDoc.data() });
                    console.log("collection0.data:", { id: firstDoc.id, ...firstDoc.data() });
                } else {
                    setFoodData(null);
                }
                setLoading(false);
            }, error => {
                console.error("Firestore error:", error);
                setLoading(false);
            });
    }

    // Effect to start the real-time listener and handle cleanup on unmount
    useEffect(() => {
        // Start the real time listener
        const unsubscribe = getFoodData();
        // Cleanup function to unsubscribe from the listener when component unmounts
        return () => unsubscribe();
    }, []);

    if (loading) {
        return (
            <SafeAreaView style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={COLORS.primaryGreen} />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.content}>
                <View style={styles.itemContainer}>
                    <Image source={{ uri: foodData?.image_url }} style={styles.image} />
                    <Text style={styles.title}>{foodData?.title}</Text>
                    <Text style={styles.price}>Price: {foodData?.price} TL</Text>
                    <Text style={styles.rating}>
                        Rating: {foodData?.rating} {'⭐'.repeat(foodData?.rating || 0)}
                    </Text>
                    <View style={styles.buttonContainer}>
                        <Button title="Add Food" onPress={addFood} color={COLORS.primaryGreen} />
                        <View style={styles.deleteButtonContainer}>
                            <Button title="Update Food" onPress={updateFood} color={COLORS.primaryDark} />
                        </View>
                        <View style={styles.deleteButtonContainer}>
                            <Button title="Delete Food" onPress={deleteFood} color={COLORS.googleRed} />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
