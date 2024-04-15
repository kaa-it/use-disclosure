import {useState} from 'react'
import './App.css'

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <button onClick={toggle}>Открыть или закрыть блок с текстом</button>
            {isOpen &&
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet aspernatur commodi deserunt
                    dolorem, dolores eius eos, error et iusto nihil nostrum pariatur reprehenderit sint, tenetur vel
                    vero! Quae, quod.
                </h2>
            }
        </>
    )
}

export default App
