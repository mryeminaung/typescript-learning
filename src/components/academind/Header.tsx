type HeaderProps = {
    image: {
        src: string;
        alt: string;
    };
    children: React.ReactNode;
};

const Header = ({ children, image }: HeaderProps) => {
    return (
        <header>
            {/* spread out incoming props as key=value pairs defined for image */}
            {/* <img {...image} /> */}
            <img src={image.src} alt={image.alt} />
            {children}
        </header>
    );
};

export default Header;
