import './bootstrap';
import '@coreui/coreui'


/**
 * DataTables
 * https://datatables.net/
 */
import 'datatables.net';
$(document).ready(function() {
    $('#datatables').DataTable( {
        order: [ 3, 'dsc' ],
        stateSave: true
    } );
} );
