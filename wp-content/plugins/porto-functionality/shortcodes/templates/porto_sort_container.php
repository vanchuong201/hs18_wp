<?php
$output = $id = $animation_type = $animation_duration = $animation_delay = $el_class = '';
extract(shortcode_atts(array(
    'id' => '',
    'animation_type' => '',
    'animation_duration' => 1000,
    'animation_delay' => 0,
    'el_class' => ''
), $atts));

$el_class = porto_shortcode_extract_class( $el_class );

$output = '<div class="porto-sort-container ' . $el_class . '"';
if ($animation_type) {
    $output .= ' data-appear-animation="'.$animation_type.'"';
    if ($animation_delay)
        $output .= ' data-appear-animation-delay="'.$animation_delay.'"';
    if ($animation_duration && $animation_duration != 1000)
        $output .= ' data-appear-animation-duration="'.$animation_duration.'"';
}
$output .= '>';

$output .= '<div class="row" id="' . esc_attr($id) . '">';

$output .= do_shortcode($content);

$output .= '</div></div>';

echo $output;