import Image from "next/image";
import Link from "next/link";
import React from "react";

const WorkoutCard = ({ workout }) => {
    return (
        <Link href={`/worksouts/${workout.id}`}>
            <div className="w-full overflow-hidden rounded-2xl border border-zinc-800 bg-[#15171c] text-white">
                <div className="h-44 w-full overflow-hidden sm:h-52">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        height={400}
                        width={400}
                        className="h-full w-full object-cover object-center transition duration-300 hover:scale-105"
                    />
                </div>

                <div className="px-4 pb-5 pt-5 sm:px-6 sm:pb-6 sm:pt-6">
                    <div className="mb-4 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-lime-400 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-black sm:text-[12px]"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    <h2 className="text-[18px] font-extrabold uppercase tracking-wide sm:text-[20px]">
                        {workout.name}
                    </h2>

                    <p className="mt-1 text-sm text-zinc-400">
                        {workout.equipment}
                    </p>

                    <div className="my-4 h-px bg-zinc-700/70" />

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] text-zinc-400 sm:gap-5 sm:text-[13px]">
                        <div className="flex items-center gap-1.5">
                            <span>◷</span>
                            <span>{workout.duration} min</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                            <span>♨</span>
                            <span>{workout.caloriesBurned} kcal</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                            <span>☆</span>
                            <span>{workout.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default WorkoutCard;
