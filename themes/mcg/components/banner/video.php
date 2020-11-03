<?php

    $video_autoplay = $video['video_autoplay'];
    $video_id = $video['video_id'];
    $video_size = $video['video_size'];
    $video_type = $video['video_type'];
    $video_loop = $video['loop_video'];
    $video_muted = $video['video_muted'];
    $reset_video = $reset_videos ?? null;

    $image = $video['video_overlay_image'];

?>

<div class="c-video  c-video--<?= $video_size; ?>  js-video"
    data-video-id="<?= $video_id; ?>"
    data-video-size="<?= $video_size; ?>"
    data-video-type="<?= $video_type; ?>"
    <?= $video_muted ? 'data-muted' : null; ?>
    <?= $video_autoplay ? 'data-autoplay' : null; ?>
    <?= $video_autoplay && $video_loop ? 'data-loop-video' : null; ?>
    <?= $reset_video ? 'data-reset-video' : null; ?>
>

    <div class="c-video__container  js-video-container"></div>

    <?php
        $image['additional_classes'] = '  c-video__image  js-video-image';
        include get_template_directory() . '/components/banner/image.php';
    ?>

    <button class="c-video__play-btn  js-video-trigger" data-state="paused" title="Play video">
        <span class="sr-only">Play video</span>
    </button>
</div>

<?php $video = null; ?>
