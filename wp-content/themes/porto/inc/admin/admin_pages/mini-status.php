<?php
if( ! defined( 'ABSPATH' ) ){
	exit; // Exit if accessed directly
}
?>

<?php

	global $wp_filesystem;
    // Initialize the Wordpress filesystem, no more using file_put_contents function
    if ( empty( $wp_filesystem ) ) {
        require_once( ABSPATH . '/wp-admin/includes/file.php' );
        WP_Filesystem();
    }
	
	$data 	= array(
		'wp_uploads' 		=> wp_get_upload_dir(),
		'memory_limit' 		=> wp_convert_hr_to_bytes( @ini_get( 'memory_limit' ) ),
		'time_limit' 		=> ini_get( 'max_execution_time' ),
		'max_input_vars' 	=> ini_get( 'max_input_vars' ),
	);

	$status = array(
		'uploads'			=> wp_is_writable( $data['wp_uploads']['basedir'] ),
		'fs'				=> ( $wp_filesystem || WP_Filesystem() ) ? true : false,	
		'zip'				=> class_exists( 'ZipArchive' ),
		'suhosin'			=> extension_loaded( 'suhosin' ),
		'memory_limit'		=> $data['memory_limit'] >= 268435456,
		'time_limit'		=> ( ( $data['time_limit'] >= 180 ) || ( $data['time_limit'] == 0 ) ) ? true : false,
		'max_input_vars'	=> $data['max_input_vars'] >= 2000,
	);

?>

<div class="porto_mini_status">

	<ul class="system-status">
			
		<li>
			<span class="label"><?php esc_html_e( 'Uploads folder writable', 'porto' ) ?></span>
			<?php if( $status['uploads'] ): ?>
				<span class="status yes dashicons dashicons-yes"></span>
			<?php else: ?>
				<span class="status no dashicons dashicons-no"></span>
				<p class="status-notice status-error">Uploads folder must be writable. Please set write permission to your wp-content/uploads folders</p>
			<?php endif; ?>
		</li>
		
		<li>
			<span class="label"><?php esc_html_e( 'WP File System', 'porto' ) ?></span>
			<?php if( $status['fs'] ): ?>
				<span class="status yes dashicons dashicons-yes"></span>
			<?php else: ?>
				<span class="status no dashicons dashicons-no"></span>
				<p class="status-notice status-error">File System access is required for pre-built websites and plugins installation. Please contact your hosting provider.</p>
			<?php endif; ?>
		</li>
		
		<li>
			<span class="label"><?php esc_html_e( 'ZipArchive', 'porto' ) ?></span>
			<?php if( $status['zip'] ): ?>
				<span class="status yes dashicons dashicons-yes"></span>
			<?php else: ?>
				<span class="status no dashicons dashicons-no"></span>
				<p class="status-notice status-error">ZipArchive is required for pre-built websites and plugins installation. Please contact your hosting provider.</p>
			<?php endif; ?>
		</li>

		<?php if( $status[ 'suhosin' ] ): ?>
		
			<li>
				<span class="label"><?php esc_html_e( 'SUHOSIN Installed', 'porto' ) ?></span>
				<span class="status info dashicons dashicons-info"></span>
				<p class="status-notice">Suhosin may need to be configured to increase its data submission limits.</p>
			</li>
		
		<?php else: ?>
				
			<li>
				<span class="label"><?php esc_html_e( 'PHP Memory Limit', 'porto' ) ?></span>
				<?php if( $status['memory_limit'] ): ?>
					<span class="status yes dashicons dashicons-yes"></span>
					<span class="desc"><?php echo size_format( $data['memory_limit'] ); ?></span>
				<?php else: ?>
				
					<?php if( $data['memory_limit'] < 134217728 ): ?>
					
						<span class="status no dashicons dashicons-no"></span>
						<span class="desc"><?php echo size_format( $data['memory_limit'] ); ?></span>
						<p class="status-notice status-error">Minimum <strong>128 MB</strong> is required, <strong>256 MB</strong> is recommended. </p>
						
					<?php else: ?>
				
						<span class="status info dashicons dashicons-info"></span>
						<span class="desc"><?php echo size_format( $data['memory_limit'] ); ?></span>
						<p class="status-notice status-error">Current memory limit is OK, however <strong>256 MB</strong> is recommended. </p>
				
					<?php endif; ?>
					
				<?php endif; ?>
			</li>
			
			<li>
				<span class="label"><?php esc_html_e( 'PHP Time Limit', 'porto' ) ?></span>
				<?php if( $status['time_limit'] ): ?>
					<span class="status yes dashicons dashicons-yes"></span>
					<span class="desc"><?php echo $data['time_limit']; ?></span>
				<?php else: ?>

					<?php if( $data['time_limit'] < 180 ): ?>
					
						<span class="status no dashicons dashicons-no"></span>
						<span class="desc"><?php echo $data['time_limit']; ?></span>
						<p class="status-notice status-error">Minimum <strong>180</strong> is required, <strong>300</strong> is recommended. </p>
						
					<?php else: ?>
				
						<span class="status info dashicons dashicons-info"></span>
						<span class="desc"><?php echo $data['time_limit']; ?></span>
						<p class="status-notice status-error">Current time limit is OK, however <strong>300</strong> is recommended. </p>
				
					<?php endif; ?>
					
				<?php endif; ?>
			</li>
			
			<li>
				<span class="label"><?php esc_html_e( 'PHP Max Input Vars', 'porto' ) ?></span>
				<?php if( $status['max_input_vars'] ): ?>
					<span class="status yes dashicons dashicons-yes"></span>
					<span class="desc"><?php echo $data['max_input_vars']; ?></span>
				<?php else: ?>
					<span class="status no dashicons dashicons-no"></span>
					<span class="desc"><?php echo $data['max_input_vars']; ?></span>
					<p class="status-notice status-error">Minimum 2000 is required</p>
				<?php endif; ?>
			</li>
			
			<li class="info">php.ini values are shown above. Real values may vary, please check your limits using <a target="_blank" href="http://php.net/manual/en/function.phpinfo.php">php_info()</a></li>
		<?php endif; ?>

		<li>
			<a href="admin.php?page=porto-system"><?php esc_html_e( 'More details', 'porto' ) ?></a>
		</li>

	</ul>

</div>
