import React from "react";
import BookCard from "../shared/BookCard";

const Books = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const books = await res.json();

    return (
        <div className="container mx-auto">
            <div className="mt-5">
                <h1 className="text-3xl font-bold">THE LIBRARY</h1>
                <p className="text-gray-400">Twelve lifts covering every major muscle group.</p>
            </div>

            <div className=" my-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {books.map((book) => {
                    return <BookCard key={book.id} book={book} />;
                })}
            </div>
        </div>
    );
};

export default Books;
