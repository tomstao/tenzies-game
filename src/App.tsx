import './App.css'
import Tenzies from "./components/Tenzies.tsx";

function App() {

    return (
        <>
            <main className="h-screen w-screen flex flex-col  justify-center">
                <div>
                <h1
                className={"bg-sky-500 text-center text-6xl p-2 w-fit m-auto rounded-2xl shadow-2xl mb-2"}>Tenzies!</h1>
                <Tenzies/>
                </div>
            </main>
        </>
    )
}

export default App
