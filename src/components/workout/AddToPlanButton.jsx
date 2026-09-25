"use client";
import { useFitlog } from "@/context/FitlogContext";
import { toast } from "react-toastify";

const AddToPlanButton = ({ workout }) => {
    const { todayPlan, setTodayPlan } = useFitlog();

    const handleAddToPlan = () => {
        const alreadyAdded = todayPlan.some(
            (item) => String(item.id) === String(workout.id),
            
        );

        if (alreadyAdded) {
            toast.warning("Already added to today's plan");
            return;
        }

        setTodayPlan([...todayPlan, workout]);
        toast.success("Added to today's plan");
    };

    return (
        <button
            onClick={handleAddToPlan}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#ccff00] px-4 py-3 text-sm font-bold text-black transition-colors hover:bg-[#b5e000]"
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
                    d="M12 4v16m8-8H4"
                />
            </svg>
            Add to today plan
        </button>
    );
};

export default AddToPlanButton;
