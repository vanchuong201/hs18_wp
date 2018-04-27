<?php get_header() ?>

<?php
global $porto_settings, $porto_layout;

$post_layout = $porto_settings['post-layout'];
$post_infinite = $porto_settings['blog-infinite'];

if ($post_infinite) {
    global $wp_rewrite, $wp_query;

    $page_num = get_query_var( 'paged' ) ? intval( get_query_var( 'paged' ) ) : 1;
    $page_link = get_pagenum_link();
    $page_max_num = $wp_query->max_num_pages;

    if ( !$wp_rewrite->using_permalinks() || is_admin() || strpos($page_link, '?') ) {
        if (strpos($page_link, '?') !== false)
        $page_path = apply_filters( 'get_pagenum_link', $page_link . '&amp;paged=');
        else
            $page_path = apply_filters( 'get_pagenum_link', $page_link . '?paged=');
    } else {
        $page_path = apply_filters( 'get_pagenum_link', $page_link . user_trailingslashit( $wp_rewrite->pagination_base . "/" ));
    }
}

?>

<div id="content" role="main" class="<?php if ($porto_layout === 'widewidth' || $porto_layout === 'wide-left-sidebar' || $porto_layout === 'wide-right-sidebar') { echo 'm-t-lg m-b-xl'; if (porto_get_wrapper_type() !=='boxed') echo ' m-r-md m-l-md'; } ?>">
    <?php if (have_posts()) : ?>

        <?php if ($post_layout == 'timeline') {
            global $porto_settings, $prev_post_year, $prev_post_month, $first_timeline_loop, $post_count, $post;
            $prev_post_year = null;
            $prev_post_month = null;
            $first_timeline_loop = false;
            $post_count = 1;

            ?>
        <div class="blog-posts posts-<?php echo $post_layout ?><?php if ($post_infinite) echo ' infinite-container' ?><?php if ($porto_settings['post-style'] == 'related') : ?> blog-posts-related<?php endif; ?>">
            <section class="timeline">
                <div class="timeline-body<?php if ($post_infinite) echo ' posts-infinite' ?>"<?php if ($post_infinite) : ?> data-pagenum="<?php echo esc_attr($page_num) ?>" data-pagemaxnum="<?php echo esc_attr($page_max_num) ?>" data-path="<?php echo esc_url($page_path) ?>"<?php endif; ?>>
        <?php } else if ($post_layout == 'grid') { ?>
        <div class="blog-posts posts-<?php echo $post_layout ?><?php if ($post_infinite) echo ' infinite-container' ?><?php if ($porto_settings['post-style'] == 'related') : ?> blog-posts-related<?php endif; ?>">
            <div class="grid row<?php if ($post_infinite) echo ' posts-infinite' ?>"<?php if ($post_infinite) : ?> data-pagenum="<?php echo esc_attr($page_num) ?>" data-pagemaxnum="<?php echo esc_attr($page_max_num) ?>" data-path="<?php echo esc_url($page_path) ?>"<?php endif; ?>>
        <?php } else { ?>
        <div class="blog-posts posts-<?php echo $post_layout ?><?php if ($post_infinite) echo ' infinite-container posts-infinite' ?>"<?php if ($post_infinite) : ?> data-pagenum="<?php echo esc_attr($page_num) ?>" data-pagemaxnum="<?php echo esc_attr($page_max_num) ?>" data-path="<?php echo esc_url($page_path) ?>"<?php endif; ?>>
        <?php } ?>
            <?php
			$page_for_posts_id = get_option( 'page_for_posts' );
			$page_share = get_post_meta($page_for_posts_id, 'page_share', true);
            while (have_posts()) {
                the_post();
                get_template_part('content', 'blog-'.$post_layout);
            }

            ?>

        <?php if ($post_layout == 'timeline') { ?>
                </div>

            </section>
        <?php } else if ($post_layout == 'grid') { ?>
            </div>
        <?php } else { ?>
        <?php } ?>
            <?php porto_pagination(); ?>
        </div>
        <?php wp_reset_postdata(); ?>
    <?php else : ?>
        <?php _e('Apologies, but no results were found for the requested archive.', 'porto'); ?>
    <?php endif; ?>
</div>
<?php get_footer() ?>