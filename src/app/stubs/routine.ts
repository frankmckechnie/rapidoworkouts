import { Days } from '../config/Days.enum';
import { ExerciseTypes } from '../config/ExerciseTypes.enum';
import { Routine } from '../config/Models';

export const ExampleRoutine: Routine =  {
    active: true,
    uid: 'wwdwdfdwf-wdrfdwfwd-fd',
    name: 'Muscle Building Workout Routine',
    description: `Designed to work for both men and women, young and old, 
    people looking to build a significant amount of muscle and get “big” or 
    build a small amount of muscle and just get “toned.”`,
    weeks: [
        {
            uid: 'wwdwdfdwf-wdfdwfwd-fd',
            name: 'week 1',
            description: 'Week 1, mostly upper body',
            workouts:  [
                {
                    uid: 'saddasd-asfasd-asd',
                    name: 'Upper Body A',
                    days: [Days.MONDAY],
                    description: 'Upper Body A day 1',
                    exercises: [
                        {
                            uid: 'c-ffdasd-asd',
                            name: 'Bench Press',
                            description: 'The bench press...',
                            type: ExerciseTypes.UPPERBODY,
                            sets: 3,
                            reps: {min: 6, max: 8},
                            rest: {min: '00:02:00', max: '00:03:00' },
                            order: 1
                        },
                        {
                            uid: 'b-ffdasd-asd',
                            name: 'Rows',
                            description: 'The rows...',
                            type: ExerciseTypes.UPPERBODY,
                            sets: 3,
                            reps: {min: 6, max: 8},
                            rest: {min: '00:02:00', max: '00:03:00' },
                            order: 2
                        },
                        {
                            uid: 'v-ffdasd-asd',
                            name: 'Incline Dumbbell Press',
                            description: 'The Incline Dumbbell Press...',
                            type: ExerciseTypes.UPPERBODY,
                            sets: 3,
                            reps: {min: 9, max: 10},
                            rest: {min: '00:01:00', max: '00:02:00' },
                            order: 3
                        },
                        {
                            uid: 'n-ffdasd-asd',
                            name: 'Lat Pull-Downs',
                            description: 'The Lat Pull-Downs...',
                            type: ExerciseTypes.UPPERBODY,
                            sets: 3,
                            reps: {min: 8, max: 10},
                            rest: {min: '00:01:00', max: '00:02:00' },
                            order: 4
                        },
                        {
                            uid: 'm-ffdasd-asd',
                            name: 'Lateral Raises',
                            description: 'The lateral Raise...',
                            type: ExerciseTypes.UPPERBODY,
                            sets: 2,
                            reps: {min: 10, max: 15},
                            rest: {min: '00:01:00', max: '00:01:00' },
                            order: 5
                        },
                        {
                            uid: 'kj-ffdasd-asd',
                            name: 'Triceps Pushdowns',
                            description: 'The Triceps Pushdowns...',
                            type: ExerciseTypes.UPPERBODY,
                            sets: 3,
                            reps: {min: 10, max: 12},
                            rest: {min: '00:01:00', max: '00:01:00' },
                            order: 6
                        },
                        {
                            uid: 'll-ffdasd-asd',
                            name: 'Dumbbell Curls',
                            description: 'The Dumbbell Curls...',
                            type: ExerciseTypes.UPPERBODY,
                            sets: 3,
                            reps: {min: 12, max: 15},
                            rest: {min: '00:01:00', max: '00:01:00' },
                            order: 7
                        },
                    ]
                },
                {
                    uid: 'sae34dasd-asfasd-asd',
                    name: 'Lower Body A',
                    days: [Days.WEDNESDAY],
                    description: ' Lower Body A day 2',
                    exercises: [
                        {
                            uid: 'saddasd-frasd-asd',
                            name: 'Romanian Deadlifts',
                            description: 'The Romanian Deadlifts...',
                            type: ExerciseTypes.FULLBODY,
                            sets: 3,
                            reps: {min: 6, max: 8},
                            rest: {min: '00:02:00', max: '00:03:00' },
                            order: 1
                        },
                        {
                            uid: 'saddasd-fftsd-asd',
                            name: 'Leg Press',
                            description: 'The Leg Press...',
                            type: ExerciseTypes.LOWERBODY,
                            sets: 3,
                            reps: {min: 10, max: 12},
                            rest: {min: '00:01:00', max: '00:02:00' },
                            order: 2
                        },
                        {
                            uid: 'saddasd-ttew-asd',
                            name: 'Seated Leg Curls',
                            description: 'The Seated Leg Curls...',
                            type: ExerciseTypes.LOWERBODY,
                            sets: 3,
                            reps: {min: 8, max: 10},
                            rest: {min: '00:01:00', max: '00:02:00' },
                            order: 3
                        },
                        {
                            uid: 'saddasd-bgdb-asd',
                            name: 'Standing Calf Raises',
                            description: 'The Standing Calf Raises...',
                            type: ExerciseTypes.LOWERBODY,
                            sets: 4,
                            reps: {min: 8, max: 10},
                            rest: {min: '00:01:00', max: '00:02:00' },
                            order: 4
                        },
                        {
                            uid: 'saddasd-csdc-asd',
                            name: 'Abs',
                            description: 'The Abs...',
                            type: ExerciseTypes.FULLBODY,
                            sets: 3,
                            reps: {min: 10, max: 15},
                            rest: {min: '00:01:00', max: '00:01:00' },
                            order: 5
                        }
                    ]
                },
                {
                    uid: 'tgtbybt-asfasd-asd',
                    name: 'Upper Body B',
                    days: [Days.FRIDAY],
                    description: ' Upper Body B day 3',
                    exercises: [
                        {
                            uid: 'tgb-frasd-asd',
                            name: 'Pull-Ups',
                            description: 'The Pull-Ups...',
                            type: ExerciseTypes.UPPERBODY,
                            sets: 3,
                            reps: {min: 6, max: 8},
                            rest: {min: '00:02:00', max: '00:03:00' },
                            order: 1
                        },
                        {
                            uid: 'ujm-fftsd-asd',
                            name: 'Barbell Shoulder Press',
                            description: 'The Barbell Shoulder Press...',
                            type: ExerciseTypes.UPPERBODY,
                            sets: 3,
                            reps: {min: 6, max: 8},
                            rest: {min: '00:01:00', max: '00:02:00' },
                            order: 2
                        },
                        {
                            uid: 'nyh-ttew-asd',
                            name: 'Seated Cable Row',
                            description: 'The Seated Cable Row...',
                            type: ExerciseTypes.UPPERBODY,
                            sets: 3,
                            reps: {min: 8, max: 10},
                            rest: {min: '00:01:00', max: '00:02:00' },
                            order: 3
                        },
                        {
                            uid: 'axs-bgdb-asd',
                            name: 'Dumbbell Bench Press',
                            description: 'The Dumbbell Bench Press...',
                            type: ExerciseTypes.UPPERBODY,
                            sets: 3,
                            reps: {min: 8, max: 10},
                            rest: {min: '00:01:00', max: '00:02:00' },
                            order: 4
                        },
                        {
                            uid: 'csv-csdc-asd',
                            name: 'Dumbbell Flyes',
                            description: 'The Dumbbell Flyes...',
                            type: ExerciseTypes.UPPERBODY,
                            sets: 2,
                            reps: {min: 10, max: 15},
                            rest: {min: '00:01:00', max: '00:01:00' },
                            order: 5
                        },
                        {
                            uid: 'csv-csdc-asd',
                            name: 'Barbell Curls',
                            description: 'The Barbell Curls...',
                            type: ExerciseTypes.UPPERBODY,
                            sets: 3,
                            reps: {min: 10, max: 12},
                            rest: {min: '00:01:00', max: '00:01:00' },
                            order: 5
                        },
                        {
                            uid: 'csv-csdc-asd',
                            name: 'Skull Crushers',
                            description: 'The Skull Crushers...',
                            type: ExerciseTypes.UPPERBODY,
                            sets: 3,
                            reps: {min: 10, max: 12},
                            rest: {min: '00:01:00', max: '00:01:00' },
                            order: 5
                        }
                    ]
                }
            ]
        }
    ]
};
