let textInput = $('#text-input');
textInput.on('change', function(event) {
    event.preventDefault();
    if(!/^[a-z_\d]{4,16}$/.test(textInput.val())) {
       
        textInput.addClass('error')
        textInput.siblings('p').addClass('error');
    } else {
        textInput.removeClass('error');
        textInput.siblings('p').removeClass('error');
    }
})