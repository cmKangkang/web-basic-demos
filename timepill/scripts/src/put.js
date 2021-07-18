import { dateToString, ifDateStringValid } from '../utils/format.js';
import getKey from '../utils/key.js';
function init() {
    let timeNode = document.querySelector('#time') || null;
    let time = dateToString(new Date());
    timeNode.value = time;
    let nameNode = document.querySelector("#name") || null, emailNode = document.querySelector("#email") || null, infoNode = document.querySelector("#info") || null, tipNode = document.querySelector("#tip") || null, keyNode = document.querySelector("#key") || null;
    let submitBtn = document.querySelector(".submit-btn");
    // 选出form-item父节点，用于删除子节点
    let form = document.querySelectorAll('.form-item');
    submitBtn.addEventListener('click', () => {
        removeErrs();
        let name = nameNode.value || '', email = emailNode.value || '', info = infoNode.value, time = timeNode.value, tip = tipNode.value, key = '';
        let flag = true;
        if (name.trim().length === 0) {
            // 名字必须填写
            let err = document.createElement('div');
            err.className = 'err';
            err.innerText = `名字 必须填写.`;
            form[0].insertBefore(err, nameNode);
            flag = false;
        }
        if (email.trim().length === 0) {
            // 邮箱未填写
            let err = document.createElement('div');
            err.className = 'err';
            err.innerText = `邮箱 必须填写.`;
            form[1].insertBefore(err, emailNode);
            flag = false;
        }
        else {
            let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            if (!reg.test(email)) {
                let err = document.createElement('div');
                err.className = 'err';
                err.innerText = `邮箱 必须是一个有效的电子邮箱地址.`;
                form[1].insertBefore(err, emailNode);
                flag = false;
            }
        }
        if (time.trim().length === 0) {
            // time必须填写、
            let err = document.createElement('div');
            err.className = 'err';
            err.innerText = `打开时间 必须填写.`;
            form[2].insertBefore(err, timeNode);
            flag = false;
        }
        else {
            if (!ifDateStringValid(time)) {
                let err = document.createElement('div');
                err.className = 'err';
                err.innerText = `打开时间 格式不正确.`;
                form[2].insertBefore(err, timeNode);
                flag = false;
            }
        }
        if (info.trim().length === 0) {
            // 必须填写内容
            let err = document.createElement('div');
            err.className = 'err';
            err.innerText = `内容 必须填写.`;
            form[3].insertBefore(err, infoNode);
            flag = false;
            // infoErr.style.display = 'block';
        }
        else {
            // infoErr.style.display = 'none';
        }
        if (!flag)
            return; // 存在错误，不予通过
        // 将信息存入localStor
        let storage = JSON.parse(localStorage.getItem('timepills')) || [];
        key = getKey();
        let pill = {
            name: name,
            email: email,
            time: time,
            info: info,
            tip: tip,
            key: key
        };
        storage.push(pill);
        localStorage.setItem('timepills', JSON.stringify(storage));
        // 隐藏当前表单，显示done页面
        putDone(key);
        // 改变key表单value
        keyNode.value = key;
        // 改变 url
        // history.pushState({}, '', '/put_done');
    });
}
function putDone(key) {
    let putMain = document.querySelector('.put-main');
    let putDone = document.querySelector('.put-done');
    putMain.style.display = "none";
    putDone.style.display = "block";
}
function removeErrs() {
    let errs = document.querySelectorAll('.err') || [];
    for (let i = 0; i < errs.length; i++) {
        // 删除自己
        errs[i].parentNode.removeChild(errs[i]);
    }
}
window.addEventListener('load', init);
//# sourceMappingURL=put.js.map