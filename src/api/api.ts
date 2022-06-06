import { AssistantAppState, createAssistant, createSmartappDebugger } from "@sberdevices/assistant-client";

export const initialize = (getState: () => AssistantAppState, getRecoveryState: () => unknown) => {
  if (process.env.NODE_ENV === "development") {
    return createSmartappDebugger({
      token: process.env.REACT_APP_USER_TOKEN!,
      initPhrase: "запустить тудулист",
      getState,
      getRecoveryState,
      enableRecord: true,
      nativePanel: {
        defaultText: "Что Вы хотите сделать сегодня?",
      },
      recordParams: {
        defaultActive: true,
      },
    });
  }

  return createAssistant({ getState, getRecoveryState });
};
