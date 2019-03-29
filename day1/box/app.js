function Box({ style,size, className = '', ...rest }) {
    const sizeClassName = size ? `box--${size}`:'';
    return (
        <div style={{ backgroundColor: 'black', color: 'white', ...style }}
            className={`box ${className} ${sizeClassName}`}
            {...rest}>
        </div>
    )
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
 * - React rerenders when state changes
 * 
 * - style prop is an object where key is camelcase and value is string
 * - className instead of class
 *
 *  - styles are vendor prefixed 
 *  - react synthesises the event system
 * 
 * 
 * STEPS to create a component 
 * - add static render method which renders some static UI
 * - figure out the dynamic pieces
 * - pull the dynamic parts from props
 * - wire from props to make sure everything flows
 * - switch to state from props
 * - add interactivity & the logic for interactivity later
 * 
 * - to update the state use the setState function
 * - if the logic depends on exisisting state use a updater function and return updated state
 * - clear any events when component unmounts
 * 
 *
 * Class components: 
 * Initialize state from props
 * - declare state as public class property like
 *      state = this.props
 * - event handlers must use the fat arrow always to avoid the  lexical .bind(this) 
 * 
 */