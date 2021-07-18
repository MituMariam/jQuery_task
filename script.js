$(document).ready(function () {});
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

//Table data cheked all input box
$("#checked_all").click(function () {
  $(".row_check").prop("checked", this.checked);
  calculateGrandTotal();
});

$(".row_check").click(function () {
  calculateGrandTotal();
});

//== table data calculation ==/

$(".num_control").on('input',function(){
calculateRowTotal(this);
})


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

function calculateRowTotal(input) {
  let price = $(input).closest("tr").find(".price").val()||0;
  let qty = $(input).closest("tr").find(".qty").val()||0;
  let total =parseFloat(price*qty).toFixed(2);

  $(input).closest("tr").find(".total_price").val(total);
}

function calculateGrandTotal() {
  let totalPrice = 0;
  let totalQty = 0;
  // for each row:
  $(".row_check").each(function () {
    if ($(this).is(":checked")) {
      let price = $(this).closest("tr").find(".total_price").val() || 0;
      let qty = $(this).closest("tr").find(".qty").val() || 0;
      totalPrice += parseFloat(price);
      totalQty += parseFloat(qty);
    }
  });
  $("#grand_total_price").html(totalPrice);
  $("#grand_total_item").html(totalQty);
}
