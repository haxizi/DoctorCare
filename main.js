window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)

}

function activateMenuAtCurrentSection(section){
  // LINHA DO DESTINO RECEBE ROLAGEM Y + AUTURA INTERNA DIVIDIDO POR 2
  const targetLine = scrollY + innerHeight /2
// PARTE SUPERIOR DA SEÇÃO RECEBE = SEÇÃO.DESLOCAMENTO SUPERIOR
  const sectionTop = section.offsetTop
  //ALTURA DA SEÇÃO RECEBE = SEÇÃO.ALTURA DE DESLOCAMENTO
  const sectionHeight = section.offsetHeight

  //CONST O ALCANCE SUPERIOR DA SEÇÃO ULTRAPASSOU A LINHA DO DESTINO =RECEBE= LINHA DO DESTINO MAIOR OU IGUAL >= A PARTE SUPERIOR DA SEÇÃO
  const sectionTopReach0rPassedTargetline = targetLine >= sectionTop
  
  //SEÇÃO TERMINA EM =RECEBE= PARTE SUPERIOR DA SEÇÃO + ALTURA DA SEÇÃO 
  const sectionEndsAt = sectionTop + sectionHeight
  
  // CONST FINAL DA SEÇÃO PASSOU A LINHA DO DESTINO =RECEBE= SEÇÃO TERMINA EM <= MENOR OU IGUAL <= LINHA DO DESTINO
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine
  //LIMITES DE SEÇÃO =RECEBE= FINAL DA SEÇÃO PASSOU A LINHA DO DESTINO &&(TRANSFORMA VALORES EM TRUE OU FALSE) 
  //(!TORNA TRUE) !FINAL DA SEÇÃO PASSOU A LINHA DO DESTINO 
  const sectionBoundaries = sectionTopReach0rPassedTargetline && !sectionEndPassedTargetline

  // ID DA SEÇÃO =RECEBE= SEÇÃO.OBTER ATRIBUTO('ID')
  const sectionId = section.getAttribute('id')
  //ELEMENTO DO MENU =RECEBE= DOCUMENTO.SELETOR DE CONSULTA(`.MENU A [HREF*=${ iD DA SEÇÃO }]`)
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  //ELEMENTO DO MENU. LISTA DE TURMAS.REMOVE('ACTIVE')
  menuElement.classList.remove('active')
  // E SE (LIMITES DE SEÇÃO)
  if (sectionBoundaries) {
    //ELEMENTO DO MENU. LISTA DE TURMAS.ADICIONA('ACTIVE')
      menuElement.classList.add('active')
  }
}
















function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card
  #about, 
  #about header, 
  #about .content,
  .contact`)
