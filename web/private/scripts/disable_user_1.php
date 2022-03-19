<?php
// Import all config changes.
echo "Disable user 1...\n";
passthru('drush user:block admin');
echo "User 1 disabled.\n";
