<?php
  // return all (accessible) subfolders of the given folder
$dir="test";
//if($_GET("node")===null) $dir="."; else $dir=$_GET("node");
if(array_key_exists("node",$_GET))
{
  $dir=$_GET["node"];
}

$r = array( array( "text"=>"Php-leaf1" ),
	    array( "text"=>"Anotherone" )
	  );
$a = array( "success"=>true,
            "results"=>$r,
	    "debug"=>$dir);
echo json_encode($a);
?>
