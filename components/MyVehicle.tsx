import { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Button, Input } from "react-native-elements";

export default function MyVehicle() {
	const [currentVehicle, setCurrentVehicle] = useState();

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.newVehicleForm}>
				<Text>Add a new vehicle</Text>
				<View style={[styles.verticallySpaced, styles.mt10]}>
					<Input label="Vehicle Name" value={""} />
				</View>
				<View style={[styles.verticallySpaced, styles.mt10]}>
					<Input label="Starting Mileage" value={""} />
				</View>
				<View style={[styles.verticallySpaced, styles.mt10]}>
					<Input label="Year of Registration" value={""} />
				</View>
				<View style={[styles.verticallySpaced, styles.mt20]}>
					<Button title={"Add"} />
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		marginTop: 20,
		marginRight: "auto",
		marginLeft: "auto",
		padding: 12,
		width: "100%",
	},
	newVehicleForm: {
		backgroundColor: "#fff",
		width: "100%",
		padding: 10,
		borderRadius: 5,
	},
	verticallySpaced: {
		paddingTop: 4,
		paddingBottom: 4,
		alignSelf: "stretch",
		marginLeft: "auto",
		marginRight: "auto",
		width: "100%",
	},
	mt10: {
		marginTop: 10,
	},
	mt20: {
		marginTop: 20,
	},
	mb20: {
		marginBottom: 20,
	},
});
