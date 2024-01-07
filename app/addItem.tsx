import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const AddItem = () => {
	return (
		<SafeAreaView className="flex-1 flex items-center justify-center space-y-8">
			<Text className="text-xl text-center justify-center">
				Generic Page to handle adding an item. Functionality not implemented yet
			</Text>
			<Link className="text-center bg-violet-400 text-md p-4 rounded" href="/" asChild>
				<TouchableOpacity className="rounded-lg">
					<Text className="">Return Home</Text>
				</TouchableOpacity>
			</Link>
		</SafeAreaView>
	);
};

export default AddItem;
