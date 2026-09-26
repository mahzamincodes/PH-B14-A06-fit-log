"use client";

import { createContext, useContext, useState } from "react";

const FitlogContext = createContext();

export const FitlogProvider = ({ children }) => {
    const [todayPlan, setTodayPlan] = useState([]);
    const [savedWorkouts, setSavedWorkouts] = useState([]);
    const [doneWorkouts, setDoneWorkouts] = useState([]);

    return (
        <FitlogContext.Provider
            value={{
                todayPlan,
                setTodayPlan,
                savedWorkouts,
                setSavedWorkouts,
                doneWorkouts,
                setDoneWorkouts,
            }}
        >
            {children}
        </FitlogContext.Provider>
    );
};

export const useFitlog = () => useContext(FitlogContext);
