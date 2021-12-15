export default {
  Messages: (status, payload) => (status.messages = payload),
  IsmessagesFetched: (status, payload) => (status.ismessagesFetched = payload),
  IsMessageSend:(state,payload) => state.isMessageSend = payload
};
