import { useEffect, useState } from 'react';
import Button from './Button';
import Input from './Input';

interface Input {
    first: number;
    second: number;
}

const Calculator: React.FC = () => {
    const [input, setInput] = useState<Input>({ first: 0, second: 0 });
    const [result, setResult] = useState<number>(0);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputName = event.target.name;
        const inputValue = Number(event.target.value);
        setInput((prevInput) => {
            return {
                ...prevInput,
                [inputName]: inputValue,
            };
        });
    };

    const reset = () => {
        setInput({ first: 0, second: 0 });
    };

    useEffect(() => {
        setResult(input.first + input.second);
    }, [input]);
    return (
        <>
            <h1 className="font-semibold text-4xl text-sky-500 ">
                Calculator App
            </h1>
            <div className="md:flex-row flex flex-col justify-center items-center gap-5">
                <div className="flex flex-col justify-center items-start gap-2">
                    <label htmlFor="first" className="text-sky-100 font-medium">
                        First Value
                    </label>
                    <input
                        name="first"
                        id="first"
                        type="number"
                        value={input.first}
                        onChange={onChange}
                        className="rounded-md px-4 py-2 "
                    />
                </div>
                <div className="flex flex-col justify-center items-start gap-2">
                    <label htmlFor="first" className="text-sky-100 font-medium">
                        Second Value
                    </label>
                    <input
                        name="second"
                        id="second"
                        type="number"
                        value={input.second}
                        onChange={onChange}
                        className="rounded-md px-4 py-2 "
                    />
                </div>
            </div>
            <span className="font-semibold text-4xl text-sky-100">
                Sum:
                <span className="pl-4">{result}</span>
            </span>
            <Button element="Reset" onClick={reset} />
        </>
    );
};

export default Calculator;
