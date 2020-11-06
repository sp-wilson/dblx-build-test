<?php 
    $navigation_items = $row['navigation_items'];
?>

<section class="c-page-navigation">
    <?php $count = 1; foreach ($navigation_items as $navigation_item): ?>

        <a class="c-page-navigation__item" href="<?= $navigation_item["item_id"] ?>">
            <?= ($count > 10) ?: "0" . $count ?>
            <?= $navigation_item["item_label"] ?>
        </a>

    <?php $count++; endforeach; ?>

</section>