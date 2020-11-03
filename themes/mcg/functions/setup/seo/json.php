<?php

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //

//  Function that calls the company information which is outputted via 'json',
//  including address, opening times, and phone number.

//  ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****  //

if ( ! function_exists( 'prop_json' ) ) :

    function prop_json() {

    $venue = get_option('venue_information');

?>
    
    <script type="application/ld+json" title="Venue Information">
      {
        "@context": "http://schema.org",
        "@type": "FoodEstablishment",
        "name": "<?php bloginfo( 'name' ); ?>",
        "address": {
          "@type": "PostalAddress",
            <?
            //  Address street One  //
            if ( $venue['address']['line_1'] != '') {
              echo'"streetAddress": "'. $venue['address']['line_1'] .'",';
            }

            //  Address street Two  //
            if ( $venue['address']['line_2'] != '') {
              echo'"streetAddress": "'. $venue['address']['line_2'] .'",';
            }

            //  Town/City  //
            if ( $venue['address']['city'] != '' ) {
              echo'"addressLocality": "'. $venue['address']['city'] .'",';
            }

            //  County/State  //
            if ( $venue['address']['county'] != '' ) {
              echo'"addressRegion": "'. $venue['address']['county'] .'",';
            }

            //  Postcode/Zip  //
            if ( $venue['address']['postcode'] != '' ) {
              echo'"postalCode": "'. $venue['address']['postcode'] .'"';
            }


          ?>
        },
        "openingHours": [

            <?
            //  Opening Times Monday  //
            if ( $venue['opening_times']['1']['formatted'] != '' ) {
              echo'"'. $venue['opening_times']['1']['formatted'] .'",';
            }

            //  Opening Times Tuesday  //
            if ( $venue['opening_times']['2']['formatted'] != '' ) {
              echo'"'. $venue['opening_times']['2']['formatted'] .'",';
            }

            //  Opening Times Wednesday  //
            if ( $venue['opening_times']['3']['formatted'] != '' ) {
              echo'"'. $venue['opening_times']['3']['formatted'] .'",';
            }

            //  Opening Times Thursday  //
            if ( $venue['opening_times']['4']['formatted'] != '' ) {
              echo'"'. $venue['opening_times']['4']['formatted'] .'",';
            }

            //  Opening Times Friday  //
            if ( $venue['opening_times']['5']['formatted'] != '' ) {
              echo'"'. $venue['opening_times']['5']['formatted'] .'",';
            }

            //  Opening Times Saturday  //
            if ( $venue['opening_times']['6']['formatted'] != '' ) {
              echo'"'. $venue['opening_times']['6']['formatted'] .'",';
            }

            //  Opening Times Sunday  //
            if ( $venue['opening_times']['7']['formatted'] != '' ) {
              echo'"'. $venue['opening_times']['7']['formatted'] .'"';
            }

            ?>
        ],
        <? if ( $venue['contact']['phone_number'] != '' ) {
            echo'"telephone": "'. $venue['contact']['phone_number'] .'",';
        } ?>
        "url": "<?php echo site_url(); ?>",
        <? if ( $venue['branding']['logo'] != '' ) {
            echo'"logo": "'. $venue['branding']['logo'] .'",';
        } ?>
        "servesCuisine": [
            "English"
        ]
      }
    </script>

  <?php }

endif;
