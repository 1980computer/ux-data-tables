$(document).ready(function() {
    $('#example').DataTable( {
        "lengthChange": false,
        "info":     false,
        "dom": "<'row' <'col-xs-12'f>>" + "<'row'<'col-sm-12'tr>>" + "<'row' <'col-xs-12'p>>"
    } );
} );