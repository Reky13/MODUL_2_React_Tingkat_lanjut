// Functional Component
const Cat= (props) => {
    // State declaration with Hook
    const [isHungry,setHungry] = React.usetate(true);

    //Return value with 35X
    return (
        <div>
            <p>I am {props.name}, and I am {isHungry ? " hungry" : "full"}</p>
            <button
            onClick={() => {
                // Change the state value
                setHungry(false);
            }}
            disabled={!isHungry}
        >
            {isHungry ? "pour me some nilk, please!" : "Thank you!"}

            </button>
        </div>
    );
}

const myElement = <Cafe />;
const myApp = myElement;

ReactDOOM.createRoot(document.getElementById('root')).render(myApp);