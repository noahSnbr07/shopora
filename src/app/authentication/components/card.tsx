'use client';

import notify from "@/functions/notify";
import APIResponse from "@/interfaces/api-response";
import { type FormData, resolver } from "@/schemas/auth-schema";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";

export default function Card() {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver });
    const [pending, setPending] = useState<boolean>(false);
    const router = useRouter();

    async function onSubmit(formData: FormData) {
        if (pending) return;
        setPending(true);

        const body = new FormData();
        body.append('name', formData.name);
        body.append('password', formData.password);

        //define request
        const options: RequestInit = { method: "POST", body }
        const url = "/api/authentication/login/";

        //parse data
        const response = await fetch(url, options);
        const data: APIResponse = await response.json();

        //notify user
        notify(data);

        //navigate on success
        if (data.success) router.push("/home");

        //reset pending state for new submits
        setPending(false);

    }

    return (
        <form
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
            className="border-y w-full max-w-md p-8 flex flex-col gap-8"
        >
            <b className="text-xl"> Log In </b>
            <div className="flex flex-col gap-2">
                <label className="opacity-50" htmlFor="name"> username </label>
                <input
                    id="name"
                    {...register("name")}
                    placeholder="username"
                    type="text"
                    name="name"
                    className="px-4 py-2 rounded-md border"
                />
                {errors.name && (
                    <i className="opacity-50 text-sm text-red-500">{errors.name.message}</i>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <label className="opacity-50" htmlFor="password"> password </label>
                <input
                    id="password"
                    {...register("password")}
                    placeholder="password"
                    type="password"
                    name="password"
                    className="px-4 py-2 rounded-md border"
                />
                {errors.password && (
                    <i className="opacity-50 text-sm text-red-500">{errors.password.message}</i>
                )}
            </div>
            <div className="h-0.5 w-full bg-stack rounded-full"></div>
            <button
                disabled={pending}
                style={{ opacity: pending ? .5 : 1, cursor: pending ? "not-allowed" : "pointer" }}
                className="bg-foreground text-background py-2 rounded-md font-bold"
                type="submit"> {pending ? <ClipLoader size={16} /> : "Submit"} </button>
        </form>
    );
}