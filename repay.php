<?php include 'config/config.php';?>
<?php 
    $transaction_id = $_POST['transaction_id'];
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'meta-link.php';?>
    <title><?php echo $thename;?></title>
</head>

<body>

<?php include 'header.php';?>

    <div class="slide-div">
        <div class="slide-div-in">

            <?php include 'nav.php';?>

                <div class="content-view-div" data-aos="zoom-up" data-aos-duration="1000">
                    <h1>Loan Repayment Details</h1>

                <div class="repay-div animted fadeIn" id="repayment_installments">
                    <script>_loan_repayment_installment('<?php echo $transaction_id?>');</script>
                </div>

                    <!-- <div class="repay-container-div">
                        <div class="container-left-div">
                            <div class="container-item-div">
                                <div class="text-div">
                                    <p>Loan ID</p>
                                    <hr />
                                    <h2></h2>
                                </div>
                            </div>

                            <div class="container-item-div">
                                <div class="text-div">
                                    <p>Customer Name:</p>
                                    <hr />
                                    <h2></h2>
                                </div>
                            </div>

                            <div class="container-item-div">
                                <div class="text-div">
                                    <p>Loan Amount (N)</p>
                                    <hr />
                                    <h2>N</h2>
                                </div>
                            </div>

                            <div class="container-item-div">
                                <div class="text-div">
                                    <p>Loan Duration</p>
                                    <hr />
                                    <h2>Months</h2>
                                </div>
                            </div>

                            <div class="container-item-div">
                                <div class="text-div">
                                    <p>Cumulative Repayment Amount (N)</p>
                                    <hr />
                                    <h2>N</h2>
                                </div>
                            </div>

                            <div class="container-item-div">
                                <div class="text-div">
                                    <p>Date</p>
                                    <hr />
                                    <h2></h2>
                                </div>
                            </div>
                        </div>
                        
                        <div class="container-right-div">
                            <div class="container-item-div">
                            <div class="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>MONTH (S)</th>
                                        <th>LOAN BALANCE</th>
                                        <th>SUB PAYMENT</th>
                                        <th>INTEREST</th>
                                        <th>TOTAL REPAYMENT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </div>
                        </div>
                    </div>
                </div> -->
        </div>
    </div> 
    <?php include 'bottom-script.php';?>     
</body>
</html>