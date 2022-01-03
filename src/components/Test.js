import PropTypes from 'prop-types'
import './test.css';

const Test = (props) => {
    const { name, description } = props;

    return (
        <section className='test-section'>
            <h2>{name}</h2>
            <p>{description}</p>
        </section>
    )

}

Test.defaultProps = {
    // Use default values if not provided:
    description: "No description"

}

Test.propTypes = {
    // Name value is required:
    name: PropTypes.string.isRequired,
}

export default Test
