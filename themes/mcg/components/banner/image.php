<?php

    if ( !isset( $image ) || !$image ) return;

    $additional_classes = isset( $image['additional_classes'] ) ? $image['additional_classes'] : '';
    $image_size = isset( $image['image_size'] ) ? $image['image_size'] : 'banner';

?>

<?= wp_get_attachment_image( $image['image_file']['id'], $image_size, false, [ "class" => "o-img--cover {$additional_classes}" ]); ?>

<?php $additional_classes = null; ?>
<?php $image = null; ?>
