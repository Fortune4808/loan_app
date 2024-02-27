<?php 
    include 'config/config.php';
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

            <div class="content-view-div" data-aos="zoom-down" data-aos-duration="1000">
                <h1>All Loan Request</h1>
                
                <div class="fetch-div animted fadeIn" id="fetch_all_loans">
                    <script>_fetch_all_loan_requests();</script>
                </div>
            </div>
        </div>     
    </div>
<?php include 'footer.php';?>
<?php include 'bottom-script.php';?>
</body>
</html>