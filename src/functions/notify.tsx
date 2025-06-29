'use client';

import { toast } from "react-toastify";
import { CircleAlert, CircleCheck } from "lucide-react";
import APIResponse from "@/interfaces/api-response";

export default function notify(apiResponse: APIResponse) {

    //custom toast notification with icon
    toast(`${apiResponse.status} | ${apiResponse.message}`, {
        icon: apiResponse.success ? <CircleCheck /> : <CircleAlert />,
    });

}