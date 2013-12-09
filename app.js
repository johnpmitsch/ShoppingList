$(document).ready(function() {
	
	//function to add item to list
	function add() {
		var item = document.getElementById("item").value;
		$("#entry").clone(true).appendTo("#list").val('').removeClass("hidden");
		$('li:last').text(item);
		}
	//checking for blank entry
	function shop() {
		if (document.getElementById("item").value == "") {
			exit();
		} else {
		$(".statement").addClass("hidden");
		add();
		$('#item').val(' ');
		}
	}
	//remove item from list
	$('#entry').dblclick(function() {
		(this).remove();
		});
	//submit item by clicking add
	$('#add').click(function() {
		shop();
		});
	//press enter to submit
	 $('#item').keypress(function(e) {
        if(e.which == 13) {
			event.preventDefault();
			shop();
			}
		});
	//remove items from list
	$('#remove').click(function() {
			//$("input:checked").remove();
			$("input:checked").parent().remove();
		});
	});