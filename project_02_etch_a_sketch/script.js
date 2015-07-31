var create = function(result) {
    $('body').append('<div id="container">');    
    for(i = 0; i < result; i++) {
        var row = '<div>';
        for(j = 0; j < result; j++) {
            row += '<div class="cell"></div>';
        }
        row += '</div>'
        $('#container').append(row);
        $('body').append('</div>');
    }
    $('.cell').mouseenter(function() {
        $(this).addClass('hovered');
        $(this).css('background-color', randomRGB());
    });
}

var randomRGB = function() {
    return '#'+(Math.random()*0xFFFFFF<<0).toString(16);    
}

$(document).ready(function() {
    create(16);
    document.getElementById('newGrid').onclick = function() {
        var result = window.prompt('Enter new grid dimension');
        $('div').remove();
        create(result);
    };
});

