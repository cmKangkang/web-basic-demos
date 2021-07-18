// 直接从dist中引入，改后缀为ts，虽然会报错，但是可以转成js没问题
import moment from '../utils/moment.js';
console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
// import {get} from '../utils/request.js';
// import {storePills} from '../utils/store.js';
// import { IPill } from './types'
window.addEventListener('load', () => {
    let aNode = document.querySelector('a[title]');
    let count = 0;
    aNode.addEventListener('click', () => {
        if (count === 0) {
            alert('别点，我也不晓得~');
            aNode.title = '你咋还不信捏，别点了哈';
            count++;
        }
        else if (count === 1) {
            alert('怎的？不信？憋点了，我真不知道');
            aNode.title = '我发现你有点叛逆啊~';
            count++;
        }
        else if (count === 2) {
            alert('憋点了！\n今天就算你把鼠标按坏，电池用光，把我丢垃圾桶里，我也不会说一个字儿！\n因为我确实不知道 ·_·');
            aNode.title = '毁灭吧，赶紧的，累了...';
            count++;
        }
        else if (count > 2) {
            alert('毁灭吧，赶紧的，累了...');
        }
    });
});
//# sourceMappingURL=index.js.map