const rootElement = document.getElementById('root')

class TodoList extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.items.map((item) => (
                        <li key={item.id}>{item.text}</li>
                    ))
                }
            </div>
        )
    }
}

class TodoApp extends React.Component {
    state = { items: [], text: '' }
    handleOnSubmit = (e) => {
        e.preventDefault()
        this.setState(state => ({
            items: state.items.concat({
                text: this.state.text,
                id: Date.now()
            }),
            text: ''
        }));

    }

    handleOnChange = (e) => {
        this.setState({ text: e.target.value })
    }

    render() {
        return (
            <div>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleOnSubmit}>
                    <h3>what you want to do?</h3>
                    <input value={this.state.text} onChange={this.handleOnChange} />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

class Timer extends React.Component {
    state= {seconds:0}
    componentDidMount() {
       this.interval = setInterval(() => this.tick() ,1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    tick() {
        this.setState(state=>({seconds:state.seconds+1}))
    }
    render() {
        return (
            <div>{this.state.seconds}S</div>
        )
    }
}

const element = (
    // <TodoApp />
    // <Timer />
)

ReactDOM.render(element, rootElement)