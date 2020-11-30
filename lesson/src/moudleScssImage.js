import book from '../assets/booke.png'
import style from './two.scss'
function moudleScssImage() {
  const img = new Image()
  // 加载图片路径
  img.src = book
  // 添加class名 img_class
  img.classList.add(style.img_scss)
  const dom = document.querySelector('.root')
  dom.append(img)
}

export default moudleScssImage