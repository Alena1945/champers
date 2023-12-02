jQuery('.js-tab-trigger').click(function() {
    var id = jQuery(this).attr('data-tab'),
        content = jQuery('.js-tab-content[data-tab="'+ id +'"]');
    
    jQuery('.js-tab-trigger.active').removeClass('active'); // 1
    jQuery(this).addClass('active'); // 2
    
    jQuery('.js-tab-content.active').removeClass('active'); // 3
    content.addClass('active'); // 4
 });