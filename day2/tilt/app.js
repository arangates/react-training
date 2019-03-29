const rootElement = document.getElementById('root');

class Tilt extends React.Component {

    componentDidMount() {
        VanillaTilt.init(this.rootElement, {
            max: 25,
            speed: 400,
            glare: true,
            'max-glare': 0.5
        })

    }
    render() {
        return (
            <div ref={(ele) => this.rootElement = ele} className="card card-5" />
        )
    }
}


const element = (
    <Tilt />
)

ReactDOM.render(element, rootElement);