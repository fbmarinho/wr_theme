<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WRCONSULTORIA
 */ ?>

<? get_header(); ?>

<div class="bg">
    <div class="slogan">Em breve</div>
    <div class="faixa">
        <img src="<?= get_template_directory_uri() ?>/img/logo.png" class="logo">
    </div>
    <div class="slogan">Consultoria Logística</div>


    <div class="nl">
        <div class="texto-nl">Deixe seu nome e e-mail para receber novidades</div>
        <?= do_shortcode('[contact-form-7 id="5" title="Newsletter"]') ?>
    </div>
</div>

<div class="bg img1"></div>
<div class="bg img2"></div>


<? get_footer(); ?>