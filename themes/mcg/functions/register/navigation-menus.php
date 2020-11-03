<?php

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //

//  Register navigation menus for our theme.
//
//  [_01_] Register custom navigation menus

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_1_] Register custom navigation menus  //

add_action('init', function () {
    $locations = [
        'primary-navigation' => __('Primary Navigation'),
        'footer-navigation' => __('Footer Navigation'),
    ];
    register_nav_menus($locations);
});
