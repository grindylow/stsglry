<?php
  // return the names of all (accessible) images in the given directory
$gallery_root_dir = "..";

$dir=".";
//if($_GET("node")===null) $dir="."; else $dir=$_GET("node");
if(array_key_exists("path",$_GET))
{
  $dir=$_GET["path"];
}

// @todo Check access permissions
// [...]

// find all image files in given dir
$cur_dir = $gallery_root_dir . DIRECTORY_SEPARATOR . $dir;
$allfiles = scandir( $cur_dir );
//print_r($allfiles);

$r = array();

//$r = array( array( "text"=>"Php-leaf1" ),
//	    array( "text"=>"Anotherone" )
//	  );

if($allfiles===false)
  {
    //print("scandir() returned false");
    $allfiles = array("dummy");
  }

foreach( $allfiles as $key => $value )
{
  if( $value === "." ) continue;
  if( $value === ".." ) continue;
  $potential_file = $cur_dir . DIRECTORY_SEPARATOR . $value;
  //print_r($potential_dir);
  //print( "<br/>" );
  if(is_file($potential_file))
    {
      $r[] = array( "src"=>"server/thumb.php?" . $potential_file, // @todo URLencode? Maybe not - done by javascript later on...
		    "caption"=>$value);
    }
}


$a = array( "success"=>true,
            "results"=>$r,
	    "debug"=>$dir);
echo json_encode($a);
?>
