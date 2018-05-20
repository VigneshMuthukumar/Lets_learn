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
define('DB_NAME', 'w');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'mouli0012');

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
define('AUTH_KEY',         'GdyQ<*7WpB@O}YmVAbph9S?[WI]zhNhG2TfiaY9uW}bDHUXi28l@imV8.x0RvH+l');
define('SECURE_AUTH_KEY',  'C^;XhlMTI^y.K(xwZy4$!+iWrp/KDTJ.hu#ew*Z:x|}d.uB-Cdl,V?cn[+jUg#yl');
define('LOGGED_IN_KEY',    '?RVN@P}zP*KI.^X6>J(}>0p]%EUt)V#W.sqnN]vmt.(zbt44;HOi<{{N2.3}2Z<q');
define('NONCE_KEY',        'PrgWbMkDMk}ZgB0MFxSk];dLK2^EB,)Fk;6}J;.+9PVFi^c-DJ2sF:E^(Rk;}vH]');
define('AUTH_SALT',        'po;o{(pn;XP5;v2%FR}[N8rr3-<Kf2Vtns[HelA 4o79sQ(DB3;b:0&aG;W._a6M');
define('SECURE_AUTH_SALT', '`&=xFAzEWCl,iMFx3qhnNJ3LN>@0e+;s|4UdCCqg>&.5tD#I+yt31hg_jQ#~.f_-');
define('LOGGED_IN_SALT',   'X/Gklogwci>a:c>f{6Qag16V=E/:AbAm#V>VW$c ?^u!*8.2z}+V7%b#~*yIg7Uo');
define('NONCE_SALT',       'kG*.OrvzsL[?=SBu#K3l/dFa~Zw&2]}_8]N!~&%D~1Ma^,2q4fHu&|O>gac%v<.`');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

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
