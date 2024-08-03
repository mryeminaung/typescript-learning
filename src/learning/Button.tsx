/*
// extending interfac

interface BtnProps {
    color?: string;
    children?: React.ReactNode;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

interface superButtonProps extends BtnProps {
    supProps?: string;
}
*/

// intersecting type
type BtnProps = {
    color?: string;
    children?: React.ReactNode;
    setCount: React.Dispatch<React.SetStateAction<number>>;
};

type superButtonProps = BtnProps & {
    supProps?: string;
};

const Button = ({ children, color, setCount, ...rest }: superButtonProps) => {
    const myStyle = { color };

    const handleCount = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        console.log(e);
        setCount((pre) => pre + 1);
    };

    return (
        <button {...rest} onClick={handleCount} style={myStyle}>
            {children}
        </button>
    );
};

export default Button;
