import book from '../assets/booke.png'
import './two.scss' 
import moudleScssImage from './moudleScssImage'
function showImageScss() {
  const img = new Image()
  // 加载图片路径
  img.src = book
  // 添加class名 img_class
  img.classList.add('img_scss')
  const dom = document.querySelector('.root')
  dom.append(img)
}

moudleScssImage()
export default showImageScss
