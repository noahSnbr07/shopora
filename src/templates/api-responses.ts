/**
 * a template of common api responses
 */
const APIResponseTemplate = {
    ok: (message: string = "Success") => ({
        success: true,
        data: null,
        message,
        status: 200,
    }),

    //on POST/Insert operations
    created: (data?: unknown, message: string = "Resource created") => ({
        success: true,
        data,
        message,
        status: 201,
    }),

    badRequest: (data?: unknown, message: string = "Bad Request") => ({
        success: false,
        data,
        message,
        status: 400,
    }),

    //not authorized
    unauthorized: (message = "Unauthorized") => ({
        success: false,
        data: null,
        message,
        status: 401,
    }),

    //authenticated but not authorized
    forbidden: (message = "Forbidden") => ({
        success: false,
        data: null,
        message,
        status: 403,
    }),

    //not-locatable resource
    notFound: (message = "Not found") => ({
        success: false,
        data: null,
        message,
        status: 404,
    }),
    //dynamic server error
    internalServerError: (error: Error | string) => ({
        success: false,
        data: null,
        message: "Internal server error",
        error: error,
        status: 500,
    }),
}

export default APIResponseTemplate;