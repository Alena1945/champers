if (window.matchMedia("(max-width: 767px)").matches) {
$('.how-we-work-col').each(function() {
  const accordion = $(this).find('.how-we-work__keys')
  const content = $(this).find('.how-we-work__content')
  const innerTitle = $(this).find('.hww-content-title')
  const number = $(this).find('.how-we-work__number')
  $(number).html(innerTitle)
  accordion.on('click', () => {
    content.toggleClass('content-active')
    $(this).toggleClass('active-col')
  })
})
}