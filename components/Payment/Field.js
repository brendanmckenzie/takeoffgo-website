import React from 'react'
import PropTypes from 'prop-types'

const Field = ({ name, label, type, autoFocus, placeholder, value, onChange }) => (
  <div className='field'>
    <label className='label' htmlFor={name}>{label}</label>
    <div className='control'>
      <input
        id={name}
        className='input'
        type={type || 'text'}
        autoFocus={autoFocus}
        placeholder={placeholder}
        value={value || ''}
        onChange={onChange} />
    </div>
  </div>
)

Field.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default Field
