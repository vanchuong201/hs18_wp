<?php
global $post, $porto_settings, $porto_member_view, $porto_member_overview, $porto_member_socials, $porto_member_socials_style, $porto_member_ajax_load, $porto_member_ajax_modal, $porto_custom_zoom;
$member_id = get_the_ID();
$featured_images = porto_get_featured_images();
$member_link = get_post_meta($member_id, 'member_link', true);
$show_external_link = $porto_settings['member-external-link'];
$member_show_zoom = $porto_settings['member-zoom'];
$member_ajax = false;
$member_ajax_modal = false;
if ($porto_member_ajax_load == 'yes') $member_ajax = true;
else if ($porto_member_ajax_load == 'no') $member_ajax = false;
if ($porto_member_ajax_modal == 'yes') $member_ajax_modal = true;
else if ($porto_member_ajax_modal == 'no') $member_ajax_modal = false;
$thumb_class = 'thumb-info-hide-wrapper-bg';
$view_type = $porto_settings['member-view-type'];
if ($porto_member_view && $porto_member_view != 'classic') {
    if ($porto_member_view == 'onimage') $view_type = 0;
    if ($porto_member_view == 'outimage') $view_type = 2;
    if ($porto_member_view == 'outimage_cat') $view_type = 3;
}
if ($view_type) {
    //$thumb_class .= ' thumb-info-no-zoom';
    if ($porto_settings['member-archive-readmore']) {
        $thumb_class = 'thumb-info-centered-info';
    }
}
if($porto_custom_zoom && $porto_custom_zoom != 'zoom')
{
	$thumb_class .= ' thumb-info-no-zoom';
}
$ajax_attr = '';
if (!($show_external_link && $member_link) && $member_ajax) {
    $member_show_zoom = false;
     if ($member_ajax_modal)
        $ajax_attr = ' data-ajax-on-modal';
    else
        $ajax_attr = ' data-ajax-on-page';
}
if (count($featured_images)) :
    $attachment_id = $featured_images[0]['attachment_id'];
    $attachment = porto_get_attachment($attachment_id);
    $attachment_medium = porto_get_attachment($attachment_id, $porto_settings['member-image-size'] == 'full' ? 'full' : 'member');
    if ($attachment && $attachment_medium) :
        $role = get_post_meta($member_id, 'member_role', true);
        $cats = '';
        $terms = get_the_terms($member_id, 'member_cat');
        if ( !is_wp_error( $terms ) && !empty($terms) ) {
            $links = array();
            foreach ( $terms as $term ) {
                $links[] = $term->name;
            }
            $cats .= join( ', ', $links );
        }
        $show_info = false;
        
		if(isset($porto_member_socials_style) && $porto_member_socials_style == 'yes')
			$social_links_adv_pos = true;
		else
			$social_links_adv_pos = false;
		
        if ( $view_type == 2 || $view_type == 3 || $porto_member_overview == 'yes' || (!$porto_member_overview && $porto_settings['member-overview']) )
			$show_info = true;
        $share_links = '';
		// Social Share
		$share_facebook = get_post_meta($member_id, 'member_facebook', true);
		$share_twitter = get_post_meta($member_id, 'member_twitter', true);
		$share_linkedin = get_post_meta($member_id, 'member_linkedin', true);
		$share_googleplus = get_post_meta($member_id, 'member_googleplus', true);
		$share_pinterest = get_post_meta($member_id, 'member_pinterest', true);
		$share_email = get_post_meta($member_id, 'member_email', true);
		$share_vk = get_post_meta($member_id, 'member_vk', true);
		$share_xing = get_post_meta($member_id, 'member_xing', true);
		$share_tumblr = get_post_meta($member_id, 'member_tumblr', true);
		$share_reddit = get_post_meta($member_id, 'member_reddit', true);
		$share_vimeo = get_post_meta($member_id, 'member_vimeo', true);
		$share_instagram = get_post_meta($member_id, 'member_instagram', true);
		$share_whatsapp = get_post_meta($member_id, 'member_whatsapp', true);
		
		$target = (isset($porto_settings['member-social-target']) && $porto_settings['member-social-target']) ? ' target="_blank"' : '';
        if (($porto_member_socials == 'yes' || (!$porto_member_socials && $porto_settings['member-socials'])) && ($share_facebook || $share_twitter || $share_linkedin || $share_googleplus || $share_pinterest || $share_email || $share_vk || $share_xing || $share_tumblr || $share_reddit || $share_vimeo || $share_instagram || $share_whatsapp)) :
        $share_links .= '<span class="thumb-info-social-icons share-links '. ($show_info ? '' : ' b-none') . (!$view_type ? '' : ' m-r-none m-l-none') . ($view_type == 3 ? ' text-center' : '') .'">';
            
            if ($share_facebook) :
                $share_links .= '<a href="'.esc_url($share_facebook).'"'. $target . ' data-tooltip data-placement="bottom" title="'. __('Facebook', 'porto') .'" class="share-facebook">'. __('Facebook', 'porto') .'</a>';
            endif;
            if ($share_twitter) :
                $share_links .= '<a href="'. esc_url($share_twitter) .'"'. $target .' data-tooltip data-placement="bottom" title="'. __('Twitter', 'porto') .'" class="share-twitter">'. __('Twitter', 'porto') .'</a>';
            endif;
            if ($share_linkedin) :
                $share_links .= '<a href="'. esc_url($share_linkedin) .'" '. $target .' data-tooltip data-placement="bottom" title="'. __('LinkedIn', 'porto') .'" class="share-linkedin">'. __('LinkedIn', 'porto').'</a>';
            endif;
            if ($share_googleplus) :
                $share_links .= '<a href="'. esc_url($share_googleplus) .'"'. $target . ' data-tooltip data-placement="bottom" title="'. __('Google +', 'porto') .'" class="share-googleplus">'. __('Google +', 'porto') .'</a>';
            endif;
            if ($share_pinterest) :
                $share_links .= '<a href="'. esc_url($share_pinterest) .'"'. $target . ' data-tooltip data-placement="bottom" title="'. __('Pinterest', 'porto') .'" class="share-pinterest">'. __('Pinterest', 'porto') .'</a>';
            endif;
            if ($share_email) :
                $share_links .= '<a href="mailto:'. esc_attr($share_email) .'"'. $target . ' data-tooltip data-placement="bottom" title="'. __('Email', 'porto') .'" class="share-email">'. __('Email', 'porto') .'</a>';
            endif;
            if ($share_vk) :
                $share_links .= '<a  href="'. esc_url($share_vk) .'"'. $target . ' data-tooltip data-placement="bottom" title="'. __('VK', 'porto') .'" class="share-vk">'. __('VK', 'porto') .'</a>';
            endif;
            if ($share_xing) :
                $share_links .= '<a  href="'. esc_url($share_xing) .'"'. $target . ' data-tooltip data-placement="bottom" title="'. __('Xing', 'porto') .'" class="share-xing">'. __('Xing', 'porto') .'</a>';
            endif;
            if ($share_tumblr) :
                $share_links .= '<a  href="'. esc_url($share_tumblr) .'"'. $target . ' data-tooltip data-placement="bottom" title="'. __('Tumblr', 'porto') .'" class="share-tumblr">'. __('Tumblr', 'porto') .'</a>';
            endif;
            if ($share_reddit) :
                $share_links .= '<a  href="'. esc_url($share_reddit) .'"'. $target . ' data-tooltip data-placement="bottom" title="'. __('Reddit', 'porto') .'" class="share-reddit">'. __('Reddit', 'porto') .'</a>';
            endif;
            if ($share_vimeo) :
                $share_links .= '<a  href="'. esc_url($share_vimeo) .'"'. $target . ' data-tooltip data-placement="bottom" title="'. __('Vimeo', 'porto') .'" class="share-vimeo">'. __('Vimeo', 'porto') .'</a>';
            endif;
            if ($share_instagram) :
                $share_links .= '<a  href="'. esc_url($share_instagram) .'"'. $target . ' data-tooltip data-placement="bottom" title="'. __('Instagram', 'porto') .'" class="share-instagram">'. __('Instagram', 'porto') .'</a>';
            endif;
            if ($share_whatsapp) :
                $share_links .= '<a href="whatsapp://send?text='. esc_url($share_whatsapp) .'"'. $target . ' data-tooltip data-placement="bottom" title="'. __('WhatsApp', 'porto') .'" class="share-whatsapp" style="display:none">'. __('WhatsApp', 'porto') .'</a>';
            endif;
            
        $share_links .= '</span>';
        endif;
	
	
	    ?>
        
        
        <div class="member-item <?php echo $view_type == 2 ? ' align-center' : '' ?><?php echo $view_type ? ' member-item-' . $view_type : '' ?>">
            <span class="thumb-info <?php echo $thumb_class ?>">
                
                    <span class="thumb-info-wrapper <?php echo ( isset( $social_links_adv_pos) && $social_links_adv_pos ) ? 'member-social-adv-main' : '' ?>">
                    	<span class="thumb-member-container">
                    	<a class="text-decoration-none member-image" href="<?php if ($show_external_link && $member_link) echo $member_link; else the_permalink() ?>"<?php echo $ajax_attr ?>>
                        <img class="img-responsive" width="<?php echo $attachment_medium['width'] ?>" height="<?php echo $attachment_medium['height'] ?>" src="<?php echo $attachment_medium['src'] ?>" alt="<?php echo $attachment_medium['alt'] ?>" />
                         </a>
						 <?php if ( $porto_member_socials == 'yes' || (!$porto_member_socials && $porto_settings['member-socials'])) : ?>
                            <?php if(isset( $social_links_adv_pos) && $social_links_adv_pos): ?>
									
                                	<div class="share-links post-share-advance member-share-advance">
                                        <div class="post-share-advance-bg">
    
                                            <?php echo $share_links; ?>
    
                                            <i class="fa fa-share-alt"></i>
    
                                        </div>
									</div>
                               
                                <?php endif; ?>
                              <?php endif; ?>
                         </span>
                       <a class="text-decoration-none member-info-container" href="<?php if ($show_external_link && $member_link) echo $member_link; else the_permalink() ?>"<?php echo $ajax_attr ?>>       
                        <?php if (!$view_type) : ?>
                            <span class="thumb-info-title">
                                <span class="thumb-info-inner"><?php the_title(); ?></span>
                                <?php
                                if ($role) : ?>
                                    <span class="thumb-info-type"><?php echo $role ?></span>
                                <?php endif; ?>
                            </span>
                        <?php endif;
                        if ($view_type && $porto_settings['member-archive-readmore']) : ?>
                        <span class="thumb-info-title">
                            <span class="thumb-info-inner"><?php echo ($porto_settings['member-archive-readmore-label'] ? $porto_settings['member-archive-readmore-label'] : __('View More...', 'porto')); ?></span>
                        </span>
                        <?php endif; ?>
                    <?php if ($member_show_zoom) : ?>
                        <span class="zoom" data-src="<?php echo $attachment['src'] ?>" data-title="<?php echo $attachment['caption'] ?>"><i class="fa fa-search"></i></span>
                    <?php endif; ?>
                    </a>
                    </span> <!--Thumb info wrapper end-->
                    <a class="text-decoration-none member-info-container" href="<?php if ($show_external_link && $member_link) echo $member_link; else the_permalink() ?>"<?php echo $ajax_attr ?>>
                <?php if ($view_type == 2) :
                    $show_info = true;
                    ?>
                    <h4 class="m-t-md m-b-<?php echo $role ? 'none' : 'sm' ?>"><?php the_title(); ?></h4>
                    <?php
                    if ($role) : ?>
                        <p class="m-b-sm color-body"><?php echo $role ?></p>
                    <?php endif; ?>
                <?php endif; ?>
                <?php if ($view_type == 3) :
                    $show_info = true;
                    ?>
                    <span class="thumb-info-caption">
                        <span class="thumb-info-caption-title">
                            <?php if ($cats) : ?><span class="font-weight-light color-body text-md"><?php echo $cats ?></span><?php endif; ?>
                            <h4 class="m-b-none text-lg"><?php the_title(); ?></h4>
                            <i class="view-more Simple-Line-Icons-arrow-right-circle font-weight-semibold"></i>
                        </span>
                    </span>
                <?php endif; ?>
                </a><!-- Global link end -->
           
           
           
            <?php if ($porto_member_overview == 'yes' || (!$porto_member_overview && $porto_settings['member-overview']) || $porto_member_socials == 'yes' || (!$porto_member_socials && $porto_settings['member-socials'])) : ?>
            <span class="thumb-info-caption">
                <?php if ($porto_member_overview == 'yes' || (!$porto_member_overview && $porto_settings['member-overview'])) : ?>
                    <span class="thumb-info-caption-text<?php echo !$view_type ? '' : ' p-t-none' ?>">
                    <?php
                    $show_info = true;
                    $member_overview = do_shortcode(get_post_meta($member_id, 'member_overview', true));
                    if ($porto_settings['member-excerpt']) {
                        $member_overview = porto_strip_tags( apply_filters( 'the_content', $member_overview ) );
                        $limit = $porto_settings['member-excerpt-length'] ? $porto_settings['member-excerpt-length'] : 15;
                        $member_overview = explode(' ', $member_overview, $limit);
                        if (count($member_overview) >= $limit) {
                            array_pop($member_overview);
                            $member_overview = implode(" ",$member_overview).__('...', 'porto');
                        } else {
                            $member_overview = implode(" ",$member_overview);
                        }
                    }
                    echo do_shortcode(wpautop($member_overview));
                    ?>
                    </span>
                <?php endif; ?>
                <?php
                // Social Share
               	if(isset( $social_links_adv_pos) && !$social_links_adv_pos) echo $share_links; 
                ?>
                    
                
            </span>
            <?php endif; ?>
            </span>
        </div>
    <?php
    endif;
endif;