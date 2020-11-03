<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">

    <head>
        <meta charset="<?php bloginfo( 'charset' ); ?>" />
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content="<?php bloginfo( 'description' ); ?>">
        <?php wp_head();?>
        <!-- styling here  -->
        <link rel="stylesheet" href="<?= get_template_directory_uri(); ?>/dist/style.min.css" type="text/css" media="all">

        <script src="<?= get_template_directory_uri(); ?>/dist/main.js" defer></script>
    </head>

    <body <? body_class('js-page'); ?>itemscope itemtype="http://schema.org/WebPage">
        <?php // Load svg icons sprite. ?>
        <iframe src="<?= get_template_directory_uri(); ?>/src/img/icons.svg" onload="document.body.insertAdjacentElement('afterbegin', this.contentDocument.childNodes[0]); document.body.removeChild(this);" style="display: none"></iframe>


        <? get_template_part('components/header'); ?>

        <main id="main" class="o-main">
