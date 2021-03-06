import React from 'react';
import Option from './option/Option';

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOption}>Remove All</button>
            {props.options.length === 0 && <p>Add an option to start</p>}
            {
                props.options.map((option) => 
                <Option 
                    key={option} 
                    optionText={option}
                    handleDeleteOne={props.handleDeleteOne}
                />
                )
            }
            
        </div>
        );
}

//Above stateless functinal component. The keword 'this' is not needed when using it.
// class Options extends Component {
//   render() {
//     return (
//     <div>
//         <button onClick={this.props.handleDeleteOption}>Remove All</button>
//         {
//             this.props.options.map((option) => <Option key={option} optionText={option}/>)
//         }
        
//     </div>
//     );
//   }
// }

export default Options;
