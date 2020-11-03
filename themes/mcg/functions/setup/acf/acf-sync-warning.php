<?
/*
Plugin Name:  ACF Sync Warning
Description:  Show a warning to say acf fields need to be synced
Version:      1.0.0
*/
function acf_sync_warning() {

    // Taken from ACF Pro plugin
    $groups = acf_get_field_groups();
    // bail early if no field groups
    if (empty($groups)) return;

    // find JSON field groups which have not yet been imported
    $sync = array();
    foreach ($groups as $group) {
        // vars
        $local = acf_maybe_get($group, 'local', false);
        $modified = acf_maybe_get($group, 'modified', 0);
        $private = acf_maybe_get($group, 'private', false);
        $post_modified = get_post_modified_time('U', true, $group['ID'], true);

        // ignore DB / PHP / private field groups
        if ($local !== 'json' || $private) {
            // do nothing
        } elseif (!$group['ID']) {
            $sync[$group['key']] = $group;
        } elseif ( $modified > $post_modified ) {
            $sync[$group['key']] = $group;
        }
    }

    if(empty($sync)) return;

    if (is_admin() && ENVIRONMENT === 'development' ) {
        add_action('admin_notices', function () {
            echo '<div class="notice notice-error"><h1><strong>Warning: ACF Needs Syncing!</strong> <a href="' . site_url() . '/wp-admin/edit.php?post_type=acf-field-group&post_status=sync">Sync now</a></h1></div>';
        });
    }

}
add_action('init', 'acf_sync_warning');
?>
