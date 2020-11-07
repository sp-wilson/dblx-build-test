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

    $show_scroll         = $row['show_scroll'];
    $welcome_message     = $row['welcome_message'];
    $show_social         = $row['show_social'];
    
?>

<section class="o-row  o-row--n  c-welcome-banner" data-layout="<?= $row['acf_fc_layout']; ?>">

    <div class="c-carousel">
        <div class="c-carousel__slider  js-carousel" data-set-gallery-size <?= $autoplay ? "data-autoplay" : null; ?> <?= $carousel_mq ? "data-carousel-mq=\"{$carousel_mq}\"" : null; ?> data-settings="setGallerySize watchCss">

            <?php 
                $count = 1; 
                $total_count = count($slides);
                foreach ( $slides as $slide ): 
            ?>
                <div class="c-carousel__slide  c-carousel__slide--banner<?= ($total_count < 1) ?: "  is-selected" ?>">

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
            <?php $count++; endforeach; ?>

        </div>

        <?php if ($row['setup'] === 'static') : // Content overlaps all slides ?>

            <?php /* Insert Overlapping Banner Content */
                $content = get_sub_field('banner_content');
                include get_template_directory() . '/components/banner/content.php';
            ?>

        <?php endif; ?>

    </div>
    
    <?php if($show_scroll) : ?>
        <aside class="c-welcome-banner__left">
            <span class="c-welcome-banner__scroll">
                <span class="c-welcome-banner__scroll-inner">
                    <hr class="c-welcome-banner__scroll-line"/>Scroll<br> to navigate
                </span>
            </span>
        </aside>
    <?php endif; ?>

    <aside class="c-welcome-banner__right">
        <div class="c-welcome-banner__message"> 
            <?= $welcome_message ?>
        </div>

        <?php if($show_social) : ?>
            <div class="c-welcome-banner__social">
                <a class="c-header__icon  u-mb-15" href="/" title="">
                    <svg class="c-ico"><use xlink:href="#icon-facebook"></use></svg>
                </a>
                <a class="c-header__icon  u-mb-15" href="/" title="">
                    <svg class="c-ico"><use xlink:href="#icon-instagram"></use></svg>
                </a>
                <a class="c-header__icon" href="/" title="">
                    <svg class="c-ico"><use xlink:href="#icon-twitter"></use></svg>
                </a>
            </div>
        <?php endif; ?>
    </aside>
</section>
