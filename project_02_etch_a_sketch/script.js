$(document).ready(function() {
    $('body').append('<div id="container">');
    for(i = 0; i < 16; i++) {
        var row = '<div>';
        for(j = 0; j < 16; j++) {
            row += '<div class="cell">' + j + '</div>';
        }
        row += '</div>'
        $('#container').append(row);
        $('body').append('</div>');
    }
})