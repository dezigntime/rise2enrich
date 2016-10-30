<?php

if ( ! class_exists( 'Timber' ) ) {
	add_action( 'admin_notices', function() {
			echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php' ) ) . '</a></p></div>';
		} );
	return;
}

Timber::$dirname = array('templates', 'views');

class StarterSite extends TimberSite {

	function __construct() {
		add_theme_support( 'post-formats' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'menus' );
		add_filter( 'timber_context', array( $this, 'add_to_context' ) );
		add_filter( 'get_twig', array( $this, 'add_to_twig' ) );
		add_action( 'init', array( $this, 'register_post_types' ) );
		add_action( 'init', array( $this, 'register_taxonomies' ) );
        add_action( 'init', array( $this, 'initBreadCrumb' ) );

		parent::__construct();
	}

	function register_post_types() {
		//this is where you can register custom post types
	}

	function register_taxonomies() {
		//this is where you can register custom taxonomies
	}

	function add_to_context( $context ) {
		$context['foo'] = 'bar';
		$context['stuff'] = 'I am a value set in your functions.php file';
		$context['notes'] = 'These values are available everytime you call Timber::get_context();';
		$context['menu'] = new TimberMenu();
		$context['site'] = $this;

		$context['menu_right'] = new TimberMenu('Primary-Right');

		return $context;
	}

	// Custom Functions
	function myfoo( $text ) {
		$text .= ' bar!';
		return $text;
	}

    function getImageForPage( $id ) {
        return 'http://www.ryecountryday.org/uploaded/images3/splash/arts.jpg';
    }


	function add_to_twig( $twig ) {
		/* this is where you can add your own fuctions to twig */
		$twig->addExtension( new Twig_Extension_StringLoader() );
		$twig->addFilter('myfoo', new Twig_SimpleFilter('myfoo', array($this, 'myfoo')));


        $pageHasImage = new Twig_SimpleFunction('pageHasImage', function ($menuItem) {
            $pageID = $menuItem->object_id;
            $page = new TimberPost( $pageID );
            $thumbnailID = $page->_thumbnail_id;
            $pageImageObject = new TimberImage($thumbnailID);
            return $pageImageObject->src ? true : false;
        });
        $getImageForPage = new Twig_SimpleFunction('getImageForPage', function ($menuItem) {
            $pageID = $menuItem->object_id;
            $page = new TimberPost( $pageID );
            $thumbnailID = $page->_thumbnail_id;
            $pageImageObject = new TimberImage($thumbnailID);
            return $pageImageObject->src;
        });

        $getPageSnippet = new Twig_SimpleFunction('getPageSnippet', function ($menuItem) {
            $pageID = $menuItem->object_id;
            $page = new TimberPost( $pageID );
            return $page->top_navigation_snippet;
        });

        $getPageName = new Twig_SimpleFunction('getPageName', function ($menuItem) {
            $pageID = $menuItem->object_id;
            $page = new TimberPost( $pageID );
            return $page->post_title;
        });



        $twig->addFunction($getPageName);
        $twig->addFunction($getPageSnippet);
        $twig->addFunction($pageHasImage);
        $twig->addFunction($getImageForPage);


		return $twig;
	}


	function initBreadCrumb (){

        if(function_exists('bcn_display')) {
            function breadcrumbs() { return bcn_display(); };
            TimberHelper::function_wrapper('breadcrumbs');
        }


    }




}

new StarterSite();
