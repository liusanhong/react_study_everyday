import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

const apiUrl = process.env.REACT_APP_API_URL;

function App() {
    useEffect(() => {
        console.log("apiUrl::", apiUrl);
    })

    const a = (b: Parameters<typeof useEffect>)=>{

    }

    type b = Parameters<typeof useEffect>;
    // const xiaoMing: Partial<Person> = {name: "liu"}

    type Person = {
        name:string,
        age:number
    }

    type keyTe = keyof Person;

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
