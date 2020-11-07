<?php 
    $navigation_items = $row['navigation_items'];
?>

<section class="c-page-navigation">

    <div class="c-carousel__slider  c-page-navigation__slider  js-carousel" data-settings="setGallerySize  watchCss  noWrap" data-align="center">
        <?php $count = 1; foreach ($navigation_items as $navigation_item): ?>

            <div class="c-page-navigation__item">
                <a class="c-page-navigation__link" href="<?= $navigation_item["item_id"] ?>">
                    <?= $navigation_item["item_label"] ?>
                    <span class="c-page-navigation__link-number">
                        <?= ($count > 10) ?: "0" . $count ?>
                    </span>
                </a>
            </div>

        <?php $count++; endforeach; ?>
    </div>

</section>