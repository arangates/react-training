const rootElement = document.getElementById('root');

class Counter extends React.Component {
    state = {count: 100}
    handleClick =() => this.setState(({count}) => ({count: count+1}))
    render() {
        return (
            <button onClick= {this.handleClick}>
                {this.state.count}
            </button>
        )
    }
}

const element = (
    <Counter />
)

ReactDOM.render(element, rootElement);

