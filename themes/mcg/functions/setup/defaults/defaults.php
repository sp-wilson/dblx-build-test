<?php

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //

//  This file sets up theme defaults and registers support for various
//  WordPress features.
//
//  Note that this function is hooked into the after_setup_theme hook, which
//  runs before the init hook. The init hook is too late for some features, such
//  as indicating support for post thumbnails.
//
//  [_1_] Set the permalink structure
//  [_2_] Remove Admin Bar
//  [_3_] Disable Upgrades & Updates
//  [_4_] Hide Visual & Text Tabs
//  [_5_] Remove Dashboard Widgets
//  [_6_] Remove Admin Pages & Submenus
//  [_7_] Remove Comments
//  [_8_] Disable Emoji's in tinyMCE
//  [_9_] Disable XML
//  [_10_] Pingback
//  [_11_] Kill Trackback Rewrite Rule
//  [_12_] Prevent SSL Capability Testing
//  [_13_] User Access
//  [_14_] Remove Custom CSS
//  [_15_] Make Site Public
//  [_16_] Remove content editor
//  [_17_] Enable future posts in archives and posts
//  [_18_] Permalinks for future post
//  [_19_] Remove Search Querying
//  [_20_] Add Theme Support For Title

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_1_] Set the permalink structure  //

function prop_update_permalinks()
{

    if (get_option('permalink_structure') == '') {

        global $wp_rewrite;
        $wp_rewrite->set_permalink_structure('/%postname%');
        $wp_rewrite->flush_rules();

    }

}
add_action('after_switch_theme', 'prop_update_permalinks');


//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_2_] Remove Admin Bar  //

add_filter('show_admin_bar', '__return_false');


//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_3_] Disable Upgrades & Updates  //

//  This removes upgrades and updates for non-administrative users
function prop_remove_core_updates()
{

    global $wp_version;

    return (object)array(
        'last_checked' => time(),
        'version_checked' => $wp_version,
    );

}

add_filter('pre_site_transient_update_core', 'prop_remove_core_updates');
add_filter('pre_site_transient_update_plugins', 'prop_remove_core_updates');
add_filter('pre_site_transient_update_themes', 'prop_remove_core_updates');
add_filter('pre_option_update_core', function ($a) {
    return null;
});
add_action('init', function ($a) {
    remove_action('init', 'wp_version_check');
}, 2);


//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_4_] Hide Visual & Text Tabs  //

//  Default to visual tab as user will not be able to switch
function prop_force_default_editor()
{

    return 'tinymce';

}
add_filter('wp_default_editor', 'prop_force_default_editor');


//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_5_] Remove Dashboard Widgets  //

function prop_remove_dashboard_widgets()
{

    remove_meta_box('dashboard_incoming_links', 'dashboard', 'normal');
    remove_meta_box('dashboard_plugins', 'dashboard', 'normal');
    remove_meta_box('dashboard_primary', 'dashboard', 'normal');
    remove_meta_box('dashboard_secondary', 'dashboard', 'normal');
    remove_meta_box( 'dashboard_quick_press', 'dashboard', 'side' );
    remove_meta_box( 'dashboard_recent_drafts', 'dashboard', 'side' );
    remove_meta_box( 'dashboard_recent_comments', 'dashboard', 'normal' );
    remove_meta_box( 'dashboard_right_now', 'dashboard', 'normal' );

}
add_action('admin_init', 'prop_remove_dashboard_widgets');


//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_6_] Remove Admin Pages & Submenus  //

function prop_remove_pages()
{

    // remove_menu_page( 'index.php' );                          // Dashboard
    // remove_menu_page( 'edit.php' );                           // Posts
    // remove_menu_page( 'upload.php' );                         // Media
    // remove_menu_page( 'edit.php?post_type=page' );            // Pages
    // remove_menu_page( 'themes.php' );                         // Appearance
    // remove_menu_page( 'plugins.php' );                        // Plugins
    // remove_menu_page( 'users.php' );                          // Users
    // remove_menu_page( 'tools.php' );                          // Tools
    // remove_menu_page( 'options-general.php' );                // Settings

    // Remove Competitions CPT from admin for non-admins
    // remove_menu_page('edit.php?post_type=acf-field-group'); // ACF
 
}
add_action('admin_menu', 'prop_remove_pages');


function prop_remove_submenus()
{

    remove_submenu_page('themes.php', 'widgets.php'); // Widgets Submenu

}
add_action('admin_head', 'prop_remove_submenus');


//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_7_] Remove Comments  //

function remove_admin_menus()
{

    remove_menu_page('edit-comments.php');

}
add_action('admin_menu', 'remove_admin_menus');

function remove_comment_support()
{

    remove_post_type_support('post', 'comments');
    remove_post_type_support('page', 'comments');

}
add_action('admin_init', 'remove_comment_support', 100);

function my_admin_bar_render()
{

    global $wp_admin_bar;
    $wp_admin_bar->remove_menu('comments');

}
add_action('wp_before_admin_bar_render', 'my_admin_bar_render');


//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_8_] Disable Emoji's in tinyMCE  //

function prop_disable_emojicons_tinymce($plugins)
{

    if (is_array($plugins)) {
        return array_diff($plugins, array('wpemoji'));
    } else {
        return array();
    }

}
add_action('init', 'prop_disable_emojicons_tinymce');


//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_9_] Disable XML  //

//  Disable XML RPC
add_filter('xmlrpc_enabled', '__return_false');
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');

//  Disable XMLRPC call
function prop_kill_xmlrpc($action)
{

    if ($action === 'pingback.ping') {
        wp_die('Pingbacks are not supported', 'Not Allowed!', ['response' => 403]);
    }

}
add_action('xmlrpc_call', 'prop_kill_xmlrpc');


//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_10_] Pingback  //

//  Remove pingback header
function prop_filter_headers($headers)
{

    if (isset($headers['X-Pingback'])) {
        unset($headers['X-Pingback']);
    }
    return $headers;

}
add_filter('wp_headers', 'prop_filter_headers', 10, 1);

//  Kill bloginfo('pingback_url')
function prop_kill_pingback_url($output, $show)
{

    if ($show === 'pingback_url') {
        $output = '';
    }
    return $output;

}
add_filter('bloginfo_url', 'prop_kill_pingback_url', 10, 2);


//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_11_] Kill Trackback Rewrite Rule  //

function prop_filter_rewrites($rules)
{

    foreach ($rules as $rule => $rewrite) {
        if (preg_match('/trackback\/\?\$$/i', $rule)) {
            unset($rules[$rule]);
        }
    }
    return $rules;

}
add_filter('rewrite_rules_array', 'prop_filter_rewrites');


//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_12_] Prevent SSL Capability Testing  //

remove_filter('atom_service_url', 'atom_service_url_filter');


//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_13_] User Access  //

//  Allow editors access to menus
$role_object = get_role('editor');
$role_object->add_cap('edit_theme_options');


//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_14_] Remove Custom CSS  //

function prop_remove_css_section($wp_customize)
{

    $wp_customize->remove_section('custom_css');

}
add_action('customize_register', 'prop_remove_css_section', 15);


//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_15_] Make Site Public  //

function prop_set_site_public()
{

    if (get_option('blog_public') == 0) {
        update_option('blog_public', '1');
    }

}
add_action('wp_login', 'prop_set_site_public', 10, 2);


//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_16_] Remove content editor  //

function remove_content_editor()
{
    remove_post_type_support('page', 'editor');
}
add_action('admin_head', 'remove_content_editor');


//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_17_] Enable future posts in archives and posts  //

add_action('pre_get_posts', function ($wp_query) {
    global $wp_post_statuses;

    if (!empty($wp_post_statuses['future']) &&
        !is_admin() &&
        $wp_query->is_main_query() && ($wp_query->is_date() ||
        $wp_query->is_single())) {
        $wp_post_statuses['future']->public = true;
    }
});


//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_18_] Permalinks for future post  //

function future_permalink($permalink, $post, $leavename)
{
    /* for filter recursion (infinite loop) */
    static $recursing = false;

    if (empty($post->ID)) {
        return $permalink;
    }

    if (!$recursing) {
        if (isset($post->post_status) && ('future' === $post->post_status)) {
            // set the post status to publish to get the 'publish' permalink
            $post->post_status = 'publish';
            $recursing = true;
            return get_permalink($post, $leavename);
        }
    }

    $recursing = false;
    return $permalink;
}

// For Custom post types
add_filter('post_type_link', 'future_permalink', 10, 4);


//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_19_] Remove Search Querying  //

// This function removes the natural WordPress Search functionality, /search/anything will 404, unless it is an actual page

function remove_search_querying($query, $error = true)
{

    if (!is_admin()) {
        if (is_search()) {
            $query->is_search = false;
            $query->query_vars[s] = false;
            $query->query[s] = false;
            if ($error == true)
                $query->is_404 = true;
        }
    }

}
add_action('parse_query', 'remove_search_querying');


//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_20_] Add Theme Support For Title  //

add_theme_support( 'title-tag' );
