<?php
/**
 * The template for displaying 404 pages (not found).
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package wppt
 */
?>

<?php get_header(); ?>

<section class="o-container">
    <h1 class="t-heading--alpha">404 - Page not found</h1>
    <p class="t-heading--gamma  u-mb-40">Not all who wander are lost</p>
    <p id="four-ou-four-error">
        You’ve ventured off the beaten path or been led astray. This is either because:
    </p>
    <ul aria-describedby="four-ou-four-error">
        <li>There is an error in the URL entered into your web browser. Please check the URL and try again.</li>
        <li>The page you are looking for has been moved or deleted.</li>
    </ul>
    <p>
        You can return to our homepage by clicking <a href="/" aria-label="Homepage.">here</a>.
    </p>
</section>

<?php get_footer(); ?>
