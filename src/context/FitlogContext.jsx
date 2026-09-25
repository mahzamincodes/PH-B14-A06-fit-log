"use client";

import { createContext, useContext, useState } from "react";

const FitlogContext = createContext();

export const FitlogProvider = ({ children }) => {
    const [todayPlan, setTodayPlan] = useState([]);
    const [savedWorkouts, setSavedWorkouts] = useState([]);

    return (
        <FitlogContext.Provider
            value={{
                todayPlan,
                setTodayPlan,
                savedWorkouts,
                setSavedWorkouts,
            }}
        >
            {children}
        </FitlogContext.Provider>
    );
};

export const useFitlog = () => useContext(FitlogContext);