import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // assuming you're using Ionicons for icons
import { Link } from "expo-router";

const App = () => {
  // Mock data for dashboard items
  const dashboardItems = [
    {
      title: "Payments Due",
      icon: "cash-outline",
      color: "bg-yellow-400",
      link: "/payments",
    },
    {
      title: "Tasks",
      icon: "checkmark-circle-outline",
      color: "bg-blue-400",
      link: "/tasks",
    },
    {
      title: "Grocery List",
      icon: "cart-outline",
      color: "bg-green-400",
      link: "/grocery",
    },
    {
      title: "Messages",
      icon: "chatbubbles-outline",
      color: "bg-purple-400",
      link: "/messages",
    },
  ];

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="bg-gray-100">
        <View className="px-4 py-8">
          <Text className="text-3xl font-bold text-gray-800">
            Welcome to Roommates!
          </Text>
          <Text className="text-lg text-gray-600 mt-2">
            Manage your home efficiently
          </Text>
        </View>

        <View className="grid grid-cols-2 gap-4 px-4">
          {dashboardItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{ flex: 1 }}
              className={`${item.color} rounded-lg p-4 flex items-center justify-between`}
            >
              <Link href="/your-desired-path">
                <Ionicons name={item.icon as any} size={24} color="white" />
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  {item.title}
                </Text>
              </Link>
            </TouchableOpacity>
          ))}
        </View>

        <View className="mt-8 px-4">
          {/* Add more content or features here */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
