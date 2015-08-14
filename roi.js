$(document).ready(function() {
  $('button').click(function(){
  	$('#agent-commission').val(agent_commission());
  	$('#broker-commission').val(broker_commission());
  	$('#number-referrals').val(number_referrals());
  	$('#transactions-gained').val(transactions_gained());
  	$('#agent-money-gained').val(agent_money_gained());
  	$('#brokerage-money-gained').val(brokerage_money_gained());
  	$('#agents-improved').val(agents_improved());
  	$('#agent-adoption').val(agent_adoption());
  	$('#agent-bringing-money').val(agent_bringing_money());
  	$('#total-roi').val(total_roi());
  })

  function agent_commission(){
  	//agent split + home price + commission %
  	return $('#home-price').val() * $('#agent-split').val() * $('#commission-percent').val();
  }

 	function broker_commission(){
 		//broker + avg home + commission %
   	return $('#broker-split').val() * $('#home-price').val() * $('#commission-percent').val();
  }

  function number_referrals(){
  	//transactions per year * % from referrals
  	return $('#transactions-per-year').val() * $('#referral-percent').val() ;

  }

  function transactions_gained(){
  	//transactions from referrals * .25
  	return number_referrals() * .25;
  }

  function agent_money_gained(){
  	//transactions gained * agent commission per transaction
		return transactions_gained() * agent_commission();
  }
  
  function brokerage_money_gained(){
  	//brokerage commission * transactions gained
  	return broker_commission() * transactions_gained();

  }

  function agents_improved(){
  	//agents at brokerage * (1 - what % cap out)
  	return $('#agents').val() * (1 - $('#cap-out').val());

  }

  function agent_adoption(){
  	//50%???
  	return 0.5;
  }

  function agent_bringing_money(){
  	//% agents that could improve * % agents that would adopt
  	return agents_improved() * agent_adoption();

  }

  function total_roi(){
  	//brokerage money gained * number of agents that could bring in more money
  	return brokerage_money_gained() * agent_bringing_money();
  }

  $('#home-price').keyup(function(){
  	console.log("hello there!");
  })

  
});