<?php
/**
 * The template to display the reviewers star rating in reviews
 *
 * @version 3.1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $comment;
$rating = intval( get_comment_meta( $comment->comment_ID, 'rating', true ) );

if ( $rating && 'yes' === get_option( 'woocommerce_enable_review_rating' ) ) { ?>

	<div itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating" class="star-rating" title="<?php echo esc_attr( $rating ) ?>">
		<span style="width:<?php echo ( esc_attr( $rating ) / 5 ) * 100; ?>%"><?php printf( esc_html__( '%s out of 5', 'woocommerce' ), '<strong itemprop="ratingValue">' . $rating . '</strong>' );
		?></span>
	</div>

<?php }
