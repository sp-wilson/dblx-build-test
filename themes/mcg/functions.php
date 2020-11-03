<?php

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //

//  This file acts as a manifest for theme functions and controllers.
//  These files live in the 'functions' directory.

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //

//  THEME SETUP
//
//  These files prepare the theme for us, overwriting a few Wordpress defaults
//  and adding some additional theme agnostic functionality.

require_once('functions/setup/defaults/clean.php');         //  Remove junk from the head (rsd links etc.)
require_once('functions/setup/defaults/defaults.php');      //  Indirect theme controllers (permalinks etc.)
require_once('functions/setup/defaults/formatting.php');    //  Filters control the post output directly

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //

require_once('functions/setup/images/images.php');          //  Controlling images from backend to frontend
require_once('functions/setup/images/lazyload.php');        //  Controlling LazyLoading/Responsive serving of images

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //

require_once('functions/setup/acf/acf.php');                //  Creates Advanced Custom Field extensions

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //

require_once('functions/setup/scripts/enqueue-files.php');  //  Enqueue scripts and styles to head and footer

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //

require_once('functions/setup/navigation/navigation.php');  //  Adds in the Custom Walker Navigation

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //

require_once('functions/setup/seo/robots.php');             //  Extends the dynamic robots.txt
require_once('functions/setup/seo/json.php');               //  Search Engine Optimisation Schema
require_once('functions/setup/seo/url.php');                //  Search Engine Optimisation URL Rewrite


//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //

//  REGISTER
//
//  For lack of a better name, the files below register additional theme
//  specific functionality, including menus, post types and taxonomies.

require_once('functions/register/navigation-menus.php');               //  Register menus
// require_once('functions/register/custom-post-types.php');   //  Creates additional post types
// require_once('functions/register/custom-taxonomies.php');   //  Creates additional taxonomies

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //

//  ADMIN FUNCTIONS
//
//  Boosts functionality to the Wordpress backend

require_once('functions/admin/wp-styles.php');                  //  Custom WordPress login/admin styling/functionality





