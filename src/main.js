import fn from './fn.js'
import './css/index.css'
import $ from 'jquery'
// import { getDate } from './utils/utils'
import './utils/utils'
import avatar from './images/avatar.jpeg'
// import lodash from 'lodash'

import moment from 'moment'
import vue from 'vue'
import element from 'element-ui'
console.log({ avatar })
console.log($)

console.log('i am main.js')
fn()

const h1 = document.createElement('h1')
h1.innerText = 'hello world'
document.body.appendChild(h1)

const h2 = document.createElement('h1')
h2.innerText = 'hello h2'
document.body.appendChild(h2)
// 创建一个按钮 点击时动态导入其他模块
var btn = document.createElement('button')
btn.innerText = 'click'
document.body.appendChild(btn)
btn.onclick = function() {
  import('./a')
  import('./b')
}

// import image
const importImage = document.createElement('img')
importImage.src = avatar
document.body.appendChild(importImage)

// src image
const srcImage = document.createElement('img')
srcImage.src = '../images/test.png'
document.body.appendChild(srcImage)

// bg image
const bgImage = document.createElement('div')
bgImage.setAttribute('class', 'bgImage')
document.body.appendChild(bgImage)

// file-loader 可以解析直接使用模块化导入的图片 以及 在模板中使用img标签引入的图片或者css背景引入的图片。不能解析使用img.src='/path/to/img'这种语法的图片。


// getDate()
export default {
  alpha: 'export default--message'
}

export const beta = 'export--message'