<?php

	/**
	 * Template Name: Launchbaz
	 * 
	 * @link https://codex.wordpress.org/Template_Hierarchy
	 * 
	 * @package Launchbaz 
	 */
	 
get_header(); ?>


	<script type="text/javascript">
		var dir = "<?php get_dir(); ?>";
		var kit = "<?php get_kit(); ?>";
		var num = "<?php get_num(); ?>";
	</script>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<?php /*
			while ( have_posts() ) : the_post();

				get_template_part( 'template-parts/content', 'page' );

				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;

			endwhile; // End of the loop.
			*/?>
			
			<div id="menu" class="ghost">
				<form style="float:right" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_black">
					<input type="hidden" name="cmd" value="_s-xclick">
					<input type="hidden" name="hosted_button_id" value="QUZSJUGY7262J">
					<input class="social" type="image" src="http://imageshack.com/a/img922/6121/ccfLbC.png" border="0" name="submit" alt="PayPal – The safer, easier way to pay online.">
					<img alt="" border="0" src="https://www.paypalobjects.com/it_IT/i/scr/pixel.gif" width="1" height="1">
				</form>

				<a href="https://twitter.com/AndreaBazerla" target="_blank"><img class="social" src="<?php echo get_template_directory_uri(); ?>/img/profile.png" /></a>
				<a href="https://github.com/andbaz/launchbaz" target="_blank"><img class="social" src="<?php echo get_template_directory_uri(); ?>/img/github.png" /></a>
				<a href="https://twitter.com/share?url=http://www.launchbaz.org/&via=Launchbaz_&text=Play%20music%20with%20your%20computer%27s%20keyboard%20:D" target="_blank" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;"><img class="social" src="<?php echo get_template_directory_uri(); ?>/img/twitter.png" /></a>
				<a href="http://www.facebook.com/share.php?u=http://www.launchbaz.org/&title=Launchbaz&description=Launchpad%20console%20online%20to%20play%20music%20with%20your%20computer%27s%20keyboard" target="_blank" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;"><img class="social" src="<?php echo get_template_directory_uri(); ?>/img/facebook.png" /></a>
			</div>
			
			<div id="keyboard">
				<img id="37" class="row ghost" src="<?php echo get_template_directory_uri(); ?>/img/left.png" style="left: -20px">
				<img id="39" class="row ghost" src="<?php echo get_template_directory_uri(); ?>/img/right.png" style="left: 650px">
				<div class="keyrow numbers">
					<div id="49" class="keyoff">1</div>
					<div id="50" class="keyoff">2</div>
					<div id="51" class="keyoff">3</div>
					<div id="52" class="keyoff">4</div>
					<div id="53" class="keyoff">5</div>
					<div id="54" class="keyoff">6</div>
					<div id="55" class="keyoff">7</div>
					<div id="56" class="keyoff">8</div>
					<div id="57" class="keyoff">9</div>
					<div id="48" class="keyoff">0</div>
				</div>
				<div class="letters">
					<div class="keyrow" style="left: 30px">
						<div id="81" class="keyoff">Q</div>
						<div id="87" class="keyoff">W</div>
						<div id="69" class="keyoff">E</div>
						<div id="82" class="keyoff">R</div>
						<div id="84" class="keyoff">T</div>
						<div id="89" class="keyoff">Y</div>
						<div id="85" class="keyoff">U</div>
						<div id="73" class="keyoff">I</div>
						<div id="79" class="keyoff">O</div>
						<div id="80" class="keyoff">P</div>
					</div>
					<div class="keyrow" style="left: 60px">
						<div id="65" class="keyoff">A</div>
						<div id="83" class="keyoff">S</div>
						<div id="68" class="keyoff">D</div>
						<div id="70" class="keyoff">F</div>
						<div id="71" class="keyoff">G</div>
						<div id="72" class="keyoff">H</div>
						<div id="74" class="keyoff">J</div>
						<div id="75" class="keyoff">K</div>
						<div id="76" class="keyoff">L</div>
					</div>
					<div class="keyrow" style="left: 90px">
						<div id="90" class="keyoff">Z</div>
						<div id="88" class="keyoff">X</div>
						<div id="67" class="keyoff">C</div>
						<div id="86" class="keyoff">V</div>
						<div id="66" class="keyoff">B</div>
						<div id="78" class="keyoff">N</div>
						<div id="77" class="keyoff">M</div>
					</div>
				</div>
				<div id="32" class="recoff"></div>
			</div>
			
		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();