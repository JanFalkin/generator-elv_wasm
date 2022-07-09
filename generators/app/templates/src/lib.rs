extern crate elvwasm;
extern crate serde_json;

use elvwasm::ErrorKinds;
use elvwasm::{implement_bitcode_module, jpc, register_handler, BitcodeContext};

implement_bitcode_module!("my_action", do_action);


#[no_mangle]
fn do_action<>(bcc: &mut elvwasm::BitcodeContext<>) -> CallResult {
    let _http_p = &bcc.request.params.http;
    let _qp = &http_p.query;
    bcc.make_success_json(&json!(
        {
            "headers" : "application/json",
            "body" : "SUCCESS",
            "result" : body_hash,
        }), id)
}