// 是针对图片和css 样式打包
import book from '../assets/booke.png'
import './one.css' 
function showImage() {
  const img = new Image()
  // 加载图片路径
  img.src = book
  // 添加class名 img_class
  img.classList.add('img_class')
  const dom = document.querySelector('.root')
  dom.append(img)
}

export default showImage
