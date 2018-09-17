var count=0;
var Alea = Math.floor(Math.random()*situations.length);

function GenererPreventionAlea(aleatoire){
	$('#img').html("<img class='responsive-img' src='img/"+situations[aleatoire].genre+"'>");
	$('#situation').html(situations[aleatoire].situation);
	console.log()

	$('.resA').html('<div><label for="resA" class="resA"><input id="resA" type="radio" name="answers" value="resA">'+situations[Alea].resA+'</label></div>');
	$('.resB').html('<div><label for="resB" class="resB"><input id="resB" type="radio" name="answers" value="resB">'+situations[Alea].resB+'</label></div>')
}

function CreateButon(aleatoire){
	$('#CreateButon').append("<button class='btn waves-effect green darken-2 btn_redirect' id='redirection'>En savoir plus...</button><button class='btn waves-effect green darken-2 next' >Question suivante</button>");
	$('#CreateButon').delegate('#redirection','click',function(){
		window.location.href = situations[aleatoire].redirect;
	});
}

function reponsePreventionMessage(aleatoire){
	if ($("#radioBtn input").is(':checked')){
		var test = $("#radioBtn input:checked").val();
		console.log(test);

		if(test === situations[aleatoire].response){
			if (situations[Alea].response === "resA") {
				$("#reponsePrevention").html('<div class="card bg-success Panel">'+situations[aleatoire].ifResA+'</div>');
				if (count===0) {
					setTimeout(CreateButon,1000);
				}
			}else{
				$("#reponsePrevention").html('<div class="card bg-success Panel">'+situations[aleatoire].ifResB+'</div>');
				if (count===0) {
					setTimeout(CreateButon,1000);
				}
			}
		}else{
			if (situations[aleatoire].response === "resB") {
				$('#reponsePrevention').html('<div class="card-panel bg-warning Panel">'+situations[aleatoire].ifResA+'</div>');
				if (count===0) {
					setTimeout(CreateButon,1000);
				}
			}else{
				$('#reponsePrevention').html('<div class="card-panel bg-warning Panel">'+situations[aleatoire].ifResB+'</div>');
				if (count===0) {
					setTimeout(CreateButon,1000);
				}
			}
		}
	}
}






GenererPreventionAlea(Alea);
$("#radioBtn input").click(function() {
	reponsePreventionMessage(Alea);
	count ++;
});

$("#radioBtn input").click(function() {
	reponsePreventionMessage(Alea);
	count ++;
});
$('.next').on('click', function(){
	document.location.reload();
});
