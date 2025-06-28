interface APIResponse {
    status: number;
    success: boolean;
    message: string;
    error?: Error | string;
    data: unknown;
}

export default APIResponse;