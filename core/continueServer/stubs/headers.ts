import { constants, getTimestamp } from "../../deploy/constants.js";

export async function getHeaders() {
  return {
    key: constants.c,
    timestamp: getTimestamp(),
    v: "1",
  };
}
