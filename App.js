import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { useState } from "react";

import CourseInput from "./components/CourseInput";

export default function App() {
	const [modalIsVisible, setModalIsVisible] = useState(false);

	const [courses, setCourses] = useState([]);

	const startModal = () => setModalIsVisible(true);

	const endModal = () => setModalIsVisible(false);

	const addCourse = (courseTitle) => {
		setCourses((currentCourses) => [
			...currentCourses,
			{
				text: courseTitle,
				id: Math.random().toString(),
			},
		]);

		endModal();
	};

	return (
		<>
			<StatusBar style="light" />

			<View style={styles.container}>
				<Button
					title={"Kurs Ekle"}
					color="red"
					onPress={startModal}
				/>

				<CourseInput
					visible={modalIsVisible}
					onCancel={endModal}
					onAddCourse={addCourse}
				/>

				<View>
					<FlatList
						data={courses}
						renderItem={({ item }) => (
							<View style={styles.courseItem}>
								<Text style={styles.courseText}>{item.text}</Text>
							</View>
						)}
					/>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",

		flex: 1,

		paddingTop: 60,
		paddingHorizontal: 20,
	},

	courseItem: {
		backgroundColor: "gray",
		borderRadius: 5,

		margin: 8,
	},

	courseText: {
		color: "white",

		padding: 8,
	},
});
