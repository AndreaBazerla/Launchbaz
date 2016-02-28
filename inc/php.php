<?php

	$dir = 1;
	$kit = 1;
	$num = 3;

	function get_dir() {
		echo 1;
	}

	function get_kit() {
		echo 1;
	}

	function get_num() {
		echo "<div id='k1'>1</div>";
		echo "<div id='k2'>2</div>";
		echo "<div id='k3'>3</div>";
		echo "<div id='k4'>4</div>";
		echo "<div id='k5'>5</div>";
	}

	function get_mp3() {
		global $dir,$kit,$num,$mp3;
		$mp3 = array();
		for($i=0;$i<$num+1;$i++)
			$mp3[$i] = array();
		for($i=1;$i<$num+1;$i++) {
			for($j=65;$j<91;$j++) {
				if(file_exists($_SERVER['DOCUMENT_ROOT']."/wp-content/themes/launchbaz/kit/".$dir."/".$i."/".chr($j).".mp3")) {
					$mp3[$i][$j] = 1;
				} else {
					$mp3[$i][$j] = 0;
				}
			}
		}
		echo json_encode($mp3);
	}

?>
