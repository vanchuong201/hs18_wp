<?php
/**
 * Cart Page
 *
 * @version     3.3.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

wc_print_notices();

do_action( 'woocommerce_before_cart' );

get_template_part( "woocommerce/cart/cart", porto_cart_version() );

do_action( 'woocommerce_after_cart' );