import RecordType from "@/lib/types/record";

/**
 * Returns a JSON response with the given data and a status code of 200.
 * @param data - The data to be serialized and returned as the response body.
 * @returns A new Response object with the serialized data and a status code of 200.
 */
const json = (data: RecordType) => (
    new Response(
        JSON.stringify(data),
        {
            headers: { "Content-Type": "application/json" },
            status: 200,
        }
    )
);

/**
 * Returns a JSON response with the given data and a status code of 400.
 * @param data - The data to be serialized and returned as the response body.
 * @param options - Optional parameters.
 * @param options.status - The status code to be returned. Defaults to 400.
 * @param options.string_code - The string code to be included in the response body. Defaults to "error".
 * @returns A new Response object with the serialized data and a status code of 400.
 */
const error = (data: RecordType, options?: { status?: number, string_code?: string }) => (
    new Response(
        JSON.stringify(Object.assign(data, { string_code: options?.string_code ?? "error" })),
        {
            headers: { "Content-Type": "application/json" },
            status: options?.status || 400,
        }
    )
);

export {
    error, json
};

