import React, {Component} from "react"
import axios from "axios"

class Api extends Component {

    constructor(props) {
        super(props)
        this.state = {
            devices: []
        }
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/api/inventory/color")
        .then(response => {
            this.setState({
                devices: response.data
            })
        })
    }

    render() {
        const {devices} = this.state
        console.log(devices)
        //const dev = devices.results
        return (
            <div>
                <h1>Devices</h1>
                {
                    // devices.results.map((device) => {
                    //     return <div key={device.id}>{device.name}</div>
                    // })
                }
            </div>
        )
    }

}

export default Api
