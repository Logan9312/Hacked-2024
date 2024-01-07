import React, { useState, useEffect } from "react";
import { Text, FlatList, View, TouchableOpacity, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import BottomBar from "@lib/bottomBar";

interface Task {
	id: number;
	household_id: number;
	name: string;
	description: string;
	due_date: string;
	assigned_to_id: number;
	completed: boolean;
}

const Payments = () => {
	const [tasks, setPayments] = useState<Task[]>([]); // State to store tasks

	useEffect(() => {
		// Fetch payments when component mounts
		const fetchTasks = async () => {
			try {
				const response = await fetch("https://hacked-2024-backend-production.up.railway.app/tasks");
				const data = await response.json();
				setPayments(data);
			} catch (error) {
				console.error("Failed to fetch payments:", error);
			}
		};

		fetchTasks();
	}, []);

	return (
		<SafeAreaView className="flex-1 bg-blue-500">
			{/* Top Bar */}
			<View className="px-4 py-4 bg-blue-500">
				<View className="flex flex-row justify-between items-center">
					<Text className="text-xl text-white">Tasks:</Text>
					<Link href="/addItem" asChild>
						<TouchableOpacity className="bg-white px-3 py-2 rounded">
							<Text className="text-blue-500">New Task</Text>
						</TouchableOpacity>
					</Link>
				</View>
			</View>
			<View className="flex-1 px-4 bg-white">
				<FlatList
					data={tasks}
					renderItem={({ item }) => (
						<View className="p-4 border-b border-gray-200">
							<Text className="text-lg">{item.name}</Text>
							<Text>{item.description}</Text>
							<Text className="text-sm text-gray-500">Assigned To: {item.assigned_to_id}</Text>
							<Text className="text-sm text-gray-500">Due: {item.due_date}</Text>
							<Text className="text-sm text-gray-500">Completed: {item.completed}</Text>
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
