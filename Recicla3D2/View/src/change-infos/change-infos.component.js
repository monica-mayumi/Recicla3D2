"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
require("./change-infos.component.css");
class ChangeInfos {
    constructor() {
        this.userInfo = {};
        this.holdUserFields();
    }
    holdUserFields() {
        const userId = Number(localStorage.getItem('userId'));
        $.get(`/user/${userId}`, user => {
            this.userInfo = user;
            const name = user.name.split(' ');
            $("#nome").val(name[0]);
            $("#sobrenome").val(name[1]);
            $("#usuario").val(user.username);
            $("#email").val(user.email);
        });
        this.addEvents();
    }
    addEvents() {
        $("input").each((_, e) => {
            e.oninput = _ => {
                const inputValues = [...document.getElementsByClassName('user-input')].map(e => e.value);
                const emptyInput = inputValues.includes('') ? false : true;
                const validate = (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(document.getElementById('email').value);
                if (emptyInput && validate) {
                    $(".btn-success").removeAttr('disabled');
                }
                else {
                    $(".btn-success")[0].setAttribute('disabled', 'disabled');
                }
            };
        });
        this.updateInfos();
    }
    updateInfos() {
        $(".btn-success").click(() => {
            const getElementByIdFactory = (id) => document.getElementById(id).value;
            const userUpdated = {
                userId: Number(localStorage.getItem('userId')),
                name: getElementByIdFactory('nome') + ' ' + getElementByIdFactory('sobrenome'),
                username: getElementByIdFactory('usuario'),
                email: getElementByIdFactory('email')
            };
            if (getElementByIdFactory('nova-senha') === '') {
                userUpdated.password = this.userInfo.password;
            }
            else {
                userUpdated.password = getElementByIdFactory('nova-senha');
            }
            if (getElementByIdFactory('senha') === this.userInfo.password) {
                $(".alert-danger").addClass('d-none');
                $.ajax({
                    type: "PUT",
                    url: `/user/${userUpdated.userId}`,
                    contentType: 'application/json; charset=utf-8',
                    success: function () {
                        console.log('enviado com sucesso!');
                        localStorage.setItem('username', getElementByIdFactory('usuario'));
                        location.href = '/';
                    },
                    data: JSON.stringify(userUpdated)
                });
            }
            else {
                $(".alert-danger").removeClass('d-none');
            }
        });
    }
}
const changeInfos = new ChangeInfos();
