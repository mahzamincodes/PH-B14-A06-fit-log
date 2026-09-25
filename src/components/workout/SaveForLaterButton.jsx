"use client";

import React from "react";
import { useFitlog } from "@/context/FitlogContext";
import { toast } from "react-toastify";

const SaveForLaterButton = ({ workout }) => {
    const { savedWorkouts, setSavedWorkouts } = useFitlog();

    const handleSaveForLater = () => {
        const alreadySaved = savedWorkouts.some(
            (item) => String(item.id) === String(workout.id),
        );

        if (alreadySaved) {
            toast.info("Already saved for later");
            return;
        }

        setSavedWorkouts([...savedWorkouts, workout]);
        toast.success("Saved for later");
    };

    return (
        <button
            onClick={handleSaveForLater}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-700 px-5 py-3 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-800"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
            </svg>
            Save for later
        </button>
    );
};

export default SaveForLaterButton;
