<?php

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //

//  This file creates any custom taxonomies we need for our theme. Get started
//  by un-commenting everything below, and customizing the taxonomy to suit.

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //

function create_prop_taxonomies() {

    register_taxonomy( 'propmenus_preferences',

        //  What CPT's will the Taxonomy belong to?  //
        array( 'propmenus' ),

            // Taxonomy Arguments //
            array(
                //  What will the Taxonomy be known as?  //
                'labels' => array(
                    'name'              => _x( 'Preferences', 'preferences' ),
                    'singular_name'     => _x( 'Preference', 'preference' ),
                    'search_items'      => __( 'Search Preferences' ),
                    'all_items'         => __( 'All Preferences' ),
                    'parent_item'       => __( 'Parent Preference' ),
                    'parent_item_colon' => __( 'Parent Preference:' ),
                    'edit_item'         => __( 'Edit Preference' ),
                    'update_item'       => __( 'Update Preference' ),
                    'add_new_item'      => __( 'Add New Preference' ),
                    'new_item_name'     => __( 'New Preference' ),
                    'menu_name'         => __( 'Preferences' )
                ),
                //  Settings - how will the Taxonomy behave?  //
                'hierarchical'      => true,
                'show_ui'           => true,
                'show_in_rest'      => true,
                'show_admin_column' => true,
                'query_var'         => true,
                'rewrite'           => array( 'slug' => 'preferences' )

            )

        );

    //  Add the next taxonomy here  //

    flush_rewrite_rules();

}
add_action( 'init', 'create_prop_taxonomies' );
