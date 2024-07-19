<?php
include_once 'config.php';
$config = mysqli_connect($db_host,$db_user,$db_pass,$db_name);
if(!$config)
{
	die("Server Đang Bảo Trì Vui Lòng Đợi ...");
}
else
{
	mysqli_set_charset($config,'utf8mb4');
}
function _query($sql) {
	GLOBAL $config;
	return mysqli_query($config,$sql);
}
function _fetch($sql) {
	return mysqli_fetch_array(_query($sql));
}
function isset_sql($txt) {
	GLOBAL $config;
	return mysqli_real_escape_string($config,$txt);
}
function _insert($table,$input,$output) {
	return "INSERT INTO $table($input) VALUES($output)";
}
function _select($select,$from,$where) {
	return "SELECT $select FROM $from WHERE $where";
}
function _update($tabname,$input_output,$where) {
	return "UPDATE $tabname SET $input_output WHERE $where";
}

$_succ = '<div class="success">';
$_err = '<div class="error">';
$_end = '</div>';
function _alert($txt,$txt1) {
	GLOBAL $_succ,$_err,$_end;
	switch ($txt) {
		case 'succ':
		return "$_succ $txt1 $_end";
		break;
		
		case 'err':
		return "$_err $txt1 $_end";
		break;
	}
}
function _console($txt){
	return "<script>console.log('".htmlspecialchars($txt)."')</script>";
}
function _randtxt(){
	$string = "";
	$chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	for($i=1; $i<=9; $i++) {
		$position = rand() % strlen($chars);
		$string .= substr($chars, $position, 1);
	}
	return $string;
}

?>