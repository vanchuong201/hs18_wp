<?php get_header() ?>

<?php

global $porto_settings, $porto_layout;

$faq_infinite = $porto_settings['faq-infinite'];

if ($faq_infinite) {
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

    <?php if (!is_search() && $porto_settings['faq-cat-sort-pos'] == 'content' && $porto_settings['faq-title']) : ?>
        <?php if ($porto_layout === 'widewidth') : ?><div class="container"><?php endif; ?>
        <?php if ($porto_settings['faq-sub-title']) : ?>
            <h2 class="m-b-xs"><?php echo force_balance_tags($porto_settings['faq-title']) ?></h2>
            <p class="lead m-b-xl"><?php echo force_balance_tags($porto_settings['faq-sub-title']) ?></p>
        <?php else : ?>
            <h2><?php echo force_balance_tags($porto_settings['faq-title']) ?></h2>
        <?php endif; ?>
        <?php if ($porto_layout === 'widewidth') : ?></div><?php endif; ?>
    <?php endif; ?>

    <?php if (have_posts()) : ?>

        <div class="page-faqs <?php if ($faq_infinite) echo ' infinite-container' ?> clearfix">

            <?php
            if ($porto_settings['faq-cat-sort-pos'] !== 'hide' && !is_search()) {
                if ($porto_settings['faq-cat-sort-pos'] === 'sidebar' && !($porto_layout == 'widewidth' || $porto_layout == 'fullwidth')) {
                    add_action('porto_before_sidebar', 'porto_show_faq_archive_filter', 1);
                } else if ($porto_settings['faq-cat-sort-pos'] === 'content') {
                    $faq_taxs = array();

                    $taxs = get_categories(array(
                        'taxonomy' => 'faq_cat',
                        'orderby' => isset($porto_settings['faq-cat-orderby']) ? $porto_settings['faq-cat-orderby'] : 'name',
                        'order' => isset($porto_settings['faq-cat-order']) ? $porto_settings['faq-cat-order'] : 'asc'
                    ));

                    foreach ($taxs as $tax) {
                        $faq_taxs[urldecode($tax->slug)] = $tax->name;
                    }

                    if (!$faq_infinite) {
                        global $wp_query;
                        $posts_faq_taxs = array();
                        if (is_array($wp_query->posts) && !empty($wp_query->posts)) {
                            foreach($wp_query->posts as $post) {
                                $post_taxs = wp_get_post_terms($post->ID, 'faq_cat', array("fields" => "all"));
                                if (is_array($post_taxs) && !empty($post_taxs)) {
                                    foreach ($post_taxs as $post_tax) {
                                        $posts_faq_taxs[urldecode($post_tax->slug)] = $post_tax->name;
                                    }
                                }
                            }
                        }
                        foreach ($faq_taxs as $key => $value) {
                            if (!isset($posts_faq_taxs[$key]))
                                unset($faq_taxs[$key]);
                        }
                    }

                    // Show Filters
                    if (is_array($faq_taxs) && !empty($faq_taxs)) : ?>
                        <?php if ($porto_layout === 'widewidth') : ?><div class="container"><?php endif; ?>
                        <ul class="faq-filter nav nav-pills sort-source">
                            <li class="active" data-filter="*"><a href="#"><?php echo __('Show All', 'porto'); ?></a></li>
                            <?php foreach ($faq_taxs as $faq_tax_slug => $faq_tax_name) : ?>
                                <li data-filter="<?php echo esc_attr($faq_tax_slug) ?>"><a href="#"><?php echo esc_html($faq_tax_name) ?></a></li>
                            <?php endforeach; ?>
                        </ul>
                        <hr>
                        <?php if ($porto_layout === 'widewidth') : ?></div><?php endif; ?>
                    <?php endif;
                }
            }
            ?>

            <div class="faq-row <?php if ($faq_infinite) : ?> faqs-infinite<?php endif; ?>"<?php if ($faq_infinite) : ?> data-pagenum="<?php echo esc_attr($page_num) ?>" data-pagemaxnum="<?php echo esc_attr($page_max_num) ?>" data-path="<?php echo esc_url($page_path) ?>"<?php endif; ?>>
                <?php
                while (have_posts()) {
                    the_post();

                    get_template_part('content', 'archive-faq');
                }
                ?>
            </div>

            <?php porto_pagination(); ?>

        </div>

        <?php wp_reset_postdata(); ?>

    <?php else : ?>

        <p><?php _e('Apologies, but no results were found for the requested archive.', 'porto'); ?></p>

    <?php endif; ?>

</div>

<?php get_footer() ?>