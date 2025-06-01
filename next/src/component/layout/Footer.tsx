
const Footer = () => {

    const getYear = () => {
        return new Date().getFullYear();
    }

    return (
        <footer className="border-t flex flex-col items-center gap-2 py-4">

            <p className="">Copyright &copy; {getYear()}</p>
            <small className="flex gap-2">
                Created by
                <a
                    href="https://github.com/pyLuna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-foreground font-bold"
                >
                    John Joshua Celis
                </a>
            </small>
        </footer>
    )
}

export default Footer;