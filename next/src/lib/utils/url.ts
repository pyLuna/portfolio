import { ObjectId } from "mongodb";

export default class Url {
    static home = "/";
    static resume = "https://docs.google.com/document/d/1QS0LDC0VqYZisg3flIPmfZQZCpB4dmP1M4beoZIe3-g/edit?usp=sharing";
    static theme = "/theme";
    static admin = {
        login: "/admin",
        home: "/admin/home",
        basic: "/admin/basic",
        change_password: "/admin/change-password",
        category: "/admin/category",
        contents: {
            view: "/admin/contents",
            create: "/admin/contents/create",
            update: (id: string | ObjectId) => `/admin/contents/update?id=${id}`,
        },
    }
}