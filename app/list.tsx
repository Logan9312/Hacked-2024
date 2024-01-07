import React, { useState, useEffect } from "react";
import { Text, FlatList, View, TouchableOpacity, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface Items {
	id: number;
	household: number;
	list_id: number;
	name: string;
	collected: boolean;
}

const List = () => {
	const [items, setItems] = useState<Items[]>([]); // State to store payments

	useEffect(() => {
		// Fetch payments when component mounts
		const fetchItems = async () => {
			try {
				const response = await fetch("https://hacked-2024-backend-production.up.railway.app/items");
				const data = await response.json();
				setItems(data);
			} catch (error) {
				console.error("Failed to fetch payments:", error);
			}
		};

		fetchItems();
	}, []);

	const handleMarkCollected = (itemID: number) => {
		const updatedItems = items.map((item) => {
			if (item.id === itemID) {
				return { ...item, collected: !item.collected };
			}
			return item;
		});
		setItems(updatedItems);
	};

	return (
		<SafeAreaView className="flex-1 bg-blue-500">
			{/* Top Bar */}
			<View className="px-4 py-4 bg-blue-500">
				<View className="flex flex-row justify-between items-center">
					<Text className="text-xl text-white">List Items:</Text>
					<Link href="/addItem" asChild>
						<TouchableOpacity className="bg-white px-3 py-2 rounded">
							<Text className="text-blue-500">New Item</Text>
						</TouchableOpacity>
					</Link>
				</View>
			</View>

			<View className="flex-1 px-4 bg-white">
				<FlatList
					data={items}
					renderItem={({ item }) => (
						<View className="p-4 border-b border-gray-200 flex-row">
							<BouncyCheckbox
								onPress={() => handleMarkCollected(item.id)}
								fillColor="#4CAF50"
								// unfillColor="#F44336" // Optional styling
							/>
							<Text className="text-lg">{item.name}</Text>
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

export default List;
