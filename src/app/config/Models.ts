import { Days } from './Days.enum';
import { ExerciseTypes } from './ExerciseTypes.enum';
export interface Routine {
    uid: string;
    name: string;
    description: string;
    active: boolean;
    weeks: Week[];
}
export interface Week {
    uid: string;
    name: string;
    description: string;
    workouts: Workout[];
};
export interface Workout {
    uid: string;
    name: string;
    description: string;
    exercises: Exercise[];
    days: Days[];
};

export interface Exercise {
    uid: string;
    name: string;
    description: string;
    type: ExerciseTypes;
    sets: number;
    reps: RepRange;
    rest: RestRange;
    order: number;
};

export interface RepRange {
    max: number;
    min: number;
}

export interface RestRange {
    max: string;
    min: string;
}
