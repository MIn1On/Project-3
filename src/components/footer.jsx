function Footer() {
    return <footer className="page-footer purple lighten-3">
        <div className="footer-copyright ">
            <div className="container">
                {new Date().getFullYear()}
                Made by Golovchenko
                <a className="greay-text text-lighten-4 right" href="#!">Repository</a>
            </div>
        </div>
    </footer>
}
export { Footer };