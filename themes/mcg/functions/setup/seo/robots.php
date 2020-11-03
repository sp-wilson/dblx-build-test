<?php

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //

//  The below function extends the robots function to allow sitemap.xml to
//  work properly across multisite.
//
//  [_1_] Extend robots.txt

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //


//  [_1_] Extend robots.txt  //

function prop_extend_robots($robots)
{

    $url = get_site_url();

    $isStaging = strpos($url, '.standard.aws.prop.cm') || strpos($url, '.salient.aws.prop.cm');

    if ($isStaging == true) {

        $robots .= "\nDisallow: /";

    } else {

        $robots .= "\nSitemap: " . get_site_url() . "/sitemap_index.xml";

    }

    return $robots;

}
add_filter('robots_txt', 'prop_extend_robots');
