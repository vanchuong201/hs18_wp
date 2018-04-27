<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'shop');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '^ms(OtD>fjB`6`0mY#4 ]m-jM>Fc#<r)?Vil|(@s.Fak:GE3@)J]&)fO5+G=0Y A');
define('SECURE_AUTH_KEY',  'v 6i7C8^S$}@7sCXKGm^(OE.,V_3h8;2 |l`j4xe}YzA?-o?]BmnD-bYW1*P,Y9_');
define('LOGGED_IN_KEY',    'L-Ux<o/iXnOOfc:7A;iq!u ??.JD}{jPF<:0}^ClNMs `UE|_.}X5(U)8`5pt-$F');
define('NONCE_KEY',        's%|B:lpijO=$ -=mDrpz(5I~E@P*$M[S3{& T%[ v2ZSpLjarya(9)#Vimc0G|}q');
define('AUTH_SALT',        '6FK6U6iW._d;Izg2!::?]!_d.u+Og%|@?+d&?f3I]6PVrUu|/YPE6h.Z73jhfVyP');
define('SECURE_AUTH_SALT', 'Iy;6WV.tk[1}IK;hR+3%=<%(FSn0q{tkm!>v%?&hA qu4/`iG32Whgpg)g847j*b');
define('LOGGED_IN_SALT',   '#$#vAN769h.kL0<H0ZnhN)&(&HFm4`)%)r0(KK#|5!$>iclmLGe5UCcwh01[8tJ[');
define('NONCE_SALT',       'rvq!.3<P ~I+QTR9x8G4libte[=S&DVpA{w`&pL$(1,|&4UC3u)d=)x`#UKN=*?c');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'cd_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
