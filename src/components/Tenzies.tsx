import * as React from "react";

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
    const random = () => Math.floor(Math.random() * 6 + 1)
    const [diceValues, setDiceValues] = React.useState<Die[]>(
        Array.from({length: 10}, () => ({
                value: random(),
                isLocked: false,
            }
        ))
    );

    const [win, setWin] = React.useState(false);

    const toggleLock = (index: number) => {
        setDiceValues(prev =>
            prev.map((die, i) =>
                i === index ? {...die, isLocked: !die.isLocked} : die
            )
        );
    };

    // const checkWin = () => diceValues.length > 0 && diceValues.every(
    //     (dice) => ( dice.value === diceValues[0].value )
    // );

    // function checkWin(): void {
    //     if( diceValues.length === 0 ) return;
    //     if( diceValues.every((dice) => dice.value === diceValues[0].value) ) {
    //         setWin(true);
    //     }
    // }

    const handleClick = () => {
        setDiceValues(
            prevState => prevState.map((die) => ({...die, value: die.isLocked ? die.value : random()})),
        )
    }

    React.useEffect(() => {
        if (
            diceValues.length > 0 &&
            diceValues.every(die => die.value === diceValues[0].value)
        ) {
            setWin(true);
        } else {
            setWin(false); // optional: resets win if they don't match anymore
        }
    }, [diceValues]);

    return (
        <>
            <div className="grid grid-cols-5 grid-rows-2 gap-4 h-50 p-2">
                {diceValues.map((die, i) => (
                    <Grid key={i} className={die.isLocked ? `bg-amber-500` : `bg-sky-500`}
                          onClick={() => toggleLock(i)}>{die.value}</Grid>
                ))}
            </div>

            <div className={'flex justify-center align-items-center'}>
                <button className={'text-5xl rounded-2xl bg-sky-600 p-2 hover:scale-105'}
                        onClick={handleClick}
                >
                    Roll
                </button>
            </div>
            <div className="h-12 w-full text-center text-4xl text-green-600 mt-4">
                {win && "You win"}
            </div>

        </>
    )
}


const Grid: React.FC<GridProps> = ({className, children, onClick}) => {
    return (
        <button
            onClick={onClick}
            className={`${className} text-center rounded-2xl flex items-center justify-center text-5xl hover:shadow-blue-500 hover:shadow-2xl`
            }>
            {children}
        </button>)
}