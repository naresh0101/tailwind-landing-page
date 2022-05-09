import FooterImage from '../../assets/footer.png'

export default function Footer() {
    return (
        <div>
            <footer>
                <section className="text-white body-font">
                    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                        <img
                            className="object-contain h-24 w-64"
                            src={FooterImage?.src}
                            alt="footer logo"
                        />
                    </div>
                </section>
            </footer>
        </div>
    )
}
