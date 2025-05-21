import RecordType from "../types/record";

type FetchOption = {
    data?: FormData | RecordType | string;
    auth?: boolean;
    method: "GET" | "POST"
}

/**
 * Alias for `appFetch` where the method is "GET"
 * @param url Api url
 * @param options `FetchOption`
 * @returns 
 */
const get = async <T>(url: string, options?: {
    data?: RecordType,
    auth?: boolean
}): Promise<T | undefined> => {
    return await appFetch<T>(url, {
        data: options?.data,
        auth: options?.auth,
        method: "GET"
    });
}

/**
 * Alias for `appFetch` where the method is "POST"
 * @param url Api url
 * @param options `FetchOption`
 * @returns 
 */
const post = async <T>(url: string, options?: {
    data?: RecordType,
    auth?: boolean
}): Promise<T | undefined> => {
    return await appFetch<T>(url, {
        data: options?.data,
        auth: options?.auth,
        method: "POST"
    });
}


const appFetch = async <T>(
    url: string,
    options: FetchOption = {
        data: {},
        auth: true,
        method: "GET"
    }
): Promise<T | undefined> => {

    let init: RequestInit = {
        method: options.method,
        credentials: "include",
        body: JSON.stringify(options.data),
    }

    const response = await fetch(url, init);
    const data = await response.json();

    if (!response.ok) {
        alert(`status: ${response.status}\ncode: ${data.string_code}\nmessage: ${data.message}`);
        return;
    }
    return data as unknown as T;
}

export {
    appFetch, get, post
};

