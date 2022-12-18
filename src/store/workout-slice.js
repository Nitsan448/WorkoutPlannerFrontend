import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	workoutName: "",
	exercises: [],
	changed: false,
};

const workoutSlice = createSlice({
	name: "current workout",
	initialState,
	reducers: {
		replaceWorkout(state, action) {
			state.exercises = action.payload.exercises;
			state.currentExerciseIndex = 0;
		},
		addExercise(state, action) {
			const newExercise = action.payload;
			state.changed = true;
			state.exercises.push(newExercise);
		},
		removeExercise(state, action) {
			const exerciseToRemoveId = action.payload;
			state.changed = true;
			state.exercises = state.exercises.filter((exercise) => exercise.id === exerciseToRemoveId);
		},
		reset(state) {
			state.workoutName = "";
			state.exercises = [];
			state.changed = false;
		},
	},
});

export const workoutActions = workoutSlice.actions;
export default workoutSlice;
