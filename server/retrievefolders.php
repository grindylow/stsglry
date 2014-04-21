<?php
  // return all (accessible) subfolders of the given folder
$gallery_root_dir = "..";

$dir=".";
//if($_GET("node")===null) $dir="."; else $dir=$_GET("node");
if(array_key_exists("node",$_GET))
{
  $dir=$_GET["node"];
}

// find all subdirs of given dir
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
  $potential_dir = $cur_dir . DIRECTORY_SEPARATOR . $value;
  //print_r($potential_dir);
  //print( "<br/>" );
  if(is_dir($potential_dir))
    {
      $r[] = array( "text"=>$value,
		    "id"=>$dir . DIRECTORY_SEPARATOR . $value);
    }
}


$a = array( "success"=>true,
            "results"=>$r,
	    "debug"=>$dir);
echo json_encode($a);
?>
