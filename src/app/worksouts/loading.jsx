import React from "react";

const Loading = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <div className="flex min-h-[50vh] items-center justify-center">
                <div className="text-center">
                    <span className="loading loading-spinner loading-lg text-[#C2F800]"></span>

                    <p className="mt-4 text-lg font-semibold text-gray-400">
                        Loading workouts...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Loading;
