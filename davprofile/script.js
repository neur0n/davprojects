console.log('*----------------------------*');
console.log('@title: davprofile');
console.log('@author: DeeW. --> github.com/neur0n');
console.log('@version: 2.1a --> [2.0 = bestSkinsProfile]');
console.log('@platform: forumotion');
console.log('*----------------------------*');

var dav = function(version){
// Universal Variables of code
var rep = $('#field_id-14 .field_uneditable').text();
var coin = $('#field_id-13 .field_uneditable').text();
var cover = $('#field_id2 .field_uneditable').text();
	if(version == 'phpBB3') {
		console.log('[davProfile] phpBB3 Forum!');
		var avt = $('div[style] > img').attr('src');
		var name = $('.inner .h3 span[style]').first();
		$('.module .main').first().hide();
		$('#profile-advanced-layout').prepend(
		   '<div class="usr-options">'+name+'</div>' +
		    '<div class="davprofile">' +
		    '<div class="profile-avatar"><img src="' + avt + '" /></div>' +
		    '<div class="boxInfo">' +
		    '<div class="sReputation">' +
		    '<span>' + rep + '</span>' +
		    '<span>Reputação</span>' +
		    '</div>' +
		    '<div class="sPoints">' +
		    '<span>' + coin + '</span>' +
		    '<span>Moedas</span>' +
		    '</div>' +
		    '</div>' +
		    '</div>'
		    );
	} else if(version == 'phpBB2') {
		console.log('[davProfile] phpBB2 Forum!');
		var avt = $('div[style] > img').attr('src'); 
		var name = $('.inner .h3 span[style]').first();
		$('.module .main').first().hide();
		$('#profile-advanced-layout').prepend(
		    '<div class="davprofile">' +
		    '<div class="profile-avatar"><img src="' + avt + '" /></div>' +
		    '<div class="boxInfo">' +
		    '<div class="sReputation">' +
		    '<span>' + rep + '</span>' +
		    '<span>Reputação</span>' +
		    '</div>' +
		    '<div class="sPoints">' +
		    '<span>' + coin + '</span>' +
		    '<span>Moedas</span>' +
		    '</div>' +
		    '</div>' +
		    '</div>'
		    );
	} else if(version == 'punBB') {
		console.log('[davProfile] punBB Forum!');
		var avt = $('.center > img').attr('src'); 
		$('.module').first().hide();
		var name = $('.main-head .h3 span[style]').first();
		$('#profile-advanced-layout').prepend(
		    '<div class="usr-options">' + name + '</div>' +
		    '<div class="davprofile">' +
		    '<div class="profile-avatar"><img src="' + avt + '" />'+
		    '<div class="boxInfo">' +
		    '<div class="sReputation">' +
		    '<span>' + rep + '</span>' +
		    '<span>Reputação</span>' +
		    '</div>' +
		    '<div class="sPoints">' +
		    '<span>' + coin + '</span>' +
		    '<span>Moedas</span>' +
		    '</div>' +
		    '</div>' +
		    '</div>' +
		    '</div>'
		    );
	} else if(version == 'Invision') {
		console.log('[davProfile] Invision Forum!');
		var avt = $('.center > img').attr('src');
		var name = $('.maintitle h3 span[style]').first();
		$('.module .main').first().hide();
		$('#profile-advanced-layout').prepend(
		    '<div class="davprofile">' +
		    '<div class="profile-avatar"><img src="' + avt + '" /></div>' +
		    '<div class="boxInfo">' +
		    '<div class="sReputation">' +
		    '<span>' + rep + '</span>' +
		    '<span>Reputação</span>' +
		    '</div>' +
		    '<div class="sPoints">' +
		    '<span>' + coin + '</span>' +
		    '<span>Moedas</span>' +
		    '</div>' +
		    '</div>' +
		    '</div>'
		);
	}
}