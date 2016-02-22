<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Launchbaz
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-height, initial-scale=0.5">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<script>
	var themeURL = "<?php echo get_template_directory_uri(); ?>";
</script>

<script>
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-73637405-1', 'auto');
	ga('send', 'pageview');
</script>

<?php wp_head(); ?>
</head>

<body <?php body_class("body noselect"); ?>>
	<div id="page" class="site">
		<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'launchbaz' ); ?></a>

		<header id="masthead" class="site-header" role="banner">
			<div class="site-branding ghost">
				<img class="site-icon" src="<?php echo get_template_directory_uri(); ?>/icon.png" />
				<?php
				if ( is_front_page() && is_home() ) : ?>
					<h1 class="site-title"><!--<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">--><?php bloginfo( 'name' ); ?><!--</a>--></h1>
				<?php else : ?>
					<p class="site-title"><!--<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">--><?php bloginfo( 'name' ); ?><!--</a>--></p>
				<?php
				endif;

				$description = get_bloginfo( 'description', 'display' );
				if ( $description || is_customize_preview() ) : ?>
					<p class="site-description"><?php echo $description; /* WPCS: xss ok. */ ?></p>
				<?php
				endif; ?>
			</div><!-- .site-branding -->

			<nav id="site-navigation" class="main-navigation" role="navigation">
				<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Primary Menu', 'launchbaz' ); ?></button>
				<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu' ) ); ?>
			</nav><!-- #site-navigation -->
		</header><!-- #masthead -->

		<div id="content" class="site-content">
