import PropTypes from 'prop-types'

export default function Alert({type, content}) {
  return (
    <div className='row mt-4'>
      <div className='col-md-8 max-auto'>
        <div className={`alert alert-${type} d-flex align-items-center`}>
          <i className='bi bi-exclamation-triangle me-2'></i>
          <div>
            {content}
          </div>
        </div>
      </div>
    </div>
  )
}

// prop defining.
Alert.propTypes = {
  type: PropTypes.any,
  content:PropTypes.string
};