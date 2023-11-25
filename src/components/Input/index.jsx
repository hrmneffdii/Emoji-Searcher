import PropTypes from 'prop-types'
import styles from './Input.module.css'

const Input = ({onChange}) =>{
    return (
        <input 
        className={styles.input}
        onChange={onChange}
        placeholder='search ...'
        />
    )
}

Input.propTypes = {
    onChange : PropTypes.func,
}

export default Input