import {
    register,
    handleCall,
    hostCall,
    handleAbort,
    consoleLog,
  } from "../assembly";

  import { JSON, JSONDecoder, JSONEncoder, JSONHandler } from "assemblyscript-json";
  import {
    BitcodeContext,
    registerHandler,
    _jpc,
  } from "../include/bitcode-context";


  register("_jpc", _jpc)
  registerHandler("action", doAction)


  // This must be present in the entry file.
export function __guest_call(operation_size: usize, payload_size: usize): bool {
  return handleCall(operation_size, payload_size);
}

function doAction(bcc : BitcodeContext) : ArrayBuffer {
  return bcc.ReturnSuccessBuffer(`{"body" : "SUCCESS"}`);

}
