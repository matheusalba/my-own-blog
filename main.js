import './style.css'

function generatedHeader(){
const header = document.querySelector('[data-js="header"]')
const title = document.createElement('div')
const subTitle = document.createElement('div')

header.appendChild(title)
header.appendChild(subTitle)

header.className = 'header'
title.className = 'title'
subTitle.className = 'subTitle'

title.textContent = 'My Own Blog'
subTitle.textContent = 'Feito com Javascript Puro, HTML e CSS'
}

function generatedMenu(){
  const menu = document.querySelector('[data-js="menu"]')
  menu.className = 'menu'
  
  const kotlin = document.createElement('div')
  const sql = document.createElement('div')
  const javascript = document.createElement('div')
  const web = document.createElement('div')

  kotlin.className = 'optionMenu'
  sql.className = 'optionMenu'
  javascript.className = 'optionMenu'
  web.className = 'optionMenu'

  kotlin.textContent = 'Kotlin'
  sql.textContent = 'SQL'
  javascript.textContent = 'Javascript'
  web.textContent = 'Web'

  menu.appendChild(kotlin)
  menu.appendChild(sql)
  menu.appendChild(javascript)
  menu.appendChild(web)
}

function generatedPanel(){
  const panel = document.querySelector('[data-js="panel"]')
  panel.className = 'panel'
  const postOne = generatedContainer("kotlin-rest.png",
  "https://github.com/matheusalba/back-kotlin-crud",
  'Crud com Kotlin',
  'Repositório Github'
  )
 
  const postTwo = generatedContainer(
    'summary.png',
    "https://github.com/matheusalba/score-summary-front",
     "Desafio do Front-End Mentor(HTML/CSS)",
    'Github' 
  )

  panel.appendChild(postOne)
  panel.appendChild(postTwo)
  panel.appendChild(postTree)
  panel.appendChild(postFour)
  panel.appendChild(postFive)
  panel.appendChild(postSix)
}

function generatedContainer(imgSrc,linkRepo,textTitle,textLink){
  const container = document.createElement('div')
  const post = document.createElement('div')
  post.className = 'post'
  const img = document.createElement('img')
  post.appendChild(img)
  img.src=imgSrc
  img.className='imgPost'

  const description = document.createElement('div')
  const title = document.createElement('h2')
  title.className = 'titlePost'
  const desc = document.createElement('div')
  desc.className = 'descPost'
  title.textContent = textTitle
  const link = document.createElement('a')
  link.href = linkRepo
  link.textContent = textLink
  desc.appendChild(link)
  container.appendChild(post)
  container.appendChild(title)
  container.appendChild(desc)
  return container
}

generatedHeader()
generatedMenu()
generatedPanel()