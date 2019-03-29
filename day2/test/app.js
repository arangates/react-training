const rootElement = document.getElementById('root');


class Tilt extends React.Component {


    componentDidMount() {
        console.log(this.rootNode);
        
        VanillaTilt.init(this.rootNode);
    }
    render() {

        return (
            <div>
                <div className='card card-5' ref={(node) => this.rootNode=node}>

                </div>
            </div>
        )

    }

}

const element = (
    <Tilt />
)

ReactDOM.render(element, rootElement)