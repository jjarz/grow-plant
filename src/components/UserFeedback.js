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
const UserFeedback = ({feedbackText}) => {
    return (
      <div>
        {feedbackText}
      </div>
    )
}

export default UserFeedback
