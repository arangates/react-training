function Box({ style,size, className = '', ...rest }) {
    const sizeClassName = size ? `box--${size}`:'';
    return (
        <div style={{ backgroundColor: 'black', color: 'white', ...style }}
            className={`box ${className} ${sizeClassName}`}
            {...rest}>
        </div>
    )
}

Box.propTypes = {
    size: PropTypes.string,
    style: PropTypes.object
}

const element = (
    <div>
        <Box size='small'
            style={{ backgroundColor: 'red', color: 'white' }}  >
            small box
        </Box>
        <Box size='medium'
            style={{ backgroundColor: 'red', color: 'white' }}  >
            medium box
        </Box>
        <Box size='large'
            style={{ backgroundColor: 'red', color: 'white' }}  >
            large box
        </Box>
    </div>
)
ReactDOM.render(element, document.getElementById('root'));


/**
 * - need React and React-Dom globals
 * 
 * - React.createElement(type:string , attributes:object , ...childrens)
 *   created element creates an object , this object contains an important property named props
 * - props is an object which contains the attributes
 * 
 *  -    need babel transpiler 
 * - templating is in JSX , babel transpiles JSX to js
 * - interpolation using {}
 * - immediately invoked arrow function
 * - common thing is to create single object called props and spread in element
 * -  Overriding techniques
 * - self-closing tag
 * 
 * - JSX compiles down to React.createElement and composes well ! 
 * 
 * PropTYpes are the validators for props
 * for class comp - use static property called propTypes
 * for func comp - Add property called propTypes to the function
 * the keys of the propTypes is the name of the props of the component
 * the values is the PropTypes function which we can find in PropTypes docs(import prop-types) 
 */