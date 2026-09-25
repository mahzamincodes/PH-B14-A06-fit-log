import React from "react";
import WorkoutCard from "@/components/shared/WorkoutCard";

const Workouts = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const workouts = await res.json();

    return (
        <div className="container mx-auto">
            <div className="mt-5">
                <h1 className="text-3xl font-bold">THE LIBRARY</h1>
                <p className="text-gray-400">Twelve lifts covering every major muscle group.</p>
            </div>

            <div className=" my-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {workouts.map((workout) => {
                    return <WorkoutCard key={workout.id} workout={workout} />;
                })}
            </div>
        </div>
    );
};

export default Workouts;
