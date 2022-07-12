extern crate elvwasm;
extern crate serde_json;
extern crate serde;

use elvwasm::{implement_bitcode_module, jpc, register_handler};
use serde_json::{json};

implement_bitcode_module!("my_action", do_action);


#[no_mangle]
fn do_action<>(bcc: &mut elvwasm::BitcodeContext<>) -> CallResult {
    let http_p = &bcc.request.params.http;
    let _qp = &http_p.query;
    let id = &bcc.request.id;
    bcc.make_success_json(&json!(
        {
            "headers" : "application/json",
            "body" : "SUCCESS",
            "result" : "complete",
        }), id)
}