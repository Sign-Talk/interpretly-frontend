import Types from "../../ActionTypes/Client/userActionTypes";
import { EMAIL_VERIFICATION } from "../../ActionTypes/ModalActionTypes";
import { SET_VERIFY } from "../../ActionTypes/HeroActionTypes";
import ApiEndpoints from "../../ApiEndpoints";
import Axios from "axios";

export const registerUser = (userData, history) => async (dispatch) => {
  try {
    dispatch({
      type: Types.REGISTER_CLIENT_PROGRESS,
    });
    const { data } = await Axios({
      baseURL: `${ApiEndpoints.BASE_URL}/${ApiEndpoints.CLIENT_REGISTER}`,
      method: "POST",
      data: userData,
    });
    if (data) {
      return (
        dispatch({
          type: Types.REGISTER_CLIENT_SUCCESS,
          payload: data,
        }),
        dispatch({
          type: SET_VERIFY,
          payload: data.details[0].email,
        }),
        dispatch({
          type: EMAIL_VERIFICATION,
          payload: true,
        })
      );
    }
  } catch (error) {
    dispatch({
      type: Types.REGISTER_CLIENT_FAILURE,
      payload: error.response?.data?.message,
    });
  }
};

export const loginUser = (userData, history) => async (dispatch) => {
  try {
    dispatch({
      type: Types.LOGIN_CLIENT_PROGRESS,
    });
    const { data } = await Axios({
      baseURL: `${ApiEndpoints.BASE_URL}/${ApiEndpoints.CLIENT_LOGIN}`,
      method: "POST",
      data: userData,
    });
    if (data) {
      localStorage.setItem("userToken", data.token);
      dispatch({
        type: Types.LOGIN_CLIENT_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: Types.LOGIN_CLIENT_FAILURE,
      payload: error.response?.data,
    });
    // if the user hasn't verified it's email id
    if (error.response?.data?.email) {
      return (
        dispatch({
          type: EMAIL_VERIFICATION,
          payload: true,
        }),
        dispatch({
          type: SET_VERIFY,
          payload: error.response?.data?.email,
        })
      );
    }
  }
};

export const resetPass = (email, history) => async (dispatch) => {
  try {
    dispatch({
      type: Types.RESET_PASS_PROGRESS,
    });
    const { data } = await Axios({
      baseURL: `${ApiEndpoints.BASE_URL}/${ApiEndpoints.CLIENT_RESET_PASS}=${email}`,
      method: "POST",
    });
    if (data) {
      dispatch({
        type: Types.RESET_PASS_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: Types.RESET_PASS_FAILURE,
      payload: error.response?.data,
    });
  }
};
