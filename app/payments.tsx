import React, { useState, useEffect } from "react";
import { Text, FlatList, View, TouchableOpacity, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import BottomBar from "@lib/bottomBar";

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
		<SafeAreaView className="flex-1 bg-blue-500">
			{/* Top Bar */}
			<View className="px-4 py-4 bg-blue-500">
				<View className="flex flex-row justify-between items-center">
					<Text className="text-xl text-white">Payments:</Text>
					<Link href="/addItem" asChild>
						<TouchableOpacity className="bg-white px-3 py-2 rounded">
							<Text className="text-blue-500">New Payment</Text>
						</TouchableOpacity>
					</Link>
				</View>
			</View>

			<View className="flex-1 px-4 bg-white">
				<FlatList
					data={payments}
					renderItem={({ item }) => (
						<View className="p-4 border-b border-gray-200">
							<Text className="text-lg">{item.name}</Text>
							<Text>{item.description}</Text>
							<Text className="text-sm text-gray-500">Payee: {item.payee}</Text>
							<Text className="text-sm text-gray-500">Price: ${item.price.toFixed(2)}</Text>
							<TouchableOpacity className="bg-green-500 mt-2 px-3 py-2 rounded">
								<Text className="text-white">Pay Now</Text>
							</TouchableOpacity>
						</View>
					)}
					keyExtractor={(item) => item.id.toString()}
				/>
			</View>

			{/* Bottom Bar */}
			<View className="px-4 py-4">
				<Link className="text-center bg-white text-md p-2 rounded" href="/" asChild>
					<TouchableOpacity className="rounded-lg">
						<Text className="text-blue-500">Return Home</Text>
					</TouchableOpacity>
				</Link>
			</View>
		</SafeAreaView>
	);
};

export default Payments;
