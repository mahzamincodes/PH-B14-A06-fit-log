import Image from "next/image";
import React from "react";
import AddToPlanButton from "@/components/workout/AddToPlanButton";
import SaveForLaterButton from "@/components/workout/SaveForLaterButton";

const getWorkouts = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

    if (!res.ok) {
        throw new Error("Failed to fetch workouts");
    }

    return res.json();
};

const WorkoutDetailsPage = async ({ params }) => {
    const { id } = await params;

    const workoutsData = await getWorkouts();

    const workout = workoutsData.find(
        (workout) => String(workout.id) === String(id),
    );

    if (!workout) {
        return (
            <div className="container mx-auto my-20 text-center text-white">
                <h1 className="text-3xl font-bold">Workout not found</h1>
            </div>
        );
    }

    return (
        <div className="container mx-auto my-12">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#0d1117] p-6 font-sans text-white shadow-2xl">
                <div className="grid grid-cols-1 items-start gap-15 md:grid-cols-2">
                    <div className="aspect-square h-full w-full overflow-hidden rounded-xl bg-gray-800">
                        <Image
                            src={workout.image}
                            alt={workout.name}
                            height={400}
                            width={400}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>

                    <div className="flex h-full flex-col justify-between space-y-6">
                        <div>
                            <h1 className="text-3xl font-extrabold tracking-wide text-gray-100 uppercase">
                                {workout.name}
                            </h1>

                            <p className="mt-2 text-sm leading-relaxed text-gray-400">
                                {workout.description}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {workout.muscleGroups.map((muscleGroup) => (
                                    <span
                                        key={muscleGroup}
                                        className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-semibold text-black"
                                    >
                                        {muscleGroup}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-6 divide-y divide-gray-800/50 border-t border-gray-800 text-sm bg-[#151922] px-5 py-1 rounded-2xl">
                                <div className="flex justify-between py-2.5">
                                    <span className="text-xs font-semibold tracking-wider text-gray-300 uppercase">
                                        Equipment
                                    </span>

                                    <span className="text-gray-200">
                                        {workout.equipment}
                                    </span>
                                </div>

                                <div className="flex justify-between py-2.5">
                                    <span className="text-xs font-semibold tracking-wider text-gray-300 uppercase">
                                        Difficulty
                                    </span>

                                    <span className="text-gray-200">
                                        {workout.difficulty}
                                    </span>
                                </div>

                                <div className="flex justify-between py-2.5">
                                    <span className="text-xs font-semibold tracking-wider text-gray-300 uppercase">
                                        Sets
                                    </span>

                                    <span className="text-gray-200">
                                        {workout.sets}
                                    </span>
                                </div>

                                <div className="flex justify-between py-2.5">
                                    <span className="text-xs font-semibold tracking-wider text-gray-300 uppercase">
                                        Reps
                                    </span>

                                    <span className="text-gray-200">
                                        {workout.reps}
                                    </span>
                                </div>

                                <div className="flex justify-between py-2.5">
                                    <span className="text-xs font-semibold tracking-wider text-gray-300 uppercase">
                                        Duration
                                    </span>

                                    <span className="text-gray-200">
                                        {workout.duration} min
                                    </span>
                                </div>

                                <div className="flex justify-between py-2.5">
                                    <span className="text-xs font-semibold tracking-wider text-gray-300 uppercase">
                                        Calories
                                    </span>

                                    <span className="text-gray-200">
                                        {workout.caloriesBurned} kcal
                                    </span>
                                </div>

                                <div className="flex justify-between py-2.5">
                                    <span className="text-xs font-semibold tracking-wider text-gray-300 uppercase">
                                        Rating
                                    </span>

                                    <span className="font-bold text-gray-200">
                                        {workout.rating}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h2 className="mb-3 text-xs font-bold tracking-widest text-white uppercase">
                                    Instructions
                                </h2>

                                <ol className="list-inside list-decimal space-y-2 text-sm leading-relaxed text-gray-300">
                                    {workout.instructions.map(
                                        (instruction, index) => (
                                            <li key={index}>
                                                {instruction}
                                            </li>
                                        ),
                                    )}
                                </ol>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 border-t border-gray-800 pt-4">
                            <AddToPlanButton workout={workout} />

                            <SaveForLaterButton workout={workout} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkoutDetailsPage;