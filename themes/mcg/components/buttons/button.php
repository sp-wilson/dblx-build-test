<?

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //

//  This is the part used for displaying a single button

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //

$btn_label 		    = $button['button_label'];
$btn_style 		    = $button['button_style'];
$btn_type 		    = $button['button_type'];
$btn_email 		    = $button['button_link_email'];
$btn_internal 	    = $button['button_link_internal'];
$btn_external 	    = $button['button_link_external'];
$btn_file 	         = $button['button_link_file'];
$additional_classes  = isset($additional_classes) ? $additional_classes : '';

?>

<?
    switch ( $btn_type ) {
        case 'booking':
            $link = "javascript:void(0)";
            $trigger = '  js-modal-handler';
            $target = null;
            $additional_classes = $additional_classes .'" data-action="open" data-target="booking';
            break;
        case 'internal':
            $link = $btn_internal;
            $trigger = null;
            $target = null;
            break;
        case 'email':
            $link = 'mailto:' . $btn_email;
            $trigger = null;
            $target = null;
            break;
        case 'external':
            $link = $btn_external;
            $trigger = null;
            $target = ' target="_blank"';
            break;
        case 'file':
            $link = $btn_file['url'];
            $trigger = null;
            $target = ' target="_blank"';
            break;
        default:
            $link = null;
            $trigger = null;
            $target = null;
            break;
    }
?>

<a href="<?= $link; ?>" class="c-btn  c-btn--<?= $btn_style ?><?= $trigger; ?><?= '  ' . $additional_classes; ?>"<?= $target; ?>>
    <svg class="c-ico  c-ico--arrow  u-mr-20"><use xlink:href="#icon-arrow"></use></svg>
    <span><?= $btn_label; ?></span>
</a>
