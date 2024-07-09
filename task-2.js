"use strict";

function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    return message;
  } else {
    return message.slice(maxLength) + "...";
  }
}
