const rootElement = document.getElementById('root');

class StopWatch extends React.Component {
    state = { lapse: 0, running: false }
    handleInitiate = () => {

        this.setState(state => {
            if (state.running) {
                clearInterval(this.timer)
            } else {
                const startTime = Date.now() - this.state.lapse;
                this.timer = setInterval(() => {
                    this.setState({ lapse: Date.now() - startTime })
                })
            }
            return { running: !state.running }
        })
    }
    handleClear = () => {
        clearInterval(this.timer)
        this.setState({ lapse: 0, running: false });
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        const { lapse, running } = this.state
        const labelStyle = {
            width: '100%',
            textAlign: 'center',
            fontSize: 20
        }
        const buttonStyles = {
            padding: 10,
            margin: 10,
            width: 200,
            color: 'red',
            border: '1px solid black',
            backgroundColor: 'transparent'

        }
        return (
            <div className='container'>
                <label style={labelStyle}>
                    {lapse} ms
            </label>
                <div className='actions'>
                    <button style={buttonStyles}
                        onClick={this.handleInitiate}>
                        {running ? 'stop' : 'start'}
                    </button>
                    <button style={buttonStyles}
                        onClick={this.handleClear}>
                        Clear
                </button>
                </div>
            </div>
        )
    }
}


const element = (
    <StopWatch />
)

ReactDOM.render(element, rootElement);