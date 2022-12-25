import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";

export default function Navbar() {
	return (
		<View style={styles.navbar}>
			<View style={styles.navIcon}>
				<Entypo name="home" size={24} color="black" />
				<Text style={styles.navTitle}>Home</Text>
			</View>
			<View style={styles.navIcon}>
				<AntDesign name="user" size={24} color="black" />
				<Text style={styles.navTitle}>Profile</Text>
			</View>
			<View style={styles.navIcon}>
				<AntDesign name="car" size={24} color="black" />
				<Text style={styles.navTitle}>My Vehicle</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	navbar: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		padding: 12,
		borderTopColor: "#9c9c9c",
		borderTopWidth: 1,
		width: "100%",
		backgroundColor: "#fff",
		height: 60,
	},
	navIcon: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-around",
	},
	navTitle: {
		marginTop: 4,
	},
});
