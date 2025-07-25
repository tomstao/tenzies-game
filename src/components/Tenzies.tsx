import * as React from "react";
import {useRef} from "react";

interface GridProps {
    className?: string; // optional background class or any class string
    children: React.ReactNode;
    locked?: boolean;
    onClick?: () => void;
}

interface Die {
    value: number;
    isLocked: boolean;
}

export default function Tenzies() {
    const random = (): number => Math.floor(Math.random() * 6 + 1)
    const buttonRef = useRef<HTMLButtonElement>(null);
    const reset = (): Die[] =>
        Array.from({ length: 10 }, () => ({
            value: random(),
            isLocked: false,
        })); // This is responsible for seed numbers when start or reset


    const [diceValues, setDiceValues] = React.useState<Die[]>(() => reset()); // Dice state


    const [win, setWin] = React.useState(()=>false); // wining state

    const toggleLock = (index: number) => {
        setDiceValues(prev =>
            prev.map((die, i) =>
                i === index ? {...die, isLocked: !die.isLocked} : die
            )
        );
    }; // toggle function to lock the die when user clicks it.

    // const checkWin = () => diceValues.length > 0 && diceValues.every(
    //     (dice) => ( dice.value === diceValues[0].value )
    // );

    // function checkWin(): void {
    //     if( diceValues.length === 0 ) return;
    //     if( diceValues.every((dice) => dice.value === diceValues[0].value) ) {
    //         setWin(true);
    //     }
    // }

    const handleRoll = (): void => {
        if (!win)
        {
            setDiceValues(
                prevState => prevState.map((die) => ({...die, value: die.isLocked ? die.value : random()})),
            )
        } else {
            setDiceValues(reset)
        }
    } // roll the dice before winning, and reset it when user wins.


    React.useEffect(() => {
        if (
            diceValues.length > 0 &&
            diceValues.every(die => die.value === diceValues[0].value && die.isLocked)
        ) {
            setWin(true);
            buttonRef.current?.focus();
        } else {
            setWin(false); // optional: resets win if they don't match anymore
        }
    }, [diceValues]);

    return (
        <>
            <div className="w-full max-w-[700px] mx-auto">
                <div className="grid grid-cols-5 gap-4 p-2">
                    {diceValues.map((die, i) => (
                        <Grid
                            key={i}
                            className={`${die.isLocked ? "bg-amber-500" : "bg-sky-500"} aspect-square`}
                            onClick={() => toggleLock(i)}
                        >
                            {die.value}
                        </Grid>
                    ))}
                </div>
            </div>

            <div className={'flex justify-center align-items-center'}>
                <button className={'text-5xl rounded-2xl bg-sky-600 px-3 py-1 hover:scale-105 text-blue-950 transition duration-300 ease-in-out border-2 border-amber-300'}
                        onClick={handleRoll}
                        ref={buttonRef}
                >
                    {win ? "Reset" : "Roll"}
                </button>
            </div>
            <div className="h-12 w-full text-center text-4xl text-green-600 mt-4">
                {win && "You win!"}
            </div>

        </>
    )
}


const Grid: React.FC<GridProps> = ({className, children, onClick}) => {
    return (
        <button
            onClick={onClick}
            className={`${className} text-center text-blue-950 rounded-2xl flex items-center justify-center text-5xl shadow-black shadow-sm transition duration-300 ease-in-out border-amber-300 border-2 hover:scale-105 `
            }>
            {children}
        </button>)
}