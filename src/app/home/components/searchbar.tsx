'use server';

import { Search } from "lucide-react";

export default async function Searchbar() {

    return (
        <form
            className="flex gap-2 bg-stack px-2 rounded-md w-full max-w-xl">
            <input
                placeholder="search through shopora"
                className="flex-1"
                type="text"
                name="query"
                id="query" />
            <button
                type="submit">
                <Search size={16} opacity={.5} />
            </button>
        </form>
    );
}