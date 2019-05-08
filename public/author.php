<?php

    get_header();
    $curauth = (isset($_GET['author_name'])) ? get_user_by('slug', $author_name) : get_userdata(intval($author));

?>

<div class="wrapper">

	<div class="main" style="margin-top: 150px;">

		<div class="section section-artists">
			<div class="container">

				<div class="row">
					<div class="col-lg-8">

                        <h1><?php echo $curauth->nickname; ?></h1>
                            <div id="artist-bio" class="col-lg-12">
                                <div class="col-lg-4">
                                    <img id="artist-profile" src="<?php echo esc_url( get_avatar_url( $curauth->ID ) ); ?>" />
                                </div>
                                <div class="col-lg-8">
                                    <?php echo $curauth->user_description; ?>
                                </div>
                            </div>
                    </div>

                    <div class="col-lg-4">

                        <?php
    					    $args = array(
                                'posts_per_page' => 1,
                                'author' => $curauth->ID,
                                'post_status' => 'publish',
    							'orderby' => 'date',
    							'order' => 'DESC',
    						);

						   $post_query = get_posts($args);

		                     if ( ! empty( $post_query) ) {
		   	                      foreach ( $post_query as $post ) {
                                      $image_url = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'single-post-thumbnail' );
                        ?>
                                        <a href="<?php the_permalink(); ?>">
                                            <img class="artist-product-image" src="<?php echo $image_url[0]; ?>">
                                            <h2><?php the_title(); ?></h2>
                                        </a>
                        <?php

                                  }
                              }

						?>

                    </div>
                </div>

                <div class="row" style="margin-top: 75px;">
					<div class="col-lg-10">
                        <?php
    					    $args = array(
                                'posts_per_page' => -1,
                                'author' => $curauth->ID,
                                'post_status' => 'publish',
    							'orderby' => 'date',
    							'order' => 'DESC',
    						);

						   $posts_query = get_posts($args);

		                     if ( ! empty( $posts_query) ) {
                                 $toggle = 0;
		   	                      foreach ( $posts_query as $post ) {
                                      if($toggle == 0) {
                                          $toggle = 1;
                                          continue;
                                      } elseif($toggle == 1) {
                                          echo ('<h2 style="text-align: left;">Other Artwork</h2><br>');
                                          $toggle = 2;
                                      }
                        ?>

                                      <div class="col-lg-4" style="padding: 0px; margin-right: 10px;">
                                          <a href="<?php the_permalink(); ?>">
                                                  <?php $image_url = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'single-post-thumbnail' ); ?>
                                                  <img class="artist-product-image" src="<?php echo $image_url[0]; ?>" />
                                                  <div class="product-overlay">
                                                      <p class="product-overlay-text"><?php the_title(); ?></p>
                                                  </div>
                                              </a>
                                      </div>

                                      <?php
                                  }
                              }
                        ?>
                    </div>
                </div>

            </div>
        </div>

    </div>
</div>

<?php get_footer(); ?>
