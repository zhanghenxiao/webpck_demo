function Header(){
  const dom = document.querySelector('.root')
  const tag = document.createElement('div')
  tag.innerText = 'Header'
  dom.append(tag)
}


export default Header