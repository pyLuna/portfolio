export class Api {
    static admin = {
        login: '/api/admin/login',
        signup: '/api/admin/signup',
        my: '/api/admin/my',
        logout: '/api/admin/logout',
        basic: '/api/admin/basic',
        change_password: '/api/admin/change-password',
        category: '/api/admin/category',
        contents: {
            main: '/api/admin/contents',
            get: (category?: string, limit?: number) => `/api/admin/contents/${category}?limit=${limit}`,
            single: (id?: string) => `/api/admin/contents/single?id=${id}`,
        },
    }
}