import './test.css';

const Test = (props) => {

    return (
        <section className='test-section'>
            <h2>{props.name}</h2>
        </section>
    )

}

Test.defaultProps = {
    
    name: "None"

}

export default Test
