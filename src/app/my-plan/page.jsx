"use client";

import React, { useState } from "react";
import { useFitlog } from "@/context/FitlogContext";

const MyPlanPage = () => {
    const { todayPlan, savedWorkouts } = useFitlog();
    const [activeTab, setActiveTab] = useState("today");

    return (
        <div className="container mx-auto my-10">
            <div>
                <h1 className="text-3xl font-extrabold text-white uppercase">
                    My Plan
                </h1>

                <p className="mt-2 text-sm text-gray-400">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-gray-800 bg-[#0d1117] p-5">
                    <p className="text-sm text-gray-400">Exercises</p>
                    <h2 className="mt-2 text-3xl font-bold text-white">
                        {todayPlan.length}
                    </h2>
                </div>

                <div className="rounded-xl border border-gray-800 bg-[#0d1117] p-5">
                    <p className="text-sm text-gray-400">Minutes</p>
                    <h2 className="mt-2 text-3xl font-bold text-white">
                        {todayPlan.reduce(
                            (total, workout) =>
                                total + Number(workout.duration || 0),
                            0,
                        )}
                    </h2>
                </div>

                <div className="rounded-xl border border-gray-800 bg-[#0d1117] p-5">
                    <p className="text-sm text-gray-400">Calories</p>
                    <h2 className="mt-2 text-3xl font-bold text-white">
                        {todayPlan.reduce(
                            (total, workout) =>
                                total + Number(workout.caloriesBurned || 0),
                            0,
                        )}
                    </h2>
                </div>
            </div>

            <div className="mt-10 flex border-b border-gray-800">
                <button
                    onClick={() => setActiveTab("today")}
                    className={`px-5 py-3 text-sm font-semibold ${
                        activeTab === "today"
                            ? "border-b-2 border-[#C2F800] text-[#C2F800]"
                            : "text-gray-400"
                    }`}
                >
                    Today&apos;s Plan
                </button>

                <button
                    onClick={() => setActiveTab("saved")}
                    className={`px-5 py-3 text-sm font-semibold ${
                        activeTab === "saved"
                            ? "border-b-2 border-[#C2F800] text-[#C2F800]"
                            : "text-gray-400"
                    }`}
                >
                    Saved
                </button>
            </div>

            {(activeTab === "today" ? todayPlan : savedWorkouts).length ===
            0 ? (
                <div className="mt-10 rounded-xl border border-gray-800 bg-[#0d1117] p-8 text-center">
                    <h2 className="text-xl font-bold text-white">
                        {activeTab === "today"
                            ? "No workouts added yet"
                            : "No saved workouts yet"}
                    </h2>

                    <p className="mt-2 text-gray-400">
                        {activeTab === "today"
                            ? "Add a workout to your today's plan to see it here."
                            : "Save a workout for later to see it here."}
                    </p>
                </div>
            ) : (
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {(activeTab === "today" ? todayPlan : savedWorkouts).map(
                        (workout) => (
                            <div
                                key={workout.id}
                                className="rounded-xl border border-gray-800 bg-[#0d1117] p-5"
                            >
                                <h2 className="text-xl font-bold text-white">
                                    {workout.name}
                                </h2>

                                <p className="mt-2 text-gray-400">
                                    {workout.description}
                                </p>
                            </div>
                        ),
                    )}
                </div>
            )}
        </div>
    );
};

export default MyPlanPage;
