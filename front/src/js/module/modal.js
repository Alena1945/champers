
var player = document.getElementById('ru-video');
jQuery('[data-modal]').on('click', function (e) {
    e.preventDefault();
    jQuery('.modal-wrap.modal-show').removeClass('modal-show');
    jQuery('body,html').removeClass('modal-active');
    let modalId = jQuery(this).attr('data-modal');
    jQuery('.modal-wrap#' + modalId).addClass('modal-show');
    jQuery('body,html').addClass('modal-active');
    if(jQuery('#video-modal').length) {
        if (modalId === 'video-modal') {
            player.contentWindow.postMessage(JSON.stringify({
                type: 'player:play',
                data: {}
            }), '*');
        }
    }
});

jQuery('.modal-cross').on('click', function(){
    jQuery('.modal-wrap.modal-show').removeClass('modal-show');
    jQuery('body,html').removeClass('modal-active');
    if(jQuery('#video-modal').length) {
        player.contentWindow.postMessage(JSON.stringify({
            type: 'player:stop',
            data: {}
        }), '*');
    }
})
jQuery('.modal-shadow').on('click', function(){
    jQuery('.modal-wrap.modal-show').removeClass('modal-show');
    jQuery('body,html').removeClass('modal-active');
    if(jQuery('#video-modal').length) {
        player.contentWindow.postMessage(JSON.stringify({
            type: 'player:stop',
            data: {}
        }), '*');
    }
})