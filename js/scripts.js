
function _alert_close() {
  $("#get-more-div").fadeOut(300);
}


///// accept number ////
function isNumber_Check() {
  var e = window.event;
  var key = e.keyCode && e.which;

  if (!((key >= 48 && key <= 57) || key == 43 || key == 45)) {
    if (e.preventDefault) {
      e.preventDefault();
      $("#loan_info").fadeIn(300);
      document.getElementById("loanamount").style.border =
        "rgb(245, 142, 58) 1px solid";
    } else {
      e.returnValue = false;
    }
  } else {
    $("#loan_info").fadeOut(300);
    document.getElementById("loanamount").style.border =
      "rgba(0, 0, 0, .1) 1px solid";
  }
}

function isNumber_Check2() {
  var e = window.event;
  var key = e.keyCode && e.which;

  if (!((key >= 48 && key <= 57) || key == 43 || key == 45)) {
    if (e.preventDefault) {
      e.preventDefault();
      $("#duration_info").fadeIn(300);
      document.getElementById("loanduration").style.border =
        "rgb(245, 142, 58) 1px solid";
    } else {
      e.returnValue = false;
    }
  } else {
    $("#duration_info").fadeOut(300);
    document.getElementById("loanduration").style.border =
      "rgba(0, 0, 0, .1) 1px solid";
  }
}

/////// accept alphabeth ///////
function isAlphabetic_Check() {
  const key = event.keyCode || event.which;
  
  const alphabetKeys = Array.from({length: 26}, (_, i) => i + 65).concat(Array.from({length: 26}, (_, i) => i + 97));
  if (!alphabetKeys.includes(key)) {
    event.preventDefault();
    $("#fullname_info").fadeIn(300);
    document.getElementById("fullname").style.border = "rgb(245, 142, 58) 1px solid";
  } else {
    $("#fullname_info").fadeOut(300);
    document.getElementById("fullname").style.border = "rgba(0, 0, 0, .1) 1px solid";
  }
}


// function _get_page_with_id(page, ids, other_ids) {
//   $("#page-content").html('<div class="ajax-loader"><img src="' +website_url + '/all-images/images/ajax-loader.gif"/></div>').fadeIn("fast");
//   var action = "_get_page_with_id";
//   var dataString = "action=" + action + "&page=" + page + "&ids=" + ids + "&other_ids=" + other_ids;
//   $.ajax({
//     type: "POST",
//     url: admin_local_portal_url,
//     data: dataString,
//     cache: false,
//     success: function (html) {
//       $("#page-content").html(html);
//     },
//   });
// }

















function _add_loan_request() {
  var fullname = $('#fullname').val();
  var loanamount = $('#loanamount').val();
  var loanduration = $('#loanduration').val();

  if (fullname == '') {
    $('#warning-div').html('<div><i class="fa fa-exclamation-triangle"></i></div> FULLNAME ERROR!<br /><span>Fill Fields To Continue</span>').fadeIn(500).delay(3000).fadeOut(100);
  
  } else if (loanamount == ''){
    $('#warning-div').html('<div><i class="fa fa-exclamation-triangle"></i></div> LOAN AMOUNT ERROR!<br /><span>Fill Fields To Continue</span>' ).fadeIn(500).delay(3000).fadeOut(100);
  
  } else if (loanduration == '') {
    $('#warning-div').html('<div><i class="fa fa-exclamation-triangle"></i></div> LOAN DURATION ERROR!<br /><span>Fill Fields To Continue</span>').fadeIn(500).delay(3000).fadeOut(100);
  } else {

    var btn_text = $('#submit_btn').html();
    $('#submit_btn').html('<i class="fa fa-spinner fa-spin"></i> PROCESSING');
    document.getElementById('submit_btn').disabled = true;

    var action='loan-request-api';

    var dataString ='action=' + action + '&fullname=' + fullname +'&loanamount='+ loanamount + '&loanduration=' + loanduration;
  
    $.ajax({
      type: "POST",
      url: endPoint,
      dataType: "json",
      data: dataString,
      cache: false,
      success: function (info) {
        var success = info.success;
        var message1 = info.message1;
        var message2 = info.message2;

        if (success == true) {
          $('#success-div').html('<div><i class="fa fa-check"></i></div>' + message1 + "<br>"+ message2 +"").fadeIn(500).delay(5000).fadeOut(100);
        
          $('#submit_btn').html(btn_text);
          document.getElementById('submit_btn').disabled = false;

           // Clear the textboxes
           $('#fullname').val("");
           $('#loanamount').val("");
           $('#loanduration').val("");
        } else {
          $('#warning-div').html('<div><i class="bi-check"></i></div>'  + message1 + "<br>"+ message2 +"").fadeIn(500).delay(3000).fadeOut(100);
        }  
      },
    });
  }
}







function _fetch_all_loan_requests() {

  var action='fetch-all-users-api';

  var dataString ='action=' + action;

    $.ajax({
      type: "POST",
      url: endPoint,
      data: dataString,
      dataType: "json",
      cache: false,
      success: function (info) {
        var fetch = info.data;
        var success = info.success;
        var message2 = info.message2;

        var text = '';
        if (success == true) {
            for (var i = 0; i < fetch.length; i++) {
              var transaction_id = fetch[i].transaction_id;
              var fullname = fetch[i].fullname.toUpperCase();
              var loan_amount = new Intl.NumberFormat(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(fetch[i].loan_amount);
              var loan_duration = fetch[i].loan_duration;

            text +=
                '<div class="flex-container-div">'+
                  '<div class="flex-container-item">'+
                  '<form action="repay.php" method="POST">'+
                  '<input type="hidden" name="transaction_id" value="'+ transaction_id +'"/>'+
                          '<div class="text-div">'+
                              '<p>'+ transaction_id +'</p>'+
                              '<h6>'+ fullname +'</h6>'+
                              '<hr />'+
                              '<div class="textt-div">'+
                                  '<p>N '+ loan_amount +'</p>'+
                                  '<button type="submit"  class="btn">'+ loan_duration +' Months</button>'+
                              '</div>'+
                          '</div>'+
                          '</form>'+
                    '</div>'+
                '</div>';
          }
          $('#fetch_all_loans').html(text);
        } else {
          text +=
            '<div class="false-notification-div">' +
              "<p> " + message2 +" </p>" +'</div>';
          $('#fetch_all_loans').html(text);
        }
      },
    });
  }








  function _loan_repayment_installment(transaction_id) {
    var action = 'fetch-all-loan-requests-api';
    var dataString = 'action=' + action + '&transaction_id=' + transaction_id;

    $.ajax({
        type: "POST",
        url: endPoint,
        data: dataString,
        dataType: "json",
        cache: false,
        success: function (info) {
          var transaction_id = info.transaction_id;
          var fullname = info.fullname;
          var loanamount = new Intl.NumberFormat(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(info.loanamount);
          var loan_duration = info.loan_duration;
          var Cumulative_repayment = new Intl.NumberFormat(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(info.total_repayment);
          var created_at = info.created_at;
          var fetch = info.data;
          var success = info.success;
          var message2 = info.message2;

            var text = '';
            if (success == true) {
                text += 
                '<div class="repay-container-div">' +
                            '<div class="container-left-div">' +
                                '<div class="container-item-div">' +
                                    '<div class="text-div">' +
                                        '<p>Loan ID</p>' +
                                        '<hr />' +
                                        '<h2>' + transaction_id + '</h2>' +
                                    '</div>' +
                                '</div>' +

                                '<div class="container-item-div">' +
                                    '<div class="text-div">' +
                                        '<p>Customer Name:</p>' +
                                        '<hr />' +
                                        '<h2>' + fullname + '</h2>' +
                                    '</div>' +
                                '</div>' +

                                '<div class="container-item-div">' +
                                    '<div class="text-div">' +
                                        '<p>Loan Amount (N)</p>' +
                                        '<hr />' +
                                        '<h2>' + loanamount + '</h2>' +
                                    '</div>' +
                                '</div>' +

                                '<div class="container-item-div">' +
                                    '<div class="text-div">' +
                                        '<p>Loan Duration</p>' +
                                        '<hr />' +
                                        '<h2>' + loan_duration + ' Months</h2>' +
                                    '</div>' +
                                '</div>' +

                                '<div class="container-item-div">' +
                                    '<div class="text-div">' +
                                        '<p>Cumulative Repayment Amount (N)</p>' +
                                        '<hr />' +
                                        '<h2>N ' + Cumulative_repayment +'</h2>' +
                                    '</div>' +
                                '</div>' +

                                '<div class="container-item-div">' +
                                    '<div class="text-div">' +
                                        '<p>Date</p>' +
                                        '<hr />' +
                                        '<h2>' + created_at + '</h2>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                            
                            '<div class="container-right-div">' +
                                '<div class="container-item-div">' +
                                    '<div class="table-container">' +
                                        '<table>' +
                                            '<thead>' +
                                                '<tr>' +
                                                    '<th>MONTH (S)</th>' +
                                                    '<th>LOAN BALANCE</th>' +
                                                    '<th>SUB PAYMENT</th>' +
                                                    '<th>INTEREST</th>' +
                                                    '<th>TOTAL REPAYMENT</th>' +
                                                '</tr>' +
                                            '</thead>' +
                                            '<tbody>' ;

                                            for (var i = 0; i < fetch.length; i++) {
                                              var month = fetch[i].month;
                                              var loan_balance = new Intl.NumberFormat(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(fetch[i].loan_balance);
                                              var sub_payment = new Intl.NumberFormat(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(fetch[i].sub_payment);
                                              var interest = new Intl.NumberFormat(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(fetch[i].interest);
                                              var monthly_repayment = new Intl.NumberFormat(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(fetch[i].total_repayment);
                                              text +=

                                                '<tr>' +
                                                    '<td>' + month + '</td>' +
                                                    '<td>' + loan_balance + '</td>' +
                                                    '<td>'+ sub_payment + '</td>' +
                                                    '<td>' + interest + '</td>' +
                                                    '<td>' + monthly_repayment + '</td>' +
                                                '</tr>' ;
                                            }

                                            text +=

                                            '</tbody>' +
                                        '</table>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>';
                        $('#repayment_installments').html(text);
            }else{
              text +=
              '<div class="false-notification-div">' +
                "<p> " + message2 + " </p>" +'</div>';
            $('#repayment_installments').html(text);
            }
        },
    });
}
