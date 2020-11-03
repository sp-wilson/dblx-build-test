<?php

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //

//  The below function extends the menus region functionality to allow
//  for SEO friendly urls for menus.
//
//  [_1_] Create Rewrite Rule

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_1_] Create Restaurant Menu Rewrite Rule  //

function prop_rewrite_rule()
{
    $menu_pages = get_field('pages', 'options');

    if (!$menu_pages) return;

    flush_rewrite_rules();
    add_rewrite_tag('%menu%', '([^&]+)');

    foreach ($menu_pages as $menu_page) {
        add_rewrite_rule('^' . $menu_page->post_name . '/([^/]*)/?', 'index.php?page_id=' . $menu_page->ID . '&menu=$matches[1]', 'top');
    }

}

if (class_exists('acf')) {
    
    add_action('init', 'prop_rewrite_rule', 10, 0);

}

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //
