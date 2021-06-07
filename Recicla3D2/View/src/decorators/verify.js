"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyLogged = void 0;
const $ = require("jquery");
const verifyLogged = (target, key) => {
    target[key] = localStorage.getItem('username');
    if (target[key]) {
        $("#signup").hide();
        $("#login").hide();
        $(".user-settings").show();
    }
    else {
        $(".user-settings").hide();
    }
};
exports.verifyLogged = verifyLogged;
