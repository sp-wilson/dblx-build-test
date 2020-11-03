<?php

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //

//  This file sets up our custom Navigation.
//
//  [_01_] Walker Texas Ranger
//  [_02_] BEM Menu

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_01_] Walker Texas Ranger  //

//  Inserts some BEM naming sensibility into Wordpress menus

class walker_texas_ranger extends Walker_Nav_Menu
{

    function __construct($css_class_prefix)
    {
        $this->css_class_prefix = $css_class_prefix;
		// Define menu item names appropriately
        $this->item_css_class_suffixes = array(
            'item' => '__item',
            'parent_item' => 'has-subnav',
            'active_item' => '__item--active',
            'parent_of_active_item' => '__item--parent--active',
            'ancestor_of_active_item' => '__item--ancestor--active',
            'sub_menu' => '__sub-menu',
            'sub_menu_item' => '__sub-menu__item',
            'link' => '__link',
        );
    }

	// Check for children
    function display_element($element, &$children_elements, $max_depth, $depth = 0, $args, &$output)
    {
        $id_field = $this->db_fields['id'];
        if (is_object($args[0])) {
            $args[0]->has_children = !empty($children_elements[$element->$id_field]);
        }
        return parent::display_element($element, $children_elements, $max_depth, $depth, $args, $output);
    }

    function start_lvl(&$output, $depth = 1, $args = array())
    {
        $real_depth = $depth + 1;
        $indent = str_repeat("\t", $real_depth);
        $prefix = $this->css_class_prefix;
        $suffix = $this->item_css_class_suffixes;
        $classes = array(
            $prefix . $suffix['sub_menu'],
            $prefix . $suffix['sub_menu'] . '--' . $real_depth
        );
        $class_names = implode(' ', $classes);
		// Add a ul wrapper to sub nav
        $output .= "\n" . $indent . '<ul class="' . $class_names . '">' . "\n";
    }

	// Add main/sub classes to li's and links
    function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0)
    {

        global $wp_query;
        $indent = ($depth > 0 ? str_repeat("    ", $depth) : ''); // code indent
        $prefix = $this->css_class_prefix;
        $suffix = $this->item_css_class_suffixes;

        // Item classes
        $item_classes = array(
            'item_class' => ($depth == 0) ? $prefix . $suffix['item'] : '',
            'parent_class' => ($args->has_children) ? $parent_class = $suffix['parent_item'] . '' : '',
            'active_page_class' => in_array("current-menu-item", $item->classes) ? $prefix . $suffix['active_item'] : '',
            'active_parent_class' => in_array("current-menu-parent", $item->classes) ? $prefix . $suffix['parent_of_active_item'] : '',
            'active_ancestor_class' => in_array("current-menu-ancestor", $item->classes) ? $prefix . $suffix['ancestor_of_active_item'] : '',
            'depth_class' => ($depth >= 1) ? $prefix . $suffix['sub_menu_item'] . ' ' : '',
            'item_id_class' => ($depth >= 1) ? $prefix . '__item' . ' ' : '',
            // 'item_id_class' => $prefix . '__item',
            'user_class' => $item->classes[0] !== '' ? $item->classes[0] : ''
        );

        // convert array to string excluding any empty values
        $class_string = implode("  ", array_filter($item_classes));

        // Add the classes to the wrapping <li>
        $output .= $indent . '<li class="' . $class_string . '" role="menuitem">';

        // Link classes
        $link_classes = array(
            'item_link' => $depth == 0 ? $prefix . $suffix['link'] : '',
            'depth_class' => $depth >= 1 ? $prefix . $suffix['sub_menu'] . $suffix['link'] . '  ' . $prefix . $suffix['link'] : '',
        );
        $link_class_string = implode("  ", array_filter($link_classes));
        $link_class_output = 'class="' . $link_class_string . '"';

        // Link Image
        $image = (get_field('featured_image', $item->ID)) ? '' : null;
        $image && $image_output = '<span class="featured-image" data-bg="' . $image['sizes']['navigation'] . '" style="background-image: url(\'\');"></span>';

        // link attributes
        $attributes = !empty($item->attr_title) ? ' title="' . esc_attr($item->attr_title) . '"' : '';
        $attributes .= !empty($item->target) ? ' target="' . esc_attr($item->target) . '"' : '';
        $attributes .= !empty($item->xfn) ? ' rel="' . esc_attr($item->xfn) . '"' : '';
        $attributes .= !empty($item->url) ? ' href="' . esc_attr($item->url) . '"' : '';

        // Create link markup
        $item_output = $args->before;
        $item_output .= '<a' . $attributes . ' ' . $link_class_output . '>' . ((isset($image_output)) ? $image_output : null) . '<span>';
        $item_output .= $args->link_before;
        $item_output .= apply_filters('the_title', $item->title, $item->ID);
        $item_output .= $args->link_after;
        $item_output .= $args->after;
        $item_output .= '</span></a>';
		// Filter <li>
        $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
    }

}

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_04_] BEM Menu  //

//  Returns an instance of the walker_texas_ranger class with the following arguments

//  @param  string $location This must be the same as what is set in wp-admin/settings/menus for menu location.
//  @param  string $css_class_prefix This string will prefix all of the menu's classes, BEM syntax friendly
//  @param  arr / string $css_class_modifiers Provide either a string or array of values to apply extra classes to the <ul> but not the <li's>
//  @return [type]

function bem_menu(
    $location = "primary-navigation",
    $css_class_prefix = 'c-nav',
    $css_class_modifiers = null,
    $ul_class_prefix = '',
    $hidden = false
) {

    // Setup BEM class for the <ul>
    $ul_class_prefix = $css_class_prefix . '__list';

    // Check to see if any css modifiers were supplied
    if ($css_class_modifiers) {

        if (is_array($css_class_modifiers)) {

            $css_class_modifiers = preg_filter('/^/', $ul_class_prefix . '--', $css_class_modifiers);
            $modifiers = implode(" ", $css_class_modifiers);
            $modifiers = '  ' . $modifiers;

        } elseif (is_string($css_class_modifiers)) {

            $ul_class_prefix = $ul_class_prefix;
            $modifiers = '  ' . $ul_class_prefix . '--' . $css_class_modifiers;

        }

    } else {
        $modifiers = '';
    }

    if($hidden){
        $hidden = 'hidden';
    } else {
        $hidden = null;
    }

    $args = array(
        'theme_location' => $location,
        'container' => false,
        'items_wrap' => '<ul id="navigation" class="' . $ul_class_prefix . $modifiers . '  js-nav-list" role="menubar" '.$hidden.'>%3$s</ul>',
        'walker' => new walker_texas_ranger($css_class_prefix, true)
    );

    if (has_nav_menu($location)) {
        return wp_nav_menu($args);
    } else {
        echo "<p>Please create a menu in the admin area<p>";
    }

}

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //
