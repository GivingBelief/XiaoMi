let mybody = document.getElementsByClassName('mybody')
let onecolor = document.getElementsByClassName('pop')
let twocolor = document.getElementsByClassName('click-div')
let word_p = document.getElementsByClassName('word-p')

// 控制输入框的样式
mybody[0].onclick = function () {
  onecolor[0].style.borderColor = '#ccc';
  twocolor[0].style.borderColor = '#ccc';
  word_p[0].style.display = 'inline-block'
}
onecolor[0].onclick = function () {
  onecolor[0].style.borderColor = '#ff6700';
  twocolor[0].style.borderColor = '#ff6700';
  word_p[0].style.display = 'none'

  //阻止事物的冒泡
  if (event.stopPropagation) { // w3c标准
    event.stopPropagation();
  } else { // IE系列 IE 678
    event.cancelBubble = true;
  }
}
