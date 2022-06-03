import { createSmartappDebugger, createAssistant } from "@sberdevices/assistant-client";
 
export const initialize = (getState, getRecoveryState) => {
 if (process.env.NODE_ENV === 'development') {
    return createSmartappDebugger({
   token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmZjAwMTUyYjFjZTQyNGI2ZTljYzQ4ZGRkNTFiYTVmNzFlYTI5ZjBkNWJjZGEzNjEwYzk0ZjZkNTBiN2M4MjY3MjUyODMiLCJhdWQiOiJWUFMiLCJleHAiOjE2NTQzNDUwMzcsImlhdCI6MTY1NDI1ODYyNywiaXNzIjoiS0VZTUFTVEVSIiwidHlwZSI6IkJlYXJlciIsImp0aSI6IjFiODI0MjQ3LTRhZTEtNDcxZS1iNTA2LWRkYWEyNzVkZjZiYSIsInNpZCI6IjEzNTY5N2RiLTI4YmItNDYzNy04NDNmLTJmMjBlYmM5YjViZiJ9.I8LcaPZhwSLFGSdzmKGK9INF80Y1wC_a6kfHI3nsBSGHF47MC17zvJHM-LovUTHwdPd3ceIIOH64tqnvp9pOt46LAn3a3er_ON1R79OSlQikKuysEoKuObiZNPnsepzL-RdT1EKLXMa_grKtuVcZzECTBFtMcGknBtc58Igampm19Wo1-Gq5TNXm36Uw0Zx9P8VFLXnpDcAK9-1rYXW4oU494lU4JjQN6-1V4rlxqCU9VlmWqZSoTSNTx4MS59U3uVLFQHFMqhqIGbskn5YW5n3majJ8Cx_9dpqbuXyJXBF00uliF1tiI87BCsxpTffDV0rtMnlT8zx853SZPZthUQ5886o-Tcrx1I-Yc4asdrnD3kmUGO4t4S2VO2KMDl9SHi4sqpZDXkK6iZk8QQJPFpojjXrB2HfXRbrsK1cvgDh64yhIi4epTuggmNjHvakitdwtS_Hn17oXrjHbx9OJ2xlkXNXYCDI-V9DAFEv7aBE9NuDoKjS1unA1xGMTha3mFLazPgDw6YKSc4QJSF8cYafZ_Nl_NmTu-QKja_lZ7_hPkm-Msg_t6pc3vLml4XPcV8yy4gxTABctM9Pm9b8Uo2C6WXrKdrNtcRD4c3rk_P0SfKnIzkDfzoMf5f9_RvcFFpaPpq4_pQhi6jCQBv98xnTpyP72_HxMR4WoEcLUJVg',
   initPhrase: "запустить тудулист",
   getState,
   getRecoveryState,
   enableRecord: true,
   recordParams: {
     defaultText: 'Что Вы хотите сделать сегодня?',
     defaultActive: true,
   },
 });
 }
    console.log('initialize');
 return createAssistant({getState, getRecoveryState});
};