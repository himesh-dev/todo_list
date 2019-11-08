import * as actionTypes from "./actionTypes";

export const addBucket = payload => {
  return {
    type: actionTypes.ADD_BUCKET,
    payload
  };
};
export const addListItem = payload => {
  return {
    type: actionTypes.ADD_LIST_ITEM,
    payload
  };
};

export const addCurrentId = payload => {
  return {
    type: actionTypes.ADD_CURRENT_ID,
    payload
  };
};
export const updateListItem = payload => {
  return {
    type: actionTypes.UPDATE_LIST_ITEM,
    payload
  };
};
export const deleteListItem = payload => {
  return {
    type: actionTypes.DELETE_LIST_ITEM,
    payload
  };
};
