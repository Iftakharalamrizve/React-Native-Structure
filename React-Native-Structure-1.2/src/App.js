import React from "react";
import LifecycleA from './LifecycleA'
class App extends React.Component {
    constructor() {
        super();
        this.state={}
        console.log(" App js Constructror ");

    }

    static getDerivedStateFromProps( props , state){
        console.log(" App js getDriveStateFromProps ");
        return null
    }

    componentDidMount(){
        console.log(" App js componentDidMound ");
        return null
    }



    render() {

        console.log(" App js Render ");

        return (
            <div>
                    <h3>Life cycle A Reload </h3>
                    <LifecycleA />
            </div>
          
        );
    }
}

    export default App;