import React from 'react';



export class MyComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }
    
    render() {
        return (<div>
            
            <button onClick={ ()=> this.setState({count: this.state.count +1})}>Plus</button>
            <button onClick={() => {
                if (this.state.count === 0) { this.setState({ count: this.state.count }) } else {
                    this.setState({ count: this.state.count - 1 })
                }    
            }}>Minus</button>
            <p>{this.state.count}</p>
        </div>)
    }
}