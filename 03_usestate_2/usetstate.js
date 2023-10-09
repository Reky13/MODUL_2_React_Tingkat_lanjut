//Fuctional Component
const MyApp = () => {
    //State Declaration with Hook
    const [title_1, setTitle_1] = React.useState("what are ypu studying");
    const [title_2, setTitle_2] = React.useState("Learn What Else?");

    // Arrow Function
    const handleButtonClick = () => {
        //Change the state value
        setTitle_1("Learn Javascript");
        setTitle_2("Learn React");
    }

    return (
        <div>
            <h3>{title_1}</h3>
            <h3>{title_2}</h3>
            <button onClick={handletButtonClick}>Ayo belajar Pemrograman</button>
        </div>
    )
}

const myElement = <MyApp />;
const myApp = myElement;