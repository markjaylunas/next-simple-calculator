interface Props {
    element: string | JSX.Element;
    onClick: () => void;
}
const Button: React.FC<Props> = ({ element, onClick }) => (
    <button
        className="rounded-md px-4 py-1 border-2 border-sky-300 bg-sky-800 text-sky-100"
        onClick={onClick}
    >
        {element}
    </button>
);

export default Button;
