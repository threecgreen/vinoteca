// jsdom omits these, and react-router 7 needs them at import time
const { TextEncoder, TextDecoder } = require("util");
Object.assign(global, { TextEncoder, TextDecoder });
