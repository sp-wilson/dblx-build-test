<?php

/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link http://wphierarchy.com/
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package propeller
 */

get_header();
locate_template('parts/layout.php', true);
get_footer();
