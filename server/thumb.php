<?php

// inspired by (faulty) http://www.fliquidstudios.com/2009/05/07/resizing-images-in-php-with-gd-and-imagick/
function resize_image($file, $w, $h, $crop=FALSE) {
  list($width, $height) = getimagesize($file);
  $r = $width / $height;
  $xoffs = $yoffs = 0;
  if ($crop) {
    if ($width/$height > $w/$h) {  // original image is wider than target - crop left and right
      $xoffs = $width;
      $width = ceil($w/$h*$height);
      // also: use middle section of image, i.e. cut left and right (not just right)
      $xoffs = ($xoffs-$width)/2;  // half of original width - new width 
    } else {  // original image is taller than target - crop top and bottom
      $yoffs = $height;
      $height = ceil($h/$w*$width);
      $yoffs = ($yoffs-$height)/2;
    }
    $newwidth = $w;
    $newheight = $h;
  } else {
    if ($w/$h > $r) {
      $newwidth = $h*$r;
      $newheight = $h;
    } else {
      $newheight = $w/$r;
      $newwidth = $w;
    }
  }
  $src = imagecreatefromjpeg($file);
  $dst = imagecreatetruecolor($newwidth, $newheight);
  imagecopyresampled($dst, $src, 0, 0, $xoffs, $yoffs, $newwidth, $newheight, $width, $height);

  return $dst;
}

  // Return a small version of the given file.
  // future: caching, variable size,...

$gallery_root_dir = ".";  // @todo get this from global configuration file to avoid redundancy

$file="i_probably_dont_exist";
if(array_key_exists("thumb",$_GET))
{
  $file=$_GET["thumb"];
}  // looks like parameters have already been url(raw?)decoded for us?

// generate absolute path to requested file
$fullname = $gallery_root_dir . DIRECTORY_SEPARATOR . $file;

// @todo check access permissions to this file
// [...]

// Resize file using GD library
// [...]

// Simply return a single JPG for now
//$fullname="test.jpg";
error_log($fullname);
$thumbnail = resize_image($fullname, 100, 100, true);
header('Content-type: image/jpg');
imagejpeg($thumbnail);
imagedestroy($thumbnail);

?>
