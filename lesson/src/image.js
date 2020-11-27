import book from '../assets/booke.png'
function showImage() {
  const img = new Image()
  img.src = book
  const dom = document.querySelector('.root')
  dom.append(img)
}

export default showImage
