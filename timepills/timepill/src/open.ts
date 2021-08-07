import { IPill } from "./types";
import { stringToDate, secondsToDateString, getRemainning } from '../utils/format.js';

window.addEventListener('load', init);

function init() {
  let keyNode = (document.querySelector('#key') as HTMLInputElement) || null;
  let submitBtn = (document.querySelector('.submit-btn') as HTMLButtonElement) || null;
  let noKeyNode = (document.querySelector('.no-such-key') as HTMLDivElement) || null;
  submitBtn.addEventListener('click', () => {
    noKeyNode.style.display = 'none';
    let _key = keyNode.value;
    if(_key.length === 0) return;
    let name, email, time, info, tip, flag = false;
    let pills: Array<IPill> = JSON.parse(localStorage.getItem('timepills'));
    for (const pill of pills) {
      const { key } = pill;
      if(key === _key) {
        name = pill.name;
        email = pill.email;
        time = pill.time;
        info = pill.info;
        tip = pill.tip;
        flag = true;
        break;
      }
    }

    if(!flag) {
      noKeyNode.style.display = 'block';
      return; // 匹配失败
    }

    let now = new Date();
    let date = stringToDate(time);
    let interval = getRemainning(date, now);
    if(interval >= 0) {
      // 时间已到，可以看见
      showContent(name, time, info);
    } else {
      // 时间未到
      showTip(name, time, tip);
    }
  })
}

/**
 * 显示胶囊内容
 * @param { string } name 用户名
 * @param { string } time 胶囊设置时间
 * @param { string } info 胶囊内容信息
 */
function showContent(name: string, time: string, info: string) {
  let openNode = (document.querySelector('.open') as HTMLDivElement) || null,
      contentNode = (document.querySelector('.open-content') as HTMLDivElement) || null;
  openNode.style.display = 'none';
  contentNode.style.display = 'block';
  let pillLabel = contentNode.querySelector('.pill-label') as HTMLLabelElement || null,
      pillContent = contentNode.querySelector('.pill-content') as HTMLDivElement || null;
  pillLabel.innerText = pillLabel.innerText.replace('{{name}}', name).replace('{{time}}', time);
  pillContent.innerText = pillContent.innerText.replace('{{info}}', info);
}

/**
 * 显示提示信息
 * @param name 用户名
 * @param time 打开时间
 * @param tip 提示信息
 */
function showTip(name: string, time: string, tip: string) {
  let tipNode = (document.querySelector('.open-tip') as HTMLDivElement) || null;
  let openNode = (document.querySelector('.open') as HTMLDivElement) || null;
  openNode.style.display = 'none';
  tipNode.style.display = 'block';
  let date = stringToDate(time);
  let tips = tipNode.querySelector('.tips') as HTMLParagraphElement || null,
      pillContent = tipNode.querySelector('.pill-content') as HTMLDivElement || null;
  tips.innerHTML = tips.innerHTML.replace('{{time}}', time).replace('{{remainning time}}', "" + secondsToDateString(Math.abs(getRemainning(date, new Date()))));
  pillContent.innerHTML = pillContent.innerHTML.replace('{{name}}', name).replace('{{tip}}', tip);
  
  let timer = setInterval(() => {
    let interval = getRemainning(date, new Date());
    tips.innerHTML = `打开时间在 <span>${time}</span> ，距离现在 <span>${secondsToDateString(-interval)}`;
    pillContent.innerHTML = `<span>${name}</span> 给你留的提示信息：<span>${tip}</span>`;
    if(interval >= 0) { // 设置定时器，每一秒执行一次，当打开时间达到时清除该定时器
      clearInterval(timer);
    }
  }, 1000);
}