const state = {
    eventCount: 0,
    userName: ''
}

function App(props) {
    return (
        <div>
            <p>User Clicks {state.eventCount}</p>
            <button onMouseOver={incrementClick}
                    onClick={incrementClick}>
                🦄
            </button>
            <p>Username is {state.userName}</p>
            <input value={state.userName}
                    onBlur= {updateName}
                   onChange= {updateName} />
        </div>
    )
}
function incrementClick() {
    setState({ eventCount: state.eventCount + 1 });
}

function updateName(event) {
    setState({ userName: event.target.value });
}

function setState(newState) {
    Object.assign(state, newState);
    renderApp();
}

function renderApp() {
    ReactDOM.render(<App />,document.getElementById('root'))
}

renderApp()