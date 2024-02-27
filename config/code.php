<?php require_once('config.php'); ?>

<?php include 'function.php' ?>

<?php
 $action = $_GET['action']; //$_GET perform function on the url //
?>

<?php if ($action=="loanrequest") {

		if (empty($fullname) || empty($loanamount) || empty($loanduration)) {?>
			<script>
				alert('ALL FIELDS ARE REQUIRED!');
				window.parent(location="../index.php");
			</script>
<?php 
		}else {

			///////////////////////geting sequence//////////////////////////
			$sequence=$callclass->_get_sequence_count($conn, 'USER');
			$array = json_decode($sequence, true);
			$no= $array[0]['no'];
			$user_id='USER'.date("Ymdhis").$no; 

			$sequence=$callclass->_get_sequence_count($conn, 'TRANS');
			$array = json_decode($sequence, true);
			$no= $array[0]['no'];
			$transaction_id='TRANS'.date("Ymdhis").$no;

			mysqli_query($conn,"INSERT INTO `users_tab`
			(`user_id`, `transaction_id`, `fullname`, `loan_amount`, `loan_duration`, `loan_rate`) VALUES
			('$user_id','$transaction_id','$fullname','$loanamount','$loanduration','$loanrate')")or die (mysqli_error($conn));

			$amount = $loanamount;
			$month = $loanduration;
			$SubPayment = $amount / $month;
			for ($b = 1; $b <= $month; $b++) {
				$interest = ($loanrate / 100) * $amount;
				$total = $SubPayment + $interest;
				$amount = $amount - $SubPayment;
				$totalRepayment = $totalRepayment + $total;
				$deduction = $amount + $SubPayment;
			
			mysqli_query($conn,"INSERT INTO `loan_request_transaction`
			(`transaction_id`, `month`, `loan_balance`, `sub_payment`, `interest`, `total_repayment`, `transaction_date`, `system_used`, `ip_address`) VALUES
			('$transaction_id','$b','$deduction','$SubPayment','$interest','$total', NOW(), '$sysname', '$ip_address')")or die (mysqli_error($conn));

			}

			?>
			<script>
				alert('Loan has been successfully Requested!');
				window.parent(location="../index.php");
			</script>
<?php
	 	
	} 
}
?>