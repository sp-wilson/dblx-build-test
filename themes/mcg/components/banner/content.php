<?php

    if ( !isset( $content ) || !$content ) return;

    $alignment           = $content['alignment'] ? $content['alignment'] : 'center';
    $label               = $content['label'];
    $heading             = $content['heading'];
    $subheading          = $content['subheading'];
    $text_overlay_top    = $content['text_overlay_top'];
    $text_overlay_bottom = $content['text_overlay_bottom'];
?>

<div class="c-content  c-content--banner">
    <div class="c-content__inner  c-content__inner--<?= $alignment; ?>">

        <label class="c-welcome-banner__label">
            <?= ($count > 10) ?: "0" . $count ?>
            <span class="c-welcome-banner__label-line"></span> 
            <?= ($total_count > 10) ?: "0" . $total_count ?>
            <h3 class="c-welcome-banner__label-copy">
                <?= $label ?>
            </h3>
        </label>

        <h1 class="c-welcome-banner__heading  t-font-size--beta  t-font-family--secondary">
            <?= $heading ?>
        </h1>

        <h2 class="c-welcome-banner__subheading  t-font-size--delta  t-font-family--primary t-font-weight--300">
            <?= $subheading ?>
        </h2>

        <?php if ( $content['buttons'] ): ?>
            <footer class="c-content__cta-group  c-content__cta-group--pushed">
                <?php $buttons = $content['buttons']; ?>
                <?php $additional_classes = 'c-content__cta'; ?>
                <?php include get_template_directory() . '/components/buttons/buttons.php'; ?>
            </footer>
        <?php endif; ?>
    </div>
</div>


<div class="c-welcome-banner__text-overlay">

    <div class="c-welcome-banner__text-overlay--top">
        <?= $subheading ?>
    </div>

    <div class="c-welcome-banner__text-overlay--bottom">
        <?= $subheading ?>
    </div>

</div>

<?php 
    // Reset variables to stop inheritance 
    $label               = null;
    $heading             = null;
    $subheading          = null;
    $text_overlay_top    = null;
    $text_overlay_bottom = null;
?>
