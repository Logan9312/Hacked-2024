import React, { useState, useEffect } from "react";
import { Text, FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

interface Payment {
	id: number;
	household_id: number;
	payee: string;
	name: string;
	description: string;
	price: number;
}

const Payments = () => {
	const [payments, setPayments] = useState<Payment[]>([]); // State to store payments

	useEffect(() => {
		// Fetch payments when component mounts
		const fetchPayments = async () => {
			try {
				const response = await fetch(
					"https://hacked-2024-backend-production.up.railway.app/payments",
				);
				const data = await response.json();
				setPayments(data);
			} catch (error) {
				console.error("Failed to fetch payments:", error);
			}
		};

		fetchPayments();
	}, []);

	return (
		<SafeAreaView className="flex-1 flex items-center justify-center space-y-8">
			<Text className="text-xl">Hi 👋, here are the payments:</Text>
			<FlatList
				data={payments}
				renderItem={({ item }) => (
					<View className="p-4 border-b border-gray-200">
						<Text className="text-lg">{item.name}</Text>
						<Text>{item.description}</Text>
						<Text className="text-sm text-gray-500">Payee: {item.payee}</Text>
						<Text className="text-sm text-gray-500">Price: ${item.price.toFixed(2)}</Text>
					</View>
				)}
				keyExtractor={(item) => item.id.toString()}
			/>
			<Link className="text-center w-48 bg-violet-400 text-md p-2" href="/">
				Go to Home Page
			</Link>
		</SafeAreaView>
	);
};

export default Payments;
