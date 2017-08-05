import React from 'react'

/* Stateless, functional component
*
*  Benefits:
*   - enforces best practices
*     - presentational component has single responsibility
*     - state managed by container component
*   - clean and easy to read/reason about
*   - easy to test
*/
const UserFeedback = ({feedbackText, progress}) => {
    return (
      <div className='UserFeedback'>
        <h4>
          Progress: {progress}% grown
        </h4>
        {feedbackText}
      </div>
    )
}

export default UserFeedback
