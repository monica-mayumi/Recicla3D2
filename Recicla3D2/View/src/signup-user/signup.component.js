"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
require("./signup.component.css");
class Sigup {
    constructor() {
        this.addEvents();
        this.registerUser();
    }
    addEvents() {
        $("input").each((_, e) => {
            e.oninput = _ => {
                const inputValues = [...document.getElementsByTagName('input')].map(e => e.value);
                const emptyInput = inputValues.includes('') ? false : true;
                const validate = (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test($("#email")[0].value);
                console.log('validate: ', emptyInput && validate);
                if (emptyInput && validate)
                    $(".btn-primary").removeClass("disabled");
                else
                    $(".btn-primary").addClass("disabled");
            };
        });
    }
    registerUser() {
        $(".btn-primary").click(function () {
            const nome = $("#nome")[0].value + ' ' + $("#sobrenome")[0].value;
            const usuario = $("#usuario")[0].value;
            const email = $("#email")[0].value;
            const senha = $("#senha")[0].value;
            if (nome !== '' && usuario !== '' && email !== '' && senha !== '') {
                const user = {
                    name: nome,
                    username: usuario,
                    email: email,
                    password: senha
                };
                $.ajax({
                    type: "POST",
                    url: "/user",
                    contentType: 'application/json; charset=utf-8',
                    success: function () {
                        console.log('enviado com sucesso!');
                        location.href = '../login';
                    },
                    data: JSON.stringify(user)
                });
            }
        });
    }
}
const sigup = new Sigup();
