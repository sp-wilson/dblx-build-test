<?php

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //

//  This file creates any custom functions which relate directly to the
//  Advanced Custom Fields plugin to extend it's functionality.
//
//  [_1_] Create ACF JSON
//  [_2_] Add Google API Key

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_1_] ACF JSON  //

add_filter('acf/settings/load_json', 'prop_acf_json_load_point');
add_filter('acf/settings/save_json', 'prop_acf_json_save_point');

function prop_acf_json_load_point($paths)
{

    unset($paths[0]);

    $paths[] = get_template_directory() . '/acf-json';

    return $paths;
}

function prop_acf_json_save_point()
{
    return str_replace("httpdocs", "src", get_template_directory()) . '/acf-json';
}

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_2_] Google API Key  //

function prop_acf_init()
{

    acf_update_setting('google_api_key', 'AIzaSyAUcOKKBawPt9qU-s74SDRPLt1BCrIGEJY');

}
add_action('acf/init', 'prop_acf_init');

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_3_] Speed up load time of the post edit page  //
//  https://www.advancedcustomfields.com/blog/acf-pro-5-5-13-update  //

add_filter('acf/settings/remove_wp_meta_box', '__return_true');

if (class_exists('acf')) {
    require_once('acf-sync-warning.php');
}
