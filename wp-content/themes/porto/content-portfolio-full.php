<?php
global $porto_settings, $porto_layout;

$portfolio_layout = 'full';

$portfolio_info = get_post_meta($post->ID, 'portfolio_info', true);
$portfolio_link = get_post_meta($post->ID, 'portfolio_link', true);
$skill_list = get_the_term_list($post->ID, 'portfolio_skills', '', '</li><li><i class="fa fa-check-circle"></i> ', '');
$portfolio_location = get_post_meta($post->ID, 'portfolio_location', true);
$portfolio_client = get_post_meta($post->ID, 'portfolio_client', true);
$portfolio_client_link = get_post_meta($post->ID, 'portfolio_client_link', true);
$portfolio_author_quote = get_post_meta($post->ID, 'portfolio_author_quote', true);
$portfolio_author_name = get_post_meta($post->ID, 'portfolio_author_name', true);
$portfolio_author_image = get_post_meta($post->ID, 'portfolio_author_image', true);
$portfolio_author_role = get_post_meta($post->ID, 'portfolio_author_role', true);

$share = porto_get_meta_value('portfolio_share');

$post_class = array();
$post_class[] = 'portfolio-' . $portfolio_layout;
if ($porto_settings['post-title-style'] == 'without-icon')
    $post_class[] = 'post-title-simple';
?>

<article <?php post_class($post_class); ?>>

    <?php if ($porto_settings['portfolio-page-nav']) : ?>
    <div class="portfolio-title<?php echo ($porto_layout === 'widewidth' ? ' container m-t-lg' : '') ?>">
        <div class="row">
            <div class="portfolio-nav-all col-lg-1">
                <a title="<?php _e('Back to list', 'porto') ?>" data-tooltip href="<?php echo get_post_type_archive_link( 'portfolio' ) ?>"><i class="fa fa-th"></i></a>
            </div>
            <div class="col-lg-10 text-center">
                <h2 class="entry-title shorter"><?php the_title(); ?></h2>
				
				<?php if ( $porto_settings['portfolio-image-count'] == true ) :
					$portfolio_images_count = count(porto_get_featured_images()); ?>
					<p class="font-size-xs"><?php printf( esc_html( _n( '%d photo', '%d photos', $portfolio_images_count, 'porto' ) ), $portfolio_images_count ); ?></p>
				<?php endif; ?>
				
            </div>
            <div class="portfolio-nav col-lg-1">
                <?php previous_post_link('%link', '<div data-tooltip title="'.__('Previous', 'porto').'" class="portfolio-nav-prev"><i class="fa"></i></div>'); ?>
                <?php next_post_link('%link', '<div data-tooltip title="'.__('Next', 'porto').'" class="portfolio-nav-next"><i class="fa"></i></div>'); ?>
            </div>
        </div>
    </div>
    <hr class="<?php echo ($porto_layout === 'widewidth' ? 'm-t-xl m-b-none solid' : 'tall') ?>">
    <?php endif; ?>

    <?php porto_render_rich_snippets( false ); ?>

    <?php
    // Portfolio Slideshow
    $slideshow_type = get_post_meta($post->ID, 'slideshow_type', true);

    if (!$slideshow_type)
        $slideshow_type = 'images';

    $portfolio_link = get_post_meta($post->ID, 'portfolio_link', true);
    $show_external_link = $porto_settings['portfolio-external-link'];

    if ($slideshow_type != 'none') : ?>
        <?php if ($slideshow_type == 'images') :
            $featured_images = porto_get_featured_images();
            $image_count = count($featured_images);

            if ($image_count) :
                $slider_type = get_post_meta($post->ID, 'slider_type', true);
                $slider_thumbs_count = get_post_meta($post->ID, 'slider_thumbs_count', true);
                if (!$slider_type) {
                    $slider_type = $porto_settings['portfolio-slider'];
                    $slider_thumbs_count = $porto_settings['portfolio-slider-thumbs-count'];
                }
                if (!$slider_thumbs_count)
                    $slider_thumbs_count = $porto_settings['portfolio-slider-thumbs-count'];
                ?>
                <div class="portfolio-image<?php if ($image_count == 1) echo ' single'; ?><?php if ($porto_layout === 'widewidth' && is_singular('portfolio')) echo ' wide' ?>">
                    <?php if ($slider_type == 'with-thumbs') :
                        $lightbox = false;
                        $lightbox_options = '';
                        if ($porto_settings['portfolio-zoom']) {
                            $lightbox = true;
                            $lightbox_options = array();
                            $lightbox_options['delegate'] = 'a';
                            $lightbox_options['type'] = 'image';
                            $lightbox_options['gallery'] = array();
                            $lightbox_options['gallery']['enabled'] = true;
                            $lightbox_options = json_encode($lightbox_options);
                        }
                        $options = array();
                        $options['items'] = 1;
                        $options['margin'] = 10;
                        $options['nav'] = true;
                        $options['dots'] = false;
                        $options['loop'] = false;
                        $options = json_encode($options);
                        ?>
                        <div class="thumb-gallery<?php echo $lightbox ? ' lightbox' : '' ?>"<?php if ($lightbox) : ?> data-plugin-options="<?php echo esc_attr($lightbox_options) ?>"<?php endif; ?>>
                            <div class="porto-carousel thumb-gallery-detail owl-carousel show-nav-hover" data-plugin-options="<?php echo esc_attr($options) ?>">
                                <?php
                                foreach ($featured_images as $featured_image) {
                                    $attachment = porto_get_attachment($featured_image['attachment_id']);
                                    if ($attachment) {
                                        ?>
                                        <div class="thumb-gallery-item">
                                            <?php if ($lightbox) : ?><a href="<?php echo $attachment['src'] ?>" title="<?php echo $attachment['alt'] ?>"><?php endif; ?>
                                            <span class="thumb-info thumb-info-centered-info<?php if (!$lightbox) echo ' thumb-info-hide-wrapper-bg thumb-info-no-zoom' ?> font-size-xl">
                                                <span class="thumb-info-wrapper font-size-xl">
                                                    <img class="img-responsive" alt="<?php echo $attachment['alt'] ?>" width="<?php echo $attachment['width'] ?>" height="<?php echo $attachment['height'] ?>" src="<?php echo $attachment['src'] ?>">
                                                    <?php if ($lightbox) : ?>
                                                        <span class="thumb-info-title font-size-xl">
                                                        <span class="thumb-info-inner font-size-xl"><i class="Simple-Line-Icons-magnifier font-size-xl"></i></span>
                                                    </span>
                                                    <?php endif; ?>
                                                </span>
                                            </span>
                                            <?php if ($lightbox) : ?></a><?php endif; ?>
                                        </div>
                                    <?php
                                    }
                                }
                                ?>
                            </div>
                        </div>
                        <?php
                        if ($image_count > 1) :
                            $options = array();
                            $options['items'] = $slider_thumbs_count;
                            $options['margin'] = 10;
                            $options['nav'] = false;
                            $options['dots'] = false;
                            $options['loop'] = false;
                            $options = json_encode($options);
                            ?>
                            <div class="porto-carousel thumb-gallery-thumbs owl-carousel show-nav-hover" data-plugin-options="<?php echo esc_attr($options) ?>">
                                <?php
                                foreach ($featured_images as $featured_image) {
                                    $attachment = porto_get_attachment($featured_image['attachment_id']);
                                    if ($attachment) {
                                        ?>
                                        <div class="thumb-gallery-thumbs-item">
                                            <img alt="<?php echo $attachment['alt'] ?>" src="<?php echo $attachment['src'] ?>" class="img-responsive cur-pointer">
                                        </div>
                                    <?php
                                    }
                                }
                                ?>
                            </div>
                        <?php endif; ?>
                    <?php else :
                        $options = array();
                        $options['themeConfig'] = true;
                        if ($porto_layout === 'widewidth' && is_singular('portfolio')) {
                            $options['dots'] = false;
                            $options['nav'] = true;
                            $options['stagePadding'] = 0;
                        }
                        $options = json_encode($options);
                        ?>
                        <div class="portfolio-image<?php if ($image_count == 1) echo ' single'; ?><?php if ($porto_layout === 'widewidth' && is_singular('portfolio')) echo ' wide' ?>">
                            <div class="portfolio-slideshow porto-carousel owl-carousel<?php if ($porto_layout === 'widewidth' && is_singular('portfolio')) echo ' big-nav' ?>" data-plugin-options="<?php echo esc_attr($options) ?>">
                                <?php
                                foreach ($featured_images as $featured_image) {
                                    $attachment = porto_get_attachment($featured_image['attachment_id']);
                                    if ($attachment) {
                                        ?>
                                        <div>
                                            <div class="img-thumbnail<?php if ($porto_layout === 'widewidth') echo ' img-thumbnail-no-borders' ?>">
                                                <img class="owl-lazy img-responsive" width="<?php echo $attachment['width'] ?>" height="<?php echo $attachment['height'] ?>" data-src="<?php echo $attachment['src'] ?>" alt="<?php echo $attachment['alt'] ?>" />
                                                <?php if ($porto_settings['portfolio-zoom']) : ?>
                                                    <span class="zoom" data-src="<?php echo $attachment['src']; ?>" data-title="<?php echo $attachment['caption']; ?>"><i class="fa fa-search"></i></span>
                                                <?php endif; ?>
                                            </div>
                                        </div>
                                    <?php
                                    }
                                }
                                ?>
                            </div>
                        </div>
                    <?php endif; ?>
                </div>
            <?php
            endif;
        endif;
        ?>

        <?php
        if ($slideshow_type == 'video') {
            $video_code = get_post_meta($post->ID, 'video_code', true);
            if ($video_code) {
                ?>
                <div class="portfolio-image single">
                    <div class="img-thumbnail fit-video<?php if ($porto_layout === 'widewidth') echo ' img-thumbnail-no-borders' ?>">
                        <?php echo do_shortcode($video_code) ?>
                    </div>
                </div>
            <?php
            }
        }
    endif;
    ?>

    <div class="m-t-lg<?php echo ($porto_layout === 'widewidth' ? ' container' : '') ?>">
        <div class="portfolio-info pt-none">
            <ul>
                <?php if (in_array('like', $porto_settings['portfolio-metas'])) : ?>
                    <li>
                        <?php echo porto_portfolio_like() ?>
                    </li>
                <?php endif;
                if (in_array('date', $porto_settings['portfolio-metas'])) : ?>
                    <li>
                        <i class="fa fa-calendar"></i> <?php echo get_the_date() ?>
                    </li>
                <?php endif;
                $cat_list = get_the_term_list($post->ID, 'portfolio_cat', '', ', ', '');
                if (in_array('cats', $porto_settings['portfolio-metas']) && $cat_list) : ?>
                    <li>
                        <i class="fa fa-tags"></i> <?php echo $cat_list ?>
                    </li>
                <?php endif; ?>
                <?php
                if (function_exists('Post_Views_Counter') && Post_Views_Counter()->options['display']['position'] == 'manual' && in_array( 'portfolio', (array) Post_Views_Counter()->options['general']['post_types_count'] )) {
                    $post_count = do_shortcode('[post-views]');
                    if ($post_count) : ?>
                        <li>
                            <?php echo $post_count ?>
                        </li>
                    <?php endif;
                }
                ?>
            </ul>
        </div>

        <div class="row">
            <?php
            $show_right = (in_array('location', $porto_settings['portfolio-metas']) && $portfolio_location)
                || (in_array('client', $porto_settings['portfolio-metas']) && $portfolio_client)
                || (in_array('quote', $porto_settings['portfolio-metas']) && $portfolio_author_quote)
                || ($porto_settings['share-enable'] && 'no' !== $share && ('yes' === $share || ('yes' !== $share && $porto_settings['portfolio-share'])));
            ?>
            <div class="col-lg-<?php echo $show_right ? 7 : 12 ?> m-t-sm">
                <?php if (get_the_content()) : ?><h5 class="portfolio-desc m-t-sm"><?php _e('Project Description', 'porto') ?></h5><?php endif; ?>

                <div class="post-content">

                    <?php
                    the_content();
                    wp_link_pages( array(
                        'before'      => '<div class="page-links"><span class="page-links-title">' . __( 'Pages:', 'porto' ) . '</span>',
                        'after'       => '</div>',
                        'link_before' => '<span>',
                        'link_after'  => '</span>',
                        'pagelink'    => '<span class="screen-reader-text">' . __( 'Page', 'porto' ) . ' </span>%',
                        'separator'   => '<span class="screen-reader-text">, </span>',
                    ) );
                    ?>

                    <div class="post-gap-small"></div>

                </div>

                <?php if ($portfolio_info) : ?>
                    <h5 class="m-t-sm"><?php _e('More Information', 'porto') ?></h5>
                    <div class="m-b-lg">
                        <?php echo do_shortcode(wpautop($portfolio_info)) ?>
                    </div>
                <?php endif; ?>

                <?php
                if ($portfolio_link) :
                    ?>
                    <div class="post-gap-small"></div>

                    <a target="_blank" class="btn btn-primary btn-icon" href="<?php echo esc_url($portfolio_link) ?>">
                        <i class="fa fa-external-link"></i><?php _e('Live Preview', 'porto') ?>
                    </a>

                    <span data-appear-animation-delay="800" data-appear-animation="rotateInUpLeft" class="dir-arrow <?php echo 'hlb' ?>"></span>

                    <div class="post-gap"></div>
                <?php endif; ?>

                <ul class="portfolio-details">
                    <?php
                    if (in_array('skills', $porto_settings['portfolio-metas']) && $skill_list) : ?>
                        <li>
                            <h5><?php _e('Skills', 'porto') ?></h5>
                            <ul class="list list-skills icons list-unstyled list-inline">
                                <li><i class="fa fa-check-circle"></i>
                                    <?php echo $skill_list ?>
                                </li>
                            </ul>
                        </li>
                    <?php
                    endif;
                    ?>
                </ul>
            </div>
            <?php if ($show_right) : ?>
            <div class="col-lg-5 m-t-sm">
                <ul class="portfolio-details">
                    <?php
                    if (in_array('location', $porto_settings['portfolio-metas']) && $portfolio_location) : ?>
                        <li>
                            <h5 class="m-t-md"><?php _e('Location', 'porto') ?></h5>
                            <p><?php echo esc_html($portfolio_location); ?></p>
                        </li>
                    <?php
                    endif;
                    if (in_array('client', $porto_settings['portfolio-metas']) && $portfolio_client) : ?>
                        <li>
                            <h5 class="m-t-md"><?php _e('Client', 'porto') ?></h5>
                            <p><?php echo esc_html($portfolio_client); if ($portfolio_client_link): ?> - <a href="<?php echo $portfolio_client_link ?>" target="_blank"><i class="fa fa-external-link"></i> <?php echo $portfolio_client_link ?></a><?php endif; ?></p>
                        </li>
                    <?php
                    endif;
                    if (in_array('quote', $porto_settings['portfolio-metas']) && $portfolio_author_quote) :
                    ?>
                    <li>
                        <div class="testimonial testimonial-style-4">
                            <blockquote>
                                <p><?php echo $portfolio_author_quote ?></p>
                            </blockquote>
                            <div class="testimonial-arrow-down"></div>
                            <div class="testimonial-author">
                                <?php if ($portfolio_author_image) : ?>
                                <div class="testimonial-author-thumbnail">
                                    <img alt="" class="img-responsive img-circle" src="<?php echo esc_url($portfolio_author_image) ?>">
                                </div>
                                <?php endif; ?>
                                <p><strong><?php echo $portfolio_author_name ?></strong><span><?php echo $portfolio_author_role ?></span></p>
                            </div>
                        </div>
                    </li>
                    <?php
                    endif;
                    if ($porto_settings['share-enable'] && 'no' !== $share && ('yes' === $share || ('yes' !== $share && $porto_settings['portfolio-share']))) : ?>
                        <li>
                            <h5 class="m-t-md"><?php _e('Share', 'porto') ?></h5>
                            <?php get_template_part('share') ?>
                        </li>
                    <?php endif; ?>
                </ul>
            </div>
            <?php endif; ?>
        </div>

        <?php if ($porto_settings['portfolio-author']) : ?>
            <div class="post-gap"></div>
            <div class="post-block post-author clearfix">
                <?php if ($porto_settings['post-title-style'] == 'without-icon') : ?>
                    <h4><?php _e('Author', 'porto') ?></h4>
                <?php else : ?>
                    <h3><i class="fa fa-user"></i><?php _e('Author', 'porto') ?></h3>
                <?php endif; ?>
                <div class="img-thumbnail">
                    <?php echo get_avatar(get_the_author_meta('email'), '80'); ?>
                </div>
                <p><strong class="name"><?php the_author_posts_link(); ?></strong></p>
                <p><?php the_author_meta("description"); ?></p>
            </div>
        <?php endif; ?>

        <?php if ($porto_settings['portfolio-comments']) : ?>
            <div class="post-gap"></div>
            <?php
            wp_reset_postdata();
            comments_template();
            ?>
        <?php endif; ?>

    </div>

</article>