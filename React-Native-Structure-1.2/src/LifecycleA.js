import React from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends React.Component{

    constructor() {
        super();
        this.state={}
        console.log(" Lifecycle A Constructror ");

    }

    static getDerivedStateFromProps( props , state){
        console.log(" Lifecycle A getDriveStateFromProps ");
        return null
    }

    componentDidMount(){
        console.log(" Lifecycle A js componentDidMound ");
        return null
    }

    render(){
        console.log("Lifecycle A Render Run");

        return <div>Life cycle A renderd<LifecycleB/></div>
    }
}

export default LifecycleA;