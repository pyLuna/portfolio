import Url from "@/lib/utils/url";
import Link from "next/link";

const ContentsPage = () => {
    return (
        <section className="page">
            <h1>Contents</h1>

            <Link href={Url.admin.contents.create}>Create New</Link>

        </section>
    )
}

export default ContentsPage;