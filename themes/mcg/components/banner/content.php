<?php

    if ( !isset( $content ) || !$content ) return;

    $alignment = $content['alignment'] ? $content['alignment'] : 'center';

?>

<div class="c-content  c-content--banner">
    <div class="c-content__inner  c-content__inner--<?= $alignment; ?>">
        <?php $wysiwyg = $content['content']; ?>
        <?php if ( $wysiwyg && strlen($wysiwyg) > 0 ) echo $wysiwyg; ?>

        <?php if ( $content['buttons'] ): ?>
            <footer class="c-content__cta-group  c-content__cta-group--pushed">
                <?php $buttons = $content['buttons']; ?>
                <?php $additional_classes = 'c-content__cta'; ?>
                <?php include get_template_directory() . '/components/buttons/buttons.php'; ?>
            </footer>
        <?php endif; ?>
    </div>
</div>

<?php $content = null; ?>
