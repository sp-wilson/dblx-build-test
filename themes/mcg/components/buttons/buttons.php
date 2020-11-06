<? if ($buttons): ?>
    <? foreach ($buttons as $button): ?>
        <? include( locate_template( '/components/buttons/button.php', false, false ) ); ?>
    <? endforeach; ?>
<? endif; ?>

<?php // Reset variable
$buttons = null;
$additional_classes = null;
