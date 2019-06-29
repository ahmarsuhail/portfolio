import React, {Component} from 'react'
import data from './skills.json'

class Graph extends Component {

    constructor() {
        super();
        this.state = {};
        console.log(data);
    }


    render() {
        return (
            <div>
                Hello!
             </div>   
        )
    }

}


export default Graph;