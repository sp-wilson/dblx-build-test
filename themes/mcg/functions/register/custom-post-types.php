<?php

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //

//  This file creates any custom post types we need for our theme. Get started
//  by un-commenting everything below, and customizing the cpt to suit.

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //

function create_prop_post_types() {

    register_post_type( 'propmenus',

        array(
            //  What will the CPT be known as?  //
            'labels' => array(
                'name'               => _x( 'Menus', 'menus' ),
                'singular_name'      => _x( 'Menu', 'menu' ),
                'menu_name'          => _x( 'Menus', 'menus' ),
                'name_admin_bar'     => _x( 'Menu', 'menu' ),
                'add_new'            => _x( 'Add New', 'menu' ),
                'add_new_item'       => __( 'Add New Menu' ),
                'new_item'           => __( 'New Menus' ),
                'edit_item'          => __( 'Edit Menus' ),
                'view_item'          => __( 'View Menus' ),
                'all_items'          => __( 'All Menus' ),
                'search_items'       => __( 'Search Menus' ),
                'parent_item_colon'  => __( 'Parent Menu:' ),
                'not_found'          => __( 'No menus found.' ),
                'not_found_in_trash' => __( 'No menus found in Trash.' )
            ),
            //  Settings - how will the CPT behave?  //
            'public'                => true,
            'publicly_queryable'    => true,
            'show_ui'               => true,
            'exclude_from_search'   => true,
            'has_archive'           => false,
            'query_var'             => false,
            'rewrite'               => array('slug' => 'menus'),
            'menu_icon'             => 'dashicons-carrot',
            'menu_position'         => 21,
            //  WP Rest API Controls //
            'show_in_rest'          => false,
            'rest_controller_class' => 'WP_REST_Posts_Controller',
            //  What editable fields will the CPT support?  //
            'supports' => array(
                'title',
                'thumbnail'
            ),

        )

    );

    register_post_type( 'propforms',

        array(
            //  What will the CPT be known as?  //
            'labels' => array(
                'name'               => _x( 'Forms', 'forms' ),
                'singular_name'      => _x( 'Form', 'form' ),
                'menu_name'          => _x( 'Forms', 'forms' ),
                'name_admin_bar'     => _x( 'Form', 'form' ),
                'add_new'            => _x( 'Add New', 'form' ),
                'add_new_item'       => __( 'Add New Form' ),
                'new_item'           => __( 'New Forms' ),
                'edit_item'          => __( 'Edit Forms' ),
                'view_item'          => __( 'View Forms' ),
                'all_items'          => __( 'All Forms' ),
                'search_items'       => __( 'Search Forms' ),
                'parent_item_colon'  => __( 'Parent Form:' ),
                'not_found'          => __( 'No forms found.' ),
                'not_found_in_trash' => __( 'No forms found in Trash.' )
            ),
            //  Settings - how will the CPT behave?  //
            'public'                => false,
            'publicly_queryable'    => false,
            'show_ui'               => true,
            'exclude_from_search'   => true,
            'has_archive'           => false,
            'query_var'             => false,
            'rewrite'               => array('slug' => 'forms'),
            'menu_icon'             => 'dashicons-forms',
            'menu_position'         => 22,
            //  WP Rest API Controls //
            'show_in_rest'          => false,
            'rest_controller_class' => 'WP_REST_Posts_Controller',
            //  What editable fields will the CPT support?  //
            'supports' => array(
                'title',
                'revisions'
            ),

        )

    );

    //  Register any additional CPTs here  //

    flush_rewrite_rules();

}
add_action('init', 'create_prop_post_types');
