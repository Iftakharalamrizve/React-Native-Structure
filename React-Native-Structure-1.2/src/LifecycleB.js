import React from 'react'

class LifecycleB extends React.Component{

    constructor() {
        super();
        this.state={}
        console.log(" Lifecycle B Constructror ");

    }

    static getDerivedStateFromProps( props , state){
        console.log(" Lifecycle B getDriveStateFromProps ");
        return null
    }

    componentDidMount(){
        console.log(" Lifecycle B js componentDidMound ");
        return null
    }

    render(){
        console.log("Lifecycle B Render Run");

        return <div>Lifecycle B renderd</div>
    }
}

export default LifecycleB;