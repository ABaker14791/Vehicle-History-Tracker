import "react-native-url-polyfill/auto";
import { useState, useEffect } from "react";
// Components
import Auth from "./components/Auth";
import Account from "./components/Account";
import MyVehicle from "./components/MyVehicle";
// Supabase
import { supabase } from "./lib/supabase";
import { Session } from "@supabase/supabase-js";
// Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
// Icons
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
	const [session, setSession] = useState<Session | null>(null);

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session);
		});

		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});
	}, []);

	return (
		<NavigationContainer>
			{session && session.user ? (
				<Tab.Navigator
					screenOptions={({ route }) => ({
						tabBarIcon: () => {
							let iconName: any;

							if (route.name === "Account") {
								iconName = "user";
							} else if (route.name === "MyVehicle") {
								iconName = "car";
							}
							return <AntDesign name={iconName} size={24} color="black" />;
						},
						tabBarActiveTintColor: "tomato",
						tabBarInactiveTintColor: "gray",
					})}
				>
					<Tab.Screen name="MyVehicle" component={MyVehicle} />
					<Tab.Screen name="Account">
						{(props) => (
							<Account {...props} key={session.user.id} session={session} />
						)}
					</Tab.Screen>
				</Tab.Navigator>
			) : (
				<Tab.Navigator>
					<Tab.Screen name="Auth" component={Auth} />
				</Tab.Navigator>
			)}
		</NavigationContainer>
	);
}
