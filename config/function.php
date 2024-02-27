<?php
class allClass{
function _get_sequence_count($conn, $item){
	$count=mysqli_fetch_array(mysqli_query($conn,"SELECT counter_value FROM counter_tab WHERE counter_id = '$item' FOR UPDATE"));
	$num=$count[0]+1;
	mysqli_query($conn,"UPDATE `counter_tab` SET `counter_value` = '$num' WHERE counter_id = '$item'")or die (mysqli_error($conn));
	if ($num<10){$no='00'.$num;}elseif($num>=10 && $num<100){$no='0'.$num;}else{$no=$num;}
	return '[{"num":"'.$num.'","no":"'.$no.'"}]';
}

function _get_loan_details($conn, $transaction_id){
    $query=mysqli_query($conn, "SELECT a.*, b.* FROM users_tab a, loan_request_transaction b WHERE a.transaction_id='$transaction_id' AND a.transaction_id=b.transaction_id;");
    $fetch=mysqli_fetch_array($query);
	$transaction_id=$fetch['transaction_id'];
	$fullname=$fetch['fullname'];
	$loanamount=$fetch['loan_amount'];
	$loanduration=$fetch['loan_duration'];
	$loanrate=$fetch['loan_rate'];
	$transaction_date=$fetch['transaction_date'];
    return '[{"transaction_id":"'.$transaction_id.'","fullname":"'.$fullname.'","loan_amount":"'.$loanamount.'","loan_duration":"'.$loanduration.'","loan_rate":"'.$loanrate.'","transaction_date":"'.$transaction_date.'"}]';
}


}$callclass=new allClass();
?>