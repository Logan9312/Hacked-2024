import React, { useState, useEffect } from "react";
import { Text, FlatList, View, TouchableOpacity, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

interface List {
	id: number;
	household_id: number;
	name: string;
	description: string;
}

const Payments = () => {
	const [lists, setLists] = useState<List[]>([]); // State to store lists

	useEffect(() => {
		// Fetch payments when component mounts
		const fetchLists = async () => {
			try {
				const response = await fetch("https://hacked-2024-backend-production.up.railway.app/lists");
				const data = await response.json();
				setLists(data);
			} catch (error) {
				console.error("Failed to fetch lists:", error);
			}
		};

		fetchLists();
	}, []);

	return (
		<SafeAreaView className="flex-1 bg-blue-500">
			{/* Top Bar */}
			<View className="px-4 py-4 bg-blue-500">
				<View className="flex flex-row justify-between items-center">
					<Text className="text-xl text-white">Lists:</Text>
					<Link href="/addItem" asChild>
						<TouchableOpacity className="bg-white px-3 py-2 rounded">
							<Text className="text-blue-500">New List</Text>
						</TouchableOpacity>
					</Link>
				</View>
			</View>

			<View className="flex-1 px-4 bg-white">
				<FlatList
					data={lists}
					renderItem={({ item }) => (
						<View className="p-4 border-b border-gray-200">
							<Text className="text-lg">{item.name}</Text>
							<Text>{item.description}</Text>
							<Link href="/list" asChild>
								<TouchableOpacity className="bg-blue-500 mt-2 px-3 py-2 rounded">
									<Text className="text-white">View List</Text>
								</TouchableOpacity>
							</Link>
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
