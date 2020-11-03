<?php

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //

//  This file sets up any custom formatting for post types.
//
//  [_01_] Excerpt
//  [_02_] Pagination
//  [_03_] Custom WYSIWYG Formats
//	[_04_] Convert HEX to RGB
//	[_05_] Coordinate Calculate Distance
//	[_06_] Set Yoast Locale
//  [_07_] Trim String
//  [_08_] Body Class


//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_01_] Excerpt  //

//  Usage: get_excerpt(140);

function get_excerpt($limit, $source = null)
{

    var_dump(get_the_excerpt());

    if ($source == "content" ? ($excerpt = get_the_content()) : ($excerpt = get_the_excerpt()));

    $excerpt = preg_replace(" (\[.*?\])", '', $excerpt);
    $excerpt = strip_shortcodes($excerpt);
    $excerpt = strip_tags($excerpt);
    $excerpt = substr($excerpt, 0, $limit);
    $excerpt = substr($excerpt, 0, strripos($excerpt, " "));
    $excerpt = trim(preg_replace('/\s+/', ' ', $excerpt));
    $excerpt = $excerpt . '...';

    return $excerpt;

}


//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_02_] Pagination  //

//  Add pagination bar, and include custom post types if needed
function pagination_bar($loop)
{

    $total_pages = $loop->max_num_pages;

    if ($total_pages > 1) {

        $current_page = max(1, get_query_var('paged'));

        echo paginate_links([
            'base' => get_pagenum_link(1) . '%_%',
            'format' => 'page/%#%',
            'current' => $current_page,
            'total' => $total_pages,
        ]);

    }

}


//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//	[_03_] Custom WYSIWYG Formats  //

// Callback function to insert 'styleselect' into the $buttons array
function my_mce_buttons_2($buttons)
{
    array_unshift($buttons, 'styleselect');
    return $buttons;
}
// Register our callback to the appropriate filter
add_filter('mce_buttons_2', 'my_mce_buttons_2');

function my_mce_before_init_insert_formats($init_array)
{

	// Define the style_formats array
    $style_formats = array(
		// Each array child is a format with it's own settings
        array(
            'title' => 'Small',
            'inline' => 'span',
            'classes' => 'text  text--small'
        ),
        array(
            'title' => 'Medium',
            'inline' => 'span',
            'classes' => 'text  text--medium'
        ),
        array(
            'title' => 'Large',
            'inline' => 'span',
            'classes' => 'text  text--large'
        ),
        array(
            'title' => 'Underline',
            'inline' => 'span',
            'classes' => 'text  text--underline'
        ),
        array(
            'title' => 'Muli',
            'inline' => 'span',
            'styles' => array('font-family' => '\'Muli\', sans-serif'),
            'classes' => 'text  text--primary'
        ),
        array(
            'title' => 'Libre Baskerville',
            'inline' => 'span',
            'styles' => array('font-family' => '\'Libre Baskerville\', sans-serif'),
            'classes' => 'text  text--secondary'
        ),
        array(
            'title' => 'Poppins',
            'inline' => 'span',
            'styles' => array('font-family' => '\'Poppins\', sans-serif'),
            'classes' => 'text  text--tertiary'
        ),
        array(
            'title' => 'Line - Left',
            'inline' => 'span',
            'classes' => 'line  line--left',
            'wrapper' => true
        ),
        array(
            'title' => 'Line - Center',
            'inline' => 'span',
            'classes' => 'line  line--center',
            'wrapper' => true
        ),
        array(
            'title' => 'Line - Right',
            'inline' => 'span',
            'classes' => 'line  line--right',
            'wrapper' => true
        ),
        array(
            'title' => 'Line - Split',
            'inline' => 'span',
            'classes' => 'line  line--split',
            'wrapper' => true
        ),
        array(
            'title' => 'Size - Heading 1',
            'inline' => 'span',
            'classes' => 'h1',
        ),
        array(
            'title' => 'Size - Heading 2',
            'inline' => 'span',
            'classes' => 'h2',
        ),
        array(
            'title' => 'Size - Heading 3',
            'inline' => 'span',
            'classes' => 'h3',
        ),
        array(
            'title' => 'Size - Heading 4',
            'inline' => 'span',
            'classes' => 'h4',
        ),
        array(
            'title' => 'Size - Heading 5',
            'inline' => 'span',
            'classes' => 'h5',
        ),
        array(
            'title' => 'Size - Heading 6',
            'inline' => 'span',
            'classes' => 'h6',
        ),
    );

	// Insert the array, JSON ENCODED, into 'style_formats'
    $init_array['style_formats'] = json_encode($style_formats);

    $stylesheet_url = 'https://fonts.googleapis.com/css?family=Pathway+Gothic+One';  // Note #1
    if (empty($init_array['content_css'])) {  // Note #2
        $init_array['content_css'] = $stylesheet_url;
    } else {
        $init_array['content_css'] = $init_array['content_css'] . ',' . $stylesheet_url;
    }

    return $init_array;

}
// Attach callback to 'tiny_mce_before_init'
add_filter('tiny_mce_before_init', 'my_mce_before_init_insert_formats');

// Load the editor styles to display the new format in the back end
function my_theme_add_editor_styles()
{
    add_editor_style(get_template_directory_uri() . '/assets/admin/tinymce.css');
}
add_action('init', 'my_theme_add_editor_styles');


//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//	[_04_] Convert HEX to RGB  //

function hex2RGB($hexStr, $array)
{
    $hexStr = preg_replace("/[^0-9A-Fa-f]/", '', $hexStr);
    $rgbArray = array();
    if (strlen($hexStr) == 6) {
        $colorVal = hexdec($hexStr);
        $rgbArray['red'] = 0xFF & ($colorVal >> 0x10);
        $rgbArray['green'] = 0xFF & ($colorVal >> 0x8);
        $rgbArray['blue'] = 0xFF & $colorVal;
    }
    if ($array) {
        return $rgbArray;
    } else {
        return $rgbArray['red'] . ',' . $rgbArray['green'] . ',' . $rgbArray['blue'];
    }
}


//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//	[_05_] Coordinate Calculate Distance  //

function vincentyGreatCircleDistance($latitudeFrom, $longitudeFrom, $latitudeTo, $longitudeTo, $earthRadius = 6371000)
{
	// convert from degrees to radians
    $latFrom = deg2rad($latitudeFrom);
    $lonFrom = deg2rad($longitudeFrom);
    $latTo = deg2rad($latitudeTo);
    $lonTo = deg2rad($longitudeTo);

    $lonDelta = $lonTo - $lonFrom;
    $a = pow(cos($latTo) * sin($lonDelta), 2) +
        pow(cos($latFrom) * sin($latTo) - sin($latFrom) * cos($latTo) * cos($lonDelta), 2);
    $b = sin($latFrom) * sin($latTo) + cos($latFrom) * cos($latTo) * cos($lonDelta);

    $angle = atan2(sqrt($a), $b);
    return $angle * $earthRadius;
}


//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//	[_06_] Set Yoast Locale  //

function new_site_locale($value)
{

    $value = 'en_GB';

    return $value;

}
add_filter('wpseo_locale', 'new_site_locale');

add_filter('locale', function () {
    return 'en_GB';
});


//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_07_] Excerpt  //

//  Usage: trim_string(140, string);

function trim_string($limit, $source = null)
{

    $source = preg_replace(" (\[.*?\])", '', $source);
    $source = strip_shortcodes($source);
    $source = strip_tags($source);
    $source = substr($source, 0, $limit);
    $source = substr($source, 0, strripos($source, " "));
    $source = trim(preg_replace('/\s+/', ' ', $source));
    $source = $source . '...';

    return $source;

}


//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_08_] Body Class  //
// Add page slug to body class, love this - Credit: Starkers Wordpress Theme


function add_slug_to_body_class($classes)
{
    global $post;
    if (is_home()) {
        $key = array_search('blog', $classes, true);
        if ($key > -1) {
            unset($classes[$key]);
        }
    } elseif (is_page()) {
        $classes[] = sanitize_html_class($post->post_name);
    } elseif (is_singular()) {
        $classes[] = sanitize_html_class($post->post_name);
    }
    return $classes;
}
add_filter( 'body_class', 'add_slug_to_body_class' );


//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //
