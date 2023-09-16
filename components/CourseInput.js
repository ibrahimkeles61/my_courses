import {
	StyleSheet,
	Text,
	View,
	Modal,
	Image,
	TextInput,
	Button,
} from "react-native";
import { useState } from "react";

export default function CourseInput({ visible, onCancel, onAddCourse }) {
	const [enteredCourseText, setEnteredCourseText] = useState("");

	const addCourseHandler = () => {
		onAddCourse(enteredCourseText);
		setEnteredCourseText("");
	};

	return (
		<Modal
			animationType="slide"
			visible={visible}
		>
			<View style={styles.inputContainer}>
				<Image
					style={styles.image}
					source={require("../assets/images/ik_logo.png")}
				/>

				<TextInput
					style={styles.textInput}
					placeholder="Yeni Kurs Ekle"
					value={enteredCourseText}
					onChangeText={(text) => setEnteredCourseText(text)}
				/>

				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button
							title="İptal Et"
							color="red"
							onPress={() => (setEnteredCourseText(""), onCancel())}
						/>
					</View>

					<View style={styles.button}>
						<Button
							title="Ekle"
							color="blue"
							onPress={addCourseHandler}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		backgroundColor: "gray",

		flex: 1,
		justifyContent: "center",
		alignItems: "center",

		padding: 15,
	},

	image: {
		width: 150,
		height: 150,
		borderRadius: 20,

		margin: 20,
	},

	textInput: {
		width: "100%",
		backgroundColor: "pink",
		borderWidth: 1,
		borderRadius: 10,
		borderColor: "pink",

		padding: 10,
	},

	buttonContainer: {
		flexDirection: "row",

		marginTop: 15,
	},

	button: {
		width: 100,

		marginHorizontal: 8,
	},
});
