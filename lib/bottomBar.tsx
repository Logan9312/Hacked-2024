import { Link } from "expo-router";
import { Text, View, TouchableOpacity } from "react-native";

// For some reason this messes up formatting when used as a component
const BottomBar = () => {
	return (
		<View className="px-4 py-4">
			<Link className="text-center bg-white text-md p-2 rounded" href="/" asChild>
				<TouchableOpacity className="rounded-lg">
					<Text className="text-blue-500">Return Home</Text>
				</TouchableOpacity>
			</Link>
		</View>
	);
};

export default BottomBar;
