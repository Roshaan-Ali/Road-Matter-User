import * as types from './actionType';

// Auth Actions
export const user_sign_up = data => async dispatch => {
  try {
    dispatch({
      type: types.USER_SIGNUP,
      payload: {isUserLogin: true},
    });
  } catch (error) {
    console.log('Network Error');
  }
};

export const user_login = data => async dispatch => {
  try {
    dispatch({
      type: types.USER_LOGIN,
      payload: {isUserLogin: true},
    });
  } catch (error) {
    console.log('Network Error');
  }
};

export const user_logout = () => async dispatch => {
  try {
    dispatch({
      type: types.USER_LOGOUT,
      payload: {isUserLogin: false},
    });
  } catch (error) {
    console.log('Network Error');
  }
};

export const is_walk_thorugh_seen = () => async dispatch => {
  try {
    dispatch({
      type: types.SEEN_WALK_THROUGH,
      payload: {isWalkThroughSeen: true},
    });
  } catch (error) {
    console.log('Network Error');
  }
};
