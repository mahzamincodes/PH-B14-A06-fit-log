import React from "react";
import WorkoutCard from "../shared/WorkoutCard";

const getWorkouts = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    return res.json();
};

const Workouts = async () => {
    const workoutsData = await getWorkouts();
    return (
        <div className="container mx-auto">
            <div className="mt-5">
                <h1 className="text-3xl font-bold">THE LIBRARY</h1>
                <p className="text-gray-400">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            <div className=" my-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {workoutsData.map((workout) => {
                    return <WorkoutCard key={workout.id} workout={workout} />;
                })}
            </div>
        </div>
    );
};

export default Workouts;
