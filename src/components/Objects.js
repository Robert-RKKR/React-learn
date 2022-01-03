import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Objects = (props) => {
    const { url } = props;

    const [objects, setDevice] = useState(null)

    let content

    useEffect(() => {
        axios.get(url).then(response => {
            setDevice(response.data)
        })
    }, [url])

    if(objects) {
        
        let devicesList = objects.results

        content = 
            <div className='test-box'>
                <button url='{objects.previous}'>Previous</button>
                <button url='{objects.next}'>Next</button>

                <p></p>
                {devicesList.map((item) => {
                    return <section  key={item.id} className='test-section'>
                        {/* <h2>Device {item.name}</h2>
                        <p>Created: {item.created}</p>
                        <p>Updated: {item.updated}</p>
                        <p>Hostname: {item.hostname}</p> */}
                        <h2>{item.id}</h2>
                        <p>Application: {item.application}</p>
                        <p>Severity: {item.severity}</p>
                        <p>Message: {item.message}</p>
                    </section>
                })};
            </div>

    }

    return (
        <div>
            { content }
        </div>
    )

}

export default Objects
