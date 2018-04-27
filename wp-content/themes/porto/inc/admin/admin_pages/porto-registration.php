<?php
$theme = wp_get_theme();
if ($theme->parent_theme) {
    $template_dir =  basename(get_template_directory());
    $theme = wp_get_theme($template_dir);
}

?>
<div class="wrap about-wrap porto-wrap">
    <h1><?php _e( 'Welcome to Porto!', 'porto' ); ?></h1>
    <div class="about-text"><?php echo esc_html__( 'Porto is now installed and ready to use! Read below for additional information. We hope you enjoy it!', 'porto' ); ?></div>
    <div class="porto-logo"><span class="porto-version"><?php _e( 'Version', 'porto' ); ?> <?php echo porto_version; ?></span></div>
    <h2 class="nav-tab-wrapper">
        <?php
        printf( '<a href="%s" class="nav-tab">%s</a>', admin_url( 'admin.php?page=porto' ), __( "Welcome", 'porto' ) );
		
        printf( '<a href="%s" class="nav-tab nav-tab-active">%s</a>', admin_url( 'admin.php?page=porto-registration' ), __( "Registration", 'porto' ) );

        printf( '<a href="%s" class="nav-tab">%s</a>', admin_url( 'admin.php?page=porto-system' ), __( "System Status", 'porto' ) );
        printf( '<a href="%s" class="nav-tab">%s</a>', admin_url( 'admin.php?page=porto-plugins' ), __( "Plugins", 'porto' ) );
        printf( '<a href="%s" class="nav-tab">%s</a>', admin_url( 'admin.php?page=porto-demos' ), __( "Demos", 'porto' ) );
        printf( '<a href="%s" class="nav-tab">%s</a>', admin_url( 'admin.php?page=porto_settings' ), __( "Theme Options", 'porto' ) );
        ?>
    </h2>
    <div class="porto-section">

		<div class="porto-important-notice">
			<p class="about-description">
				<?php _e( 'Thank you for choosing Porto! Your product must be registered to receive Porto demos and included premium plugins.', 'porto' ); ?>
			</p>
		</div>
		<div class="porto-important-notice registration-form-container">
			<?php if ( Porto()->is_registered() == '1' ) : ?>
				<p class="about-description"><?php _e( 'Congratulations! Your product is registered now.', 'porto' ); ?></p>
			<?php else : ?>
				<p class="about-description"><?php _e( 'Please enter your Purchase Code to complete registration.', 'porto' ); ?></p>
			<?php endif; ?>
			<div class="porto-registration-form">
				<form id="porto_registration" method="post">
					<?php
					$invalid_code = false;
					$disable_field = '';
					$error_message = $unreg_msg = '';
					$purchase_code = Porto()->get_purchase_code();
					?>
					<?php if ( $purchase_code && ! empty( $purchase_code ) ) : ?>
						<?php if ( Porto()->is_registered() == '1' ) : 
							$disable_field = " disabled=true"; ?>
							<span class="dashicons dashicons-yes porto-code-icon"></span>
						<?php else : ?>
							<?php $invalid_code = true; ?>
							<span class="dashicons dashicons-no porto-code-icon"></span>
						<?php endif; ?>
					<?php else : ?>
						<span class="dashicons dashicons-admin-network porto-code-icon"></span>
					<?php endif; ?>
					<input type="hidden" name="porto_registration" />
					<input type="text" name="code" class="regular-text" value="<?php echo $purchase_code; ?>"<?php echo $disable_field; ?> />
					<?php if( Porto()->is_registered() == '1' ): ?>
						<input type="hidden" name="action" value="unregister" />
						<?php submit_button( esc_attr__( 'Unregister', 'porto' ), array( "button-danger", "large", "porto-large-button" ),'',true); ?>
					<?php else: ?>
						<?php submit_button( esc_attr__( 'Submit', 'porto' ), array( "primary", "large", "porto-large-button" ),'',true); ?>
					<?php endif; ?>
					
				</form>
				<?php
					if( Porto()->is_registered() == '2' ){ // used
						$error_message = __('This code is already used on: '.get_option('porto_code_used_site').'<br />', 'porto');
						$error_message .= __('Please purchase another license or unregister from any of your site', 'porto');
					} else if( Porto()->is_registered() == '3' ){ // unregister
						$error_message = __('This site has been unregistered successfully','porto');
					} else if( $invalid_code ){
						$error_message = __('Invalid code, or corresponding Envato account does not have Porto purchased.','porto');
					}
				?>
				<?php if( $error_message ): ?>
					<p class="error-invalid-code"><?php echo $error_message; ?></p>
				<?php elseif( Porto()->is_unregistered() ): ?>
					<p class="error-invalid-code"><?php _e('This site is unregistered','porto'); ?></p>					
				<?php endif; ?>
			</div>
		</div>
    </div>
    <div class="porto-thanks">
        <p class="description"><?php _e( 'Thank you, we hope you to enjoy using Porto!', 'porto' ); ?></p>
    </div>
</div>