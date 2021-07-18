$(document).ready(function () {
  //== input value display ==//
  $("button").click(function () {
    const username = $("#username").val();
    const email = $("#email").val();
    const gender = $("input[name='gender']:checked").val();
    const skill = $("#skill :selected").text();

    //pass multiple input values to another input field
    $("#text3").val([$("#username").val(), $("#email").val()]);
    //    console.log(a,b);
    $(".get_value").html(
      `<p> Username:${username}</p>
            <p> Email:${email}</p>
            <p> Gender:${gender}</p>
            <p> Skill:${skill}</p>`
    );
  });

  //== div theme changed after checkbox clicked ==/

  $("#theme").click(function () {
    if ($(this).is(":checked")) {
      $(".left_content").css("background-color", "#f6f7e6");
    } else {
      $(".left_content").css("background-color", "transparent");
    }
  });

  //== table data calculation ==/

  $("tr.mult_row input").keyup(calcPrice);
  function calcPrice() {
    let total = 0;
    let totalQty = 0;
    // for each row:
    $("tr.mult_row").each(function () {
      const x = Number($("#price", this).val());
      const y = Number($("#qty", this).val());
      console.log(x, y);
      const row_total = x * y;
      //total for each row
      $("#total", this).html(row_total);

      total += row_total;
      totalQty += y;
      console.log(totalQty);
    });
    $("#total_price").html(total);
    $("#total_item").html(totalQty);
  }

  //cheked all input box
  $('#checked_all').click(function () {    
    $('.tbl_calc input:checkbox').prop('checked', this.checked);
    // if ($("#select").is(":checked")) {
    //     calcPrice();
    // }else{
    //     total -= row_total;
    // }
});

});
