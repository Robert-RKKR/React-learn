import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Device = () => {

    const url = 'http://127.0.0.1:8000/api/inventory/device/3'
    const [device, setDevice] = useState(null)

    let content

    useEffect(() => {
        axios.get(url).then(response => {
            setDevice(response.data)
        })
    }, [url])

    if(device) {
        content = 
            <section className='test-section'>
                <h2>Device {device.name}</h2>
                <p>Created: {device.created}</p>
                <p>Updated: {device.updated}</p>
                <p>Hostname: {device.hostname}</p>
            </section>
    }

    return (
        <div>
            { content }
        </div>
    )

}

export default Device
