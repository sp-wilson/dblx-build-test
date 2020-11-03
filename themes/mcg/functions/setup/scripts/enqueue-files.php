<?php

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //

//  Sets up Scripts/Styles
//
//  Using Webpack and Service Workers we can now support asset caching and chunking
//  this is where we can define the manifest and de-register any non-relevant scripts
//
//  [_1_] De-Register Scripts
//  [_2_] Setup Asset Path and Assign Manifest

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_1_] De-Register Scripts/Styles  //

function js_assets()
{
    if (!is_admin()) {
        wp_deregister_script('jquery');
    }
    wp_deregister_script('wp-embed');
}

function wps_deregister_styles()
{
    wp_dequeue_style('wp-block-library'); // Removes Default Gutenberg block styles
}


//  [_2_] Setup Asset Path and Assign Manifest  //

function get_asset_path($filename)
{
    return get_template_directory_uri() . '/assets/' . get_asset_name($filename);
}

function get_asset_name($filename)
{
    $map = get_template_directory() . "/assets/manifest.json";
    $manifest = file_exists($map) ? json_decode(file_get_contents($map)) : [];

    if (array_key_exists($filename, $manifest)) {
        return $manifest->$filename;
    }

    return $filename;
}

function asset_chunk_exists($filename)
{
    $map = get_template_directory() . "/assets/manifest.json";
    $manifest = file_exists($map) ? json_decode(file_get_contents($map)) : [];

    return array_key_exists($filename, $manifest);
}


add_action('wp_enqueue_scripts', 'js_assets');
add_action('wp_print_styles', 'wps_deregister_styles', 100);
remove_action('wp_head', 'feed_links', 2);
remove_action('wp_head', 'wp_shortlink_wp_head');
remove_action('wp_head', 'wp_resource_hints', 2);
remove_action('wp_head', 'rel_canonical');
