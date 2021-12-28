import './test.css';

const Test = (props) => {

    return (
        <section className='test-section'>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </section>
    )

}

Test.defaultProps = {
    
    name: "None",
    description: "None"

}

export default Test
