function sign_In_Me(){











	











		if(document.getElementById("emailaddress").value==''){











		alert("Field Email Address cannot be left blank.");











		document.getElementById("emailaddress").focus();











		return false;











		}











		











		var email = document.getElementById("emailaddress").value;











		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;











		if(reg.test(email) == false){











		alert("Please enter a valid Email Address.");











		document.getElementById("emailaddress").focus();











		return false;











		}











		if(document.getElementById("textspassword").value==''){











		alert("Field Password cannot be left blank.");











		document.getElementById("textspassword").focus();











		return false;











		}











		return true;











}























function Register_Me(){























		if(document.getElementById("full_name").value==''){











		alert("Field Full Name cannot be left blank.");











		document.getElementById("full_name").focus();











		return false;











		}











		











		if(document.getElementById("email_address").value==''){











		alert("Field Email Address cannot be left blank.");











		document.getElementById("email_address").focus();











		return false;











		}











		











		var email = document.getElementById("email_address").value;











		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;











		if(reg.test(email) == false){











		alert("Please enter a valid Email Address.");











		document.getElementById("email_address").focus();











		return false;











		}











		if(document.getElementById("textpassword").value==''){











		alert("Field Password cannot be left blank.");











		document.getElementById("textpassword").focus();











		return false;











		}











		











		var checkbox2 = document.getElementById('terms_and_cond');











		if (!checkbox2.checked) {











		alert("Policy and Terms & conditions must be accepted.");











		return false;











		}























		return true;











}











function Update_Confirmation_Thankx_Page(){











		$(".heading_popup").html("<h2>Loading...</h2>");











			$(".popup_info_blk_h").html("<h2>Loading...</h2>");











			











			url = "http://webconz.com/demo/dating/wp-content/plugins/ean_plugin/includes/ajax-functions.php?";











			var param = "action=email_verification_done";











		    //alert(param); 











			url += param;











			//alert(url);











			var myData = Get_Results_Ajax_Javascript(url);	











			//alert(myData.msg);











			//alert(myData.errid);











			if(myData.errid=="0000"){











			$(".heading_popup").html(myData.c1+'<div><img src="http://webconz.com/demo/dating/wp-content/plugins/ean_plugin/images/popup/close.png" width="19" height="19" alt=" "></div>');











			$("#twc_popup_wrapper_block .heading_popup div img").bind("click", function(){











				$(".register_now").fadeOut();











			});











			$(".popup_info_blk_h").html(myData.c2);











			











			$(".popup_border_blk").html(myData.c3);











			$(".register_now").fadeIn();











			}











	}











function Get_Results_Ajax_Javascript(url) {











	return JSON.parse($.ajax({











		type: 'GET',











		url: url,











		dataType: 'json',











		global: false,











		async:false,











		success: function(data) {











		return data;











		}











		}).responseText);











	}











$(document).ready(function(){











	//$("ul.link_block li:last-child").css("margin-right","0px");











	$(".check_login").click(function(){











		$(".register_now").fadeIn();











		











	});











	











	/*$("#update_caption").click(function(){











		$("#dialog").css("display","block");								











        $("#dialog").dialog({modal: true, height: 90, width: 205 });











	});*/











	











	











	$("#twc_popup_wrapper_block .heading_popup div img").bind("click", function(){











		$(".register_now").fadeOut();











	});











	











	











	$(".signIn").click(function(){











		if(sign_In_Me()!=false){











			url = "http://webconz.com/demo/dating/wp-content/plugins/ean_plugin/includes/ajax-functions.php?";











			var param = "action=sign_In_me&emailaddress="+$(".emailaddress_signIn").val()+"&textspassword="+$(".textpasswords_signIn").val();











		    //alert(param); 











			url += param;











			//alert(url);











			var myData = Get_Results_Ajax(url);











			//alert(myData.errid);











			if(myData.errid=="000"){











			$(".register_now").fadeOut();











			$(".link_block li:last-child").html(myData.msg);











			Activate_Settings_logout();











		}











			if(myData.errid=="0000"){











			$(".LoginError").html("Incorrect Username/ Password");











		}











		}











		











	});











	











	function Activate_Settings_logout(){











		$(".settings").bind("click", function(){











			alert("Settings Clicked");							  











		});











		$(".logout").bind("click", function(){











			url = "http://webconz.com/demo/dating/wp-content/plugins/ean_plugin/includes/ajax-functions.php?";











			var param = "action=log_Out_me";











		    alert(param); 











			url += param;











			alert(url);











			var myData = Get_Results_Ajax(url);							  











		});











	}











	Activate_Settings_logout();











	











	











	$(".Register").click(function(){











		if(Register_Me()!=false){











			$(".heading_popup").html("<h2>Loading...</h2>");











			$(".popup_info_blk_h").html("<h2>Loading...</h2>");











			url = "http://webconz.com/demo/dating/wp-content/plugins/ean_plugin/includes/ajax-functions.php?";











			var param = "action=register_me&gender="+$('input:radio[name=gender]:checked').val()+"&fullname="+$(".fullname").val()+"&emails="+$(".emailaddress").val()+"&passwords="+$(".textpasswords").val()+"&termscondition="+$(".termscondition").val();











		    //alert(param); 











			url += param;











			//alert(url);











			var myData = Get_Results_Ajax(url);	











			alert(myData.msg);











			//alert(myData.errid);











			if(myData.errid=="0000"){











			//$(".heading_popup").css("display", "none");











			//$(".popup_info_blk_h").css("display", "none");











			//$(".popup_border_blk").css("display", "none");











			//$(".popup_border_blk").fadeOut();











			$(".heading_popup").html(myData.c1+'<div><img src="http://webconz.com/demo/dating/wp-content/plugins/ean_plugin/images/popup/close.png" width="19" height="19" alt=" "></div>');











			$("#twc_popup_wrapper_block .heading_popup div img").bind("click", function(){











				$(".register_now").fadeOut();











			});











			$(".popup_info_blk_h").html(myData.c2);











			//$(".popup_border_blk").html(myData.c3);











			











			var $newHTML  = $('<div class="inner_div" style="position : absolute; left : -9999px;">' + myData.c3 + '</div>').appendTo('body'),











            theHeight = $newHTML.height();











			theHeight += 100;











			$(".popup_border_blk").animate({ height : theHeight }, 500, function () {











            	//notice the `style` attribute of the new HTML is being reset so it's not displayed off-screen anymore











           	 	$(".popup_border_blk").html($newHTML.attr('style', ''));











        	});











			











			$(".heading_popup").fadeIn();











			$(".popup_info_blk_h").fadeIn();











			//alert($(".popup_border_blk .inner_div"));











			$(".popup_border_blk .inner_div").css("visibility", "hidden");











			$(".popup_border_blk .inner_div").fadeIn();











			Resend_Verification_Email();











			}











		}











	});











	























function Resend_Verification_Email(){











$(".register_sucess_left .round_2 , .register_sucess_right .round_3").bind("click", function(){	











		url = "http://webconz.com/demo/dating/wp-content/plugins/ean_plugin/includes/ajax-functions.php?";











		var param = "action=resend_email_verification_done&userids="+$(".register_sucess_left .round_2, .register_sucess_right .round_3").attr("userids");











		//alert(param); 











		url += param;











		//alert(url);











		var myData = Get_Results_Ajax_Javascript(url);	











		//alert(myData.msg);











		//alert(myData.errid);











		if(myData.errid=="0000"){











			$(".resendVerificationEmail").html("Your Verification E-Mail Resend Successfully.");











		}











});	











}























function Get_Results_Ajax(url) {











	return JSON.parse($.ajax({











		type: 'GET',











		url: url,











		dataType: 'json',











		global: false,











		async:false,











		success: function(data) {











		return data;











		}











		}).responseText);











	}











	











	











	























								   











			$(".example2").click(function(){











				$(".bakground").fadeIn();











			});











			











			$(".fancybox-close").click(function(){











				$(".bakground").fadeOut();











			});











			











			











           /* var Obj = document.getElementById("example2");











            Obj.onclick = function(){











                document.getElementById("bakground").style.display = "block";











            }











            var Obj1 = document.getElementById("fancybox-close");











            Obj1.onclick = function(){











                document.getElementById("bakground").style.display = "none";











            }*/











			











							











			$("a#example2").fancybox({











				'overlayShow'	: false,











				'transitionIn'	: 'elastic',











				'transitionOut'	: 'elastic'











			});











			











				











			$("a[rel=example_group]").fancybox({











				'transitionIn'		: 'none',











				'transitionOut'		: 'none',











				'titlePosition' 	: 'over',











				'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {











					return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';











				}











			});























		











	











	











	











	











	











	











});























