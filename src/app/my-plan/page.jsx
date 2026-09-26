"use client";

import React, { useState } from "react";

import { useFitlog } from "@/context/FitlogContext";

import Image from "next/image";

import Link from "next/link";

import { toast } from "react-toastify";

const MyPlanPage = () => {
    const {
        todayPlan,
        setTodayPlan,
        savedWorkouts,
        setSavedWorkouts,
        doneWorkouts,
        setDoneWorkouts,
    } = useFitlog();

    const [activeTab, setActiveTab] = useState("today");
    const [sortBy, setSortBy] = useState("duration");

    const workouts = activeTab === "today" ? todayPlan : savedWorkouts;

    /* Sort workouts */
    const sortedWorkouts = [...workouts].sort((a, b) => {
        if (sortBy === "duration") {
            return Number(a.duration || 0) - Number(b.duration || 0);
        }

        if (sortBy === "calories") {
            return (
                Number(a.caloriesBurned || 0) - Number(b.caloriesBurned || 0)
            );
        }

        if (sortBy === "rating") {
            return Number(a.rating || 0) - Number(b.rating || 0);
        }

        return 0;
    });

    /* Current tab workouts */
    const currentWorkouts = workouts;

    const totalMinutes = currentWorkouts.reduce(
        (total, workout) => total + Number(workout.duration || 0),
        0,
    );

    const totalCalories = currentWorkouts.reduce(
        (total, workout) => total + Number(workout.caloriesBurned || 0),
        0,
    );

    /* Remove workout */
    const handleRemove = (id) => {
        if (activeTab === "today") {
            setTodayPlan(
                todayPlan.filter(
                    (workout) => String(workout.id) !== String(id),
                ),
            );
        } else {
            setSavedWorkouts(
                savedWorkouts.filter(
                    (workout) => String(workout.id) !== String(id),
                ),
            );
        }

        toast.success("Workout removed");
    };

    /* Mark workout as done */
    const handleMarkAsDone = (workout) => {
        const alreadyDone = doneWorkouts.some(
            (item) => String(item.id) === String(workout.id),
        );

        if (alreadyDone) {
            toast.info("Workout already completed");
            return;
        }

        setDoneWorkouts((prev) => [...prev, workout]);

        toast.success("Workout marked as completed");
    };

    return (
        <div className="container mx-auto my-10 px-4">
            <div>
                <h1 className="text-3xl font-extrabold uppercase text-white">
                    My Plan
                </h1>

                <p className="mt-2 text-sm text-gray-400">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-gray-800 bg-[#0d1117] p-5">
                    <p className="text-sm text-gray-400">Exercises</p>

                    <h2 className="mt-2 text-3xl font-bold text-white">
                        {currentWorkouts.length}
                    </h2>
                </div>

                <div className="rounded-xl border border-gray-800 bg-[#0d1117] p-5">
                    <p className="text-sm text-gray-400">Minutes</p>

                    <h2 className="mt-2 text-3xl font-bold text-white">
                        {totalMinutes}
                    </h2>
                </div>

                <div className="rounded-xl border border-gray-800 bg-[#0d1117] p-5">
                    <p className="text-sm text-gray-400">Calories</p>

                    <h2 className="mt-2 text-3xl font-bold text-white">
                        {totalCalories}
                    </h2>
                </div>
            </div>

            {/* Tabs + Sort */}
            <div className="mt-10 flex items-center justify-between border-b border-gray-800">
                <div className="flex">
                    <button
                        onClick={() => setActiveTab("today")}
                        className={`px-5 py-3 text-sm font-semibold ${
                            activeTab === "today"
                                ? "border-b-2 border-[#C2F800] text-[#C2F800]"
                                : "text-gray-400"
                        }`}
                    >
                        Todays Plan
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

                {/* Sort Dropdown */}
                <div className="flex items-center gap-2 pb-2">
                    <label
                        htmlFor="sort"
                        className="text-sm font-medium text-gray-400"
                    >
                        Sort By
                    </label>

                    <select
                        id="sort"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="cursor-pointer rounded-lg border border-gray-700 bg-[#151922] px-3 py-2 text-sm font-medium text-white outline-none focus:border-[#C2F800]"
                    >
                        <option value="duration">Duration</option>
                        <option value="calories">Calories</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
            </div>

            {/* Empty State */}
            {workouts.length === 0 ? (
                <div className="mt-10 rounded-xl border border-gray-800 bg-[#0d1117] p-8 text-center">
                    <h2 className="text-xl font-bold text-white">
                        NOTHING HERE YET
                    </h2>

                    <p className="mt-2 text-gray-400">
                        {activeTab === "today"
                            ? "Browse the library and add a lift to get today moving."
                            : "Save a workout for later to see it here."}
                    </p>

                    <Link
                        href="/worksouts"
                        className="mt-5 inline-block rounded-xl bg-[#C2F800] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#aee000]"
                    >
                        Go to Workouts
                    </Link>
                </div>
            ) : (
                <div className="mt-8 space-y-5">
                    {sortedWorkouts.map((workout) => {
                        const isCompleted = doneWorkouts.some(
                            (item) => String(item.id) === String(workout.id),
                        );

                        return (
                            <div
                                key={workout.id}
                                className="overflow-hidden rounded-2xl bg-[#151922]"
                            >
                                <div className="flex flex-col justify-between gap-6 p-4 sm:flex-row sm:items-center sm:p-5">
                                    {/* Left Side */}
                                    <div className="flex items-center gap-5">
                                        {/* Image */}
                                        <div className="h-32 w-32 shrink-0 overflow-hidden rounded-xl sm:h-36 sm:w-36">
                                            <Image
                                                src={workout.image}
                                                alt={workout.name}
                                                height={200}
                                                width={200}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>

                                        {/* Information */}
                                        <div>
                                            <h2 className="text-xl font-bold text-white">
                                                {workout.name}
                                            </h2>

                                            <p className="mt-1 text-sm text-gray-400">
                                                {workout.equipment}
                                            </p>

                                            <div className="mt-4 flex flex-wrap gap-5">
                                                <div>
                                                    <p className="text-xs text-gray-500">
                                                        Duration
                                                    </p>

                                                    <p className="mt-1 text-sm font-semibold text-white">
                                                        {workout.duration} min
                                                    </p>
                                                </div>

                                                <div>
                                                    <p className="text-xs text-gray-500">
                                                        Calories
                                                    </p>

                                                    <p className="mt-1 text-sm font-semibold text-white">
                                                        {workout.caloriesBurned}{" "}
                                                        kcal
                                                    </p>
                                                </div>

                                                <div>
                                                    <p className="text-xs text-gray-500">
                                                        Rating
                                                    </p>

                                                    <p className="mt-1 text-sm font-semibold text-white">
                                                        ⭐ {workout.rating}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Side */}
                                    <div className="flex shrink-0 items-center gap-2">
                                        <Link
                                            href={`/worksouts/${workout.id}`}
                                            className="rounded-4xl border border-[#303640] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#C2F800] hover:text-[#C2F800]"
                                        >
                                            View Details
                                        </Link>

                                        {activeTab === "today" && (
                                            <button
                                                onClick={() =>
                                                    handleMarkAsDone(workout)
                                                }
                                                disabled={isCompleted}
                                                className={`flex items-center gap-2 rounded-4xl px-5 py-3 text-sm font-bold transition ${
                                                    isCompleted
                                                        ? "cursor-not-allowed bg-gray-700 text-gray-300"
                                                        : "cursor-pointer bg-[#C2F800] text-black hover:bg-[#aee000]"
                                                }`}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M20 6 9 17l-5-5" />
                                                </svg>

                                                {isCompleted
                                                    ? "Completed"
                                                    : "Mark as Done"}
                                            </button>
                                        )}

                                        {/* Remove Button */}
                                        <button
                                            onClick={() =>
                                                handleRemove(workout.id)
                                            }
                                            className="mx-5 cursor-pointer"
                                        >
                                            X
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default MyPlanPage;
