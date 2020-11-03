<?php

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //

//  This file cleans up WordPress, removing any unwanted default features.
//
//  [_1_] Clean up WP
//  [_2_] Clean up the <head>
//  [_3_] Remove JS, CSS & Feed Version Extensions

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_1_] Clean up WP  //

function prop_clean() {

    remove_action('template_redirect', 'rest_output_link_header', 11);
    remove_filter('oembed_dataparse', 'wp_filter_oembed_result', 10);

    add_filter( 'use_default_gallery_style', '__return_false' );

    // Emoji related
    remove_action( 'admin_print_styles', 'print_emoji_styles' );
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
	remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
	remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
    remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );

}
add_action('init', 'prop_clean');


//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_2_] Clean up the <head>  //

function prop_clean_the_head() {

    remove_action( 'wp_head', 'feed_links_extra', 3 );
	remove_action( 'wp_head', 'rsd_link' );
	remove_action( 'wp_head', 'wlwmanifest_link' );
	remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10 );
	remove_action( 'wp_head', 'wp_generator' );
	remove_action( 'wp_head', 'wp_shortlink_wp_head', 10 );
	remove_action( 'wp_head', 'wp_oembed_add_discovery_links' );
	remove_action( 'wp_head', 'wp_oembed_add_host_js' );
    remove_action( 'wp_head', 'rest_output_link_wp_head', 10 );
    
    add_action( 'wp_head', 'ob_start', 1, 0 );
	add_action( 'wp_head', function () {
		$pattern = '/.*' . preg_quote( esc_url( get_feed_link( 'comments_' . get_default_feed() ) ), '/' ) . '.*[\r\n]+/';
		echo preg_replace( $pattern, '', ob_get_clean() );
	}, 3, 0 );

    global $wp_widget_factory;
    
	if ( isset( $wp_widget_factory->widgets['WP_Widget_Recent_Comments'] ) ) {
		remove_action( 'wp_head', [
			$wp_widget_factory->widgets['WP_Widget_Recent_Comments'],
			'recent_comments_style'
        ] );   
    }

}
add_action('init', 'prop_clean_the_head');


//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_3_] Remove JS, CSS & Feed Version Extensions  //

//  This removes all version extensions on css and js linked through each page
function prop_remove_cssjs_ver( $src ) {

    if( strpos( $src, '?ver=' ) )
        $src = remove_query_arg( 'ver', $src );
    return $src;

}
add_filter( 'style_loader_src', 'prop_remove_cssjs_ver', 10, 2 );
add_filter( 'script_loader_src', 'prop_remove_cssjs_ver', 10, 2 );

// This removes version extensions from feeds for added security
add_filter('the_generator', '__return_false');