/* ------------------------------------------------------------------------------
*
*  # Columns Visibility (Buttons) extension for Datatables
*
*  Specific JS code additions for datatable_extension_colvis.html page
*
*  Version: 1.2
*  Latest update: Mar 6, 2016
*
* ---------------------------------------------------------------------------- */

$(function() {


    // Table setup
    // ------------------------------

    // Setting datatable defaults
    $.extend( $.fn.dataTable.defaults, {
        autoWidth: false,
        dom: '<"datatable-header"fBl><"datatable-scroll-wrap"t><"datatable-footer"ip>',
        language: {
            search: '<span>Filter:</span> _INPUT_',
            lengthMenu: '<span>Show:</span> _MENU_',
            paginate: { 'first': 'First', 'last': 'Last', 'next': '&rarr;', 'previous': '&larr;' }
        }
    });

    
    // Basic example
    $('.datatable-colvis-basic').DataTable({
        buttons: [
            {
                extend: 'colvis',
                className: 'btn btn-default'
            }
        ]
    });


    // Multi-column layout
    $('.datatable-colvis-multi').DataTable({
        buttons: [
            {
                extend: 'colvis',
                text: '<i class="icon-three-bars"></i> <span class="caret"></span>',
                className: 'btn bg-blue btn-icon',
                collectionLayout: 'fixed two-column'
            }
        ]
    });


    // Restore column visibility
    $('.datatable-colvis-restore').DataTable({
        buttons: [
            {
                extend: 'colvis',
                text: '<i class="icon-grid7"></i> <span class="caret"></span>',
                className: 'btn bg-teal-400 btn-icon',
                postfixButtons: [ 'colvisRestore' ]
            }
        ],
		/*aaSorting: [[ 1, "asc" ]],*/
		fixedHeader: true,
        columnDefs: [
            {
                targets: [-2,-3,-4,-5,-6,-7,-8,-10,-11,-12,-13,-14,-15,-16,-17,-18,-19,-20,-21,-22,-23,-24,-25,-26,-27,-28,-29,-30,-31,-32,-33,-34,-35,-36,-37,-38,-39,-40,-41,-42,-43,-44,-45,-46,-47,-48,-49,-50,-51,-52,-53,-54,-55,-56],
                visible: false
            },
            { 
                width: "20px",
                targets: [0]
            },
            { 
                width: "60px",
                targets: [1,3,4,5,12]
            },
            { 
                width: "80px",
                targets: [6,7,8,10,11]
            },
            { 
                width: "120px",
                targets: [13,14]
            },
            { 
                width: "150px",
                targets: [2,9]
            }
        ],
        fixedColumns: true
    });

    $('.datatable-colvis-restore2').DataTable({
        buttons: [
            {
                extend: 'colvis',
                text: '<i class="icon-grid7"></i> <span class="caret"></span>',
                className: 'btn bg-teal-400 btn-icon',
                postfixButtons: [ 'colvisRestore' ]
            }
        ],
		aaSorting: [[ 1, "asc" ]],
		fixedHeader: true,
        columnDefs: [
            {
                targets: [],
                visible: false
            }
        ]
    });
	
    $('.datatable-colvis-restore3').DataTable({
        buttons: [
            {
                extend: 'colvis',
                text: '<i class="icon-grid7"></i> <span class="caret"></span>',
                className: 'btn bg-teal-400 btn-icon',
                postfixButtons: [ 'colvisRestore' ]
            }
        ],
		aaSorting: [[ 1, "asc" ]],
		fixedHeader: true,
        columnDefs: [
            {
                targets: [],
                visible: false
            }
        ]
    });
	
    // State saving
    $('.datatable-colvis-state').DataTable({
        buttons: [
            {
                extend: 'colvis',
                text: '<i class="icon-grid3"></i> <span class="caret"></span>',
                className: 'btn bg-indigo-400 btn-icon'
            }
        ],
        stateSave: true,
        columnDefs: [
            {
                targets: -1,
                visible: false
            }
        ]
    });


    // Column groups
    $('.datatable-colvis-group').DataTable({
        buttons: {
            buttons: [
                {
                    extend: 'colvisGroup',
                    text: 'Office info',
                    className: 'btn btn-default',
                    show: [0, 1, 2],
                    hide: [3, 4, 5]
                },
                {
                    extend: 'colvisGroup',
                    className: 'btn btn-default',
                    text: 'HR info',
                    show: [3, 4, 5],
                    hide: [0, 1, 2]
                },
                {
                    extend: 'colvisGroup',
                    className: 'btn btn-default',
                    text: 'Show all',
                    show: ':hidden'
                }
            ]
        }
    });

    // Left fixed column example
    /*
	$('.datatable-fixed-left').DataTable({
        columnDefs: [
            { 
                orderable: false,
                targets: [5]
            },
            { 
                width: "200px",
                targets: [0]
            },
            { 
                width: "300px",
                targets: [1]
            },
            { 
                width: "200px",
                targets: [5, 6]
            },
            { 
                width: "100px",
                targets: [4]
            }
        ],
        scrollX: true,
        scrollY: '350px',
        scrollCollapse: true,
        fixedColumns: true
    });
	*/

    // External table additions
    // ------------------------------

    // Launch Uniform styling for checkboxes
    $('.ColVis_Button').addClass('btn btn-primary btn-icon').on('click mouseover', function() {
        $('.ColVis_collection input').uniform();
    });


    // Add placeholder to the datatable filter option
    $('.dataTables_filter input[type=search]').attr('placeholder', 'Type to filter...');


    // Enable Select2 select for the length option
    $('.dataTables_length select').select2({
        minimumResultsForSearch: Infinity,
        width: 'auto'
    });
    
});
