import actionTypes from 'redux/actionTypes'

const orderActions = {
    update : (data) => {
        return {
            type: actionTypes?.UPDATE_ORDER,
            data: data
        }
    }
}

export default orderActions