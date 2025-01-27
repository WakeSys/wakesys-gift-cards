$(document).ready(function(){
	$('#gift_cards').html('<div class="loading">Loading gift cards</div>');
	$.ajax({
		url: 'https://'+sub_domain_of_your_wakesys_account+'.wakesys.com/api/gift_cards.php',
		type: "GET",
		dataType: "jsonp",
		crossDomain: true,
		success: function (gift_cards) {
			try {
				$('#gift_cards').empty();
				
				console.log("response:", gift_cards);
				for(var i=0, l=gift_cards.length; i<l; i++) {
					var gift_card = gift_cards[i];
					if (
						typeof gift_cards_information[gift_card.master_ID_giftcard] !== 'undefined' 
						&& gift_cards_information[gift_card.master_ID_giftcard].length > 0
					) 
					{
						gift_card_image = gift_cards_information[gift_card.master_ID_giftcard][0];
						gift_card_name = gift_cards_information[gift_card.master_ID_giftcard][1];
						gift_card_description = gift_cards_information[gift_card.master_ID_giftcard][2];
						sort_index = gift_cards_information[gift_card.master_ID_giftcard][3];
					}
					else
					{
						gift_card_image = 'https://ws-fileshare.s3.amazonaws.com/background/gift_card/demo/1.png';
						gift_card_name = 'NAME not defined';
						gift_card_description = 'DESCRIPTION not defined <br> (gift_card.master_ID_giftcard=' + gift_card.master_ID_giftcard + ')';
						sort_index = 100 + i;
					}
					    output = 
							'<div class="gift_card">' +
								'<div class="gift_card_image">' +
									'<img src="' + gift_card_image + '" onerror="this.src=\'default-placeholder.png\'">' +
								'</div>' +
								'<div class="gift_card_name">' + gift_card_name + '</div>' +
								'<div class="gift_card_price">' + gift_card.price_gift_card + '€</div>' +
								'<div class="gift_card_description">' + gift_card_description + '</div>' +
								'<div class="gift_card_link">' + gift_card.link_to_purchase_giftcard + '</div>' +
								'<br>' +
								'<div class="gift_card_link">' +
									'<a href="' + gift_card.link_to_purchase_giftcard + '">' + 
										'Buy now' +
									'</a>' +
								'</div>' +
							'</div>'
						;
						gift_cards_output[sort_index] = output;
					
					
				}
				for(var i=0, l=gift_cards_output.length; i<l; i++) {
					$('#gift_cards').append(gift_cards_output[i]);
				}
			} catch(e) {
				console.log(e);
				$('#gift_cards').html('<div class="error">Error processing gift cards data.</div>');
			}
		},
		error: function () {
			$('#gift_cards').html('<div class="error">There was an error loading the data.</div>');
		}
	});
});
/* ]]> */