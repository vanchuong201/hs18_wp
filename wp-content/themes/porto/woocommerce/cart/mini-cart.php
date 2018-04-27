<?php
/**
 * Mini-cart
 *
 * @version     3.3.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

global $porto_settings;

$porto_woo_version = porto_get_woo_version_number();

if (version_compare($porto_woo_version, '2.4', '<'))
    $has_items = (sizeof( WC()->cart->get_cart() ) > 0);
else
    $has_items = (! WC()->cart->is_empty());

$minicart_style = $porto_settings['minicart-popup-style'];
$minicart_head = '';
?>

<?php do_action( 'woocommerce_before_mini_cart' ); ?>

<?php if( $minicart_style == '2' ){
	$items = sizeof( WC()->cart->get_cart() );
	$minicart_head .= '<div class="total-count">';
		$minicart_head .= '<span>'.sprintf( esc_html( _n( '%d ITEM', '%d ITEMS', $items, 'porto' ) ), $items ).'</span>';
		$minicart_head .= '<a class="pull-right" href="'.esc_url( version_compare($porto_woo_version, '2.5', '<') ? WC()->cart->get_cart_url() : wc_get_cart_url() ).'">'.__( 'VIEW CART', 'porto' ).'</a>';
	$minicart_head .= '</div>';
} ?>

<?php echo $minicart_head; ?>
	
<ul class="cart_list product_list_widget scrollbar-inner <?php echo $args['list_class']; ?><?php echo ( $minicart_style ) ? 'minicart-style2' : ''; ?> ">
	
    <?php if ( $has_items ) : ?>
    	<?php do_action( 'woocommerce_before_mini_cart_contents' ); ?>
		<?php
			foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) {
				$_product     = apply_filters( 'woocommerce_cart_item_product', $cart_item['data'], $cart_item, $cart_item_key );
				$product_id   = apply_filters( 'woocommerce_cart_item_product_id', $cart_item['product_id'], $cart_item, $cart_item_key );

				if ( $_product && $_product->exists() && $cart_item['quantity'] > 0 && apply_filters( 'woocommerce_widget_cart_item_visible', true, $cart_item, $cart_item_key ) ) {
					$product_name  = apply_filters( 'woocommerce_cart_item_name', $_product->get_name(), $cart_item, $cart_item_key ) . '&nbsp;';
					$thumbnail     = apply_filters( 'woocommerce_cart_item_thumbnail', $_product->get_image(), $cart_item, $cart_item_key );
					$product_price = apply_filters( 'woocommerce_cart_item_price', WC()->cart->get_product_price( $_product ), $cart_item, $cart_item_key );
                    $product_permalink = apply_filters( 'woocommerce_cart_item_permalink', $_product->is_visible() ? $_product->get_permalink( $cart_item ) : '', $cart_item, $cart_item_key );
										
					?>
					<li class="woocommerce-mini-cart-item <?php echo esc_attr( apply_filters( 'woocommerce_mini_cart_item_class', 'mini_cart_item', $cart_item, $cart_item_key ) ); ?>">
						
						<div class="product-image"><div class="inner">
						<?php if ( ! $_product->is_visible() ) : ?>
							<?php echo str_replace( array( 'http:', 'https:' ), '', $thumbnail ); ?>
						<?php else : ?>
							<a href="<?php echo esc_url( $product_permalink ); ?>">
								<?php echo str_replace( array( 'http:', 'https:' ), '', $thumbnail ); ?>
							</a>
						<?php endif; ?>
						</div></div>
						<div class="product-details">
							<?php if ( ! $_product->is_visible() ) { ?>
								<?php echo $product_name; ?>
							<?php } else { ?>
								<a href="<?php echo esc_url( $product_permalink ); ?>">
									<?php echo $product_name ?>
								</a>
							<?php } ?>
							<?php echo function_exists( 'wc_get_formatted_cart_item_data' ) ? wc_get_formatted_cart_item_data( $cart_item ) : WC()->cart->get_item_data( $cart_item ); ?>

							<?php echo apply_filters( 'woocommerce_widget_cart_item_quantity', '<span class="quantity">' . sprintf( '%s &times; %s', $cart_item['quantity'], $product_price ) . '</span>', $cart_item, $cart_item_key ); ?>
							<?php
							echo apply_filters( 'woocommerce_cart_item_remove_link', sprintf(
								'<a href="%s" class="remove remove-product" aria-label="%s" data-product_id="%s" data-cart_id="%s" data-product_sku="%s"></a>',
								esc_url( function_exists( 'wc_get_cart_remove_url' ) ? wc_get_cart_remove_url( $cart_item_key ) : WC()->cart->get_remove_url( $cart_item_key ) ),
								__('Remove this item', 'porto'),
								esc_attr( $product_id ),
								esc_attr( $cart_item_key ),
								esc_attr( $_product->get_sku() )
							), $cart_item_key ); ?>
						</div>
						<div class="ajax-loading"></div>
					</li>
					<?php
				}
			}
		?>

		<?php do_action( 'woocommerce_mini_cart_contents' ); ?>

	<?php else : ?>

		<li class="woocommerce-mini-cart__empty-message empty">
			<?php 
			if( $minicart_style == '2' ){	
				_e( 'You have no items in your shopping cart.', 'porto' );
			}else {
				_e( 'No products in the cart.', 'porto' );
			}
			?>
		</li>

	<?php endif; ?>

</ul><!-- end product list -->

<?php if ( $has_items ) : ?>

	<p class="woocommerce-mini-cart__total total"><strong><?php if( $minicart_style == '2' ) { _e( 'Total', 'porto' ); } else { _e( 'Subtotal', 'porto' ); } ?>:</strong> <?php echo WC()->cart->get_cart_subtotal(); ?></p>

	<?php do_action( 'woocommerce_widget_shopping_cart_before_buttons' ); ?>

	<p class="woocommerce-mini-cart__buttons buttons">
		<a href="<?php echo esc_url( version_compare($porto_woo_version, '2.5', '<') ? WC()->cart->get_cart_url() : wc_get_cart_url() ); ?>" class="button wc-forward"><?php _e( 'View Cart', 'porto' ); ?></a>
		<a href="<?php echo esc_url( version_compare($porto_woo_version, '2.5', '<') ? WC()->cart->get_checkout_url() : wc_get_checkout_url() ); ?>" class="button checkout wc-forward"><?php _e( 'Checkout', 'porto' ); ?></a>
	</p>

<?php endif; ?>

<?php do_action( 'woocommerce_after_mini_cart' ); ?>
