# generator-elv-wasm
project generator for an eluvio content fabric bitcode module

eg for Rust
```
(base) ❯ yo elv-wasm

     _-----_     ╭──────────────────────────╮
    |       |    │  Create your own Eluvio  │
    |--(o)--|    │  content fabric bitcode  │
   `---------´   │         library!         │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

? Your project name newname
? Your email for contact jan@somecompany.co
? License type MIT
? repo url https://www.github.com/myrepo
? What source language would you like to create? Rust Language
   create Cargo.toml
   create src/lib.rs
   create tests/lib.rs
------------
***---***
Jobs is Done!
------------
***---***

(base) ❯ cargo build --target wasm32-unknown-unknown --release --workspace
   Compiling proc-macro2 v1.0.40
   Compiling unicode-ident v1.0.1
   Compiling quote v1.0.20
   Compiling syn v1.0.98
   Compiling version_check v0.9.4
   Compiling serde_derive v1.0.139
   Compiling memchr v2.5.0
   Compiling serde v1.0.139
   Compiling atty v0.2.14
   Compiling log v0.4.17
   Compiling serde_json v1.0.82
   Compiling unicode-width v0.1.9
   Compiling ryu v1.0.10
   Compiling unicode-segmentation v1.9.0
   Compiling itoa v1.0.2
   Compiling quick-error v1.2.3
   Compiling cfg-if v1.0.0
   Compiling anyhow v1.0.58
   Compiling regex-syntax v0.6.27
   Compiling bitflags v1.3.2
   Compiling ansi_term v0.12.1
   Compiling termcolor v1.1.3
   Compiling lazy_static v1.4.0
   Compiling strsim v0.8.0
   Compiling vec_map v0.8.2
   Compiling unicode_categories v0.1.1
   Compiling scopeguard v1.1.0
   Compiling base64 v0.13.0
   Compiling proc-macro-error-attr v1.0.4
   Compiling proc-macro-error v1.0.4
   Compiling textwrap v0.11.0
   Compiling humantime v1.3.0
   Compiling heck v0.3.3
   Compiling wapc-guest v0.4.0
   Compiling clap v2.34.0
   Compiling aho-corasick v0.7.18
   Compiling regex v1.6.0
   Compiling env_logger v0.7.1
   Compiling thiserror-impl v1.0.31
   Compiling structopt-derive v0.4.18
   Compiling structopt v0.3.26
   Compiling thiserror v1.0.31
   Compiling snailquote v0.3.1
   Compiling json_dotpath v1.1.0
   Compiling wapc v0.10.1
   Compiling elvwasm v0.1.0 (https://github.com/eluv-io/elv-wasm?branch=main#f7db099f)
   Compiling eluvio_rust v0.0.1 (/home/jan/newtoolchain/test-generated)
    Finished release [optimized] target(s) in 14.47s

    ❯ wasm-gc ./target/wasm32-unknown-unknown/release/newname.wasm ./target/wasm32-unknown-unknown/release/newname.wasm

    ❯ ls -al target/wasm32-unknown-unknown/release/newname.wasm
            -rwxrwxr-x 2 jan jan 238849 Jul 12 19:41 target/wasm32-unknown-unknown/release/newname.wasm

```

```
(base) ❯ yo elv-wasm

     _-----_     ╭──────────────────────────╮
    |       |    │  Create your own Eluvio  │
    |--(o)--|    │  content fabric bitcode  │
   `---------´   │         library!         │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

? Your project name newname
? Your email for contact jan@somecompany.co
? License type MIT
? repo url https://www.github.com/myrepo
? What source language would you like to create? AssemblyScript Language
   create package.json
   create assembly/index.ts
   create assembly/tsconfig.json
   create include/bitcode-context.ts
   create as/lib.ts
------------
***---***
Jobs is Done!
------------
***---***

~/newtoolchain/test-generated   11s
(base) ❯ npm run asbuild

> eluvio_asm@0.0.1 asbuild
> npm run asbuild-all-untouched


> eluvio_asm@0.0.1 asbuild-all-untouched
> npm run asbuild-lib:untouched


> eluvio_asm@0.0.1 asbuild-lib:untouched
> asc as/lib --use abort= -b as/lib.wasm -t as/lib.wat

❯ wasm-gc ./as/lib.wasm ./as/lib.wasm

❯ ls -al ./as/lib.wasm
-rw-rw-r-- 1 jan jan 55093 Jul 12 19:50 ./as/lib.wasm


```