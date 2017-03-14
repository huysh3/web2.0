$(document).ready(function() {
  post('http://s.chengxinxitong.com/app1.0.0/getUserInfoData.action', {'identify' : get_identify_safe()}, function(resp) {
    var resp = eval('(' + resp + ')')
    if (resp['errno'] != 0 && 'error' in resp) {
      alert(resp['error']);
      return false;
    }
    $('.banner_num').text(resp['family_planning']);
    $('div[role="personal_yestoday"]').text(resp['personal_yestoday']);
    $('font[role="personal_today"]').text(resp['personal_today']);
    if (resp['personal_today'] > resp['personal_yestoday']) {
      $('.tendency_up').addClass('active');
    } else {
      $('.tendency_down').addClass('active');
    }
    $('div[role="family_money"]').text(resp['family_money']);
    $('div[role="personal_today"]').text(resp['personal_today']);
    $('div[role="personal_money"]').text(resp['personal_money']);
  })
});
