<div class="c-footer__social-accounts">
    <?
    $instagram = PM::get_option('social_media', 'instagram_username');
    $facebook = PM::get_option('social_media', 'facebook_username');
    $twitter = PM::get_option('social_media', 'twitter_username');
    if($instagram):
    ?>
        <a class="c-footer__social-account" href="<?= 'https://instagram.com/'. $instagram ?>" target="_blank">
            <svg class="c-footer__social-svg"><use xlink:href="#icon-instagram"></use></svg>
        </a>
    <? endif;
    if($facebook):
    ?>
        <a class="c-footer__social-account" href="<?= 'https://facebook.com/'. $facebook ?>" target="_blank">
            <svg class="c-footer__social-svg"><use xlink:href="#icon-facebook"></use></svg>
        </a>
    <? endif;
    if($twitter):
    ?>
        <a class="c-footer__social-account" href="<?= 'https://twitter.com/'. $twitter ?>" target="_blank">
            <svg class="c-footer__social-svg"><use xlink:href="#icon-twitter"></use></svg>
        </a>
    <? endif; ?>
</div>