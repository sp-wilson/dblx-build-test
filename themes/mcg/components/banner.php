<?php

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //

//  This is the region used for displaying the banner region

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //

    // ACF

    $type         = $row['setup'];
    $slides       = $row['banner_slides'];
    $autoplay     = $row['banner_autoplay'];
    $overlay      = $row['banner_overlay'];
    $reset_videos = $row['reset_videos'];

    switch (count($slides)) {
        case 1:
            $carousel_mq = 'disabled';
            break;

        default:
            $carousel_mq = '';
            break;
    };

?>

<section class="o-row  o-row--<?= $pusher ?>" data-layout="<?= $row['acf_fc_layout']; ?>">

    <div class="c-carousel">
        <div class="c-carousel__slider  js-carousel" data-set-gallery-size <?= $autoplay ? "data-autoplay" : null; ?> <?= $carousel_mq ? "data-carousel-mq=\"{$carousel_mq}\"" : null; ?> data-settings="setGallerySize autoPlay watchCss">

            <?php foreach ( $slides as $slide ): ?>
                <div class="c-carousel__slide  c-carousel__slide--banner">

                    <?php switch ($slide['media_type']) {
                        case 'image':
                            $image = $slide['image'];
                            $image['image_size'] = 'banner';
                            $image['additional_classes'] = 'c-carousel__img';
                            include get_template_directory() . '/components/banner/image.php';
                            break;

                        case 'video':
                            $video = $slide['video'];
                            $video['image_size'] = 'banner';
                            include get_template_directory() . '/components/banner/video.php';
                            break;

                        default:
                            break;
                    } ?>

                    <?php if ($row['setup'] === 'dynamic'): // Each slide has its own content ?>

                        <?php /* Insert Banner Content */
                            $content = $slide['slide_content'];
                            include get_template_directory() . '/components/banner/content.php';
                        ?>

                    <?php endif; ?>

                    <?php if ($overlay) : ?>
                        <div class="c-overlay"></div>
                    <?php endif; ?>
                </div>
            <?php endforeach; ?>

        </div>

        <?php if ($row['setup'] === 'static') : // Content overlaps all slides ?>

            <?php /* Insert Overlapping Banner Content */
                $content = get_sub_field('banner_content');
                include get_template_directory() . '/components/banner/content.php';
            ?>

        <?php endif; ?>

    </div>
</section>
