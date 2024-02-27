<?php include 'config/config.php' ?>
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

            <div class="content-form-div" data-aos="fade-right" data-aos-duration="500">
                <h1>Request for Loan</h1>
                <form>
                    <input type="hidden" name="action" value="loanrequest"/>
                    <div class="data">
                        <label>Full Name</label><div id="fullname_info" style="float:right;font-size:12px;display:none;color:#990000;"><span>Name not accepted!</span></div>
                        <input type="text" id="fullname" onkeypress="isAlphabetic_Check();" placeholder="Type Full Name Here"/>
                    </div>

                    <div class="data">
                        <label>Loan Amount (N):</label><div id="loan_info" style="float:right;font-size:12px;display:none;color:#990000;"><span>Loan Amount not accepted!</span></div>
                        <input type="number" id="loanamount" onkeypress="isNumber_Check();" placeholder="00.00"/>
                    </div>

                    <div class="data">
                        <label>Loan Duration (Months):</label><div id="duration_info" style="float:right;font-size:12px;display:none;color:#990000;"><span>Duration not accepted!</span></div>
                        <input type="number" id="loanduration" onkeypress="isNumber_Check2();" placeholder="0"/>
                    </div>
                    <button class="btn" type="button" title="submit" id="submit_btn" onclick="_add_loan_request();">Request for Loan</button>
                </form>
            </div>
        </div>
    </div>
    <?php include 'footer.php';?>
    <?php include 'bottom-script.php';?>  
     
</body>
</html>