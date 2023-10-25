import {REQUEST_STATUS} from "../../../constants/statuses.js";

export const selectRequest = (state) => state.request;

export const selectRequestStatus = (state, requestId) => selectRequest(state)[requestId]?.status || REQUEST_STATUS.idle;

