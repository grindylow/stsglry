<?php
// from http://www.fliquidstudios.com/2009/05/07/resizing-images-in-php-with-gd-and-imagick/
function resize_image($file, $w, $h, $crop=FALSE) {
  list($width, $height) = getimagesize($file);
  $r = $width / $height;
  if ($crop) {
    if ($width > $height) {
      $width = ceil($width-($width*($r-$w/$h)));
    } else {
      $height = ceil($height-($height*($r-$w/$h)));
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
  imagecopyresampled($dst, $src, 0, 0, 0, 0, $newwidth, $newheight, $width, $height);

  return $dst;
}

  // Return a small version of the given file.
  // future: caching, variable size,...

$gallery_root_dir = "pics";  // @todo get this from global configuration file to avoid redundancy

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
$thumbnail = resize_image($fullname, 100, 100, false);
header('Content-type: image/jpg');
imagejpeg($thumbnail);
imagedestroy($thumbnail);

?>
