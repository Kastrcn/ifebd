/**
 * Created by 赵天 on 2017/2/27.
 */
var list = document.querySelector('ul');
console.log(list)
list.addEventListener('click', function(ev) {
    if( ev.target.tagName === 'LI') {
        ev.target.classList.toggle('done');
    }
}, false);