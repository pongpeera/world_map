var country = {};
var interval = undefined;
var countrys =['BD','BE','BF','BG','BA','BN','BO','JP','BI','BJ','BT','JM','BW'
					,'BR','BS','BY','BZ','RU','RW','RS','TL','TM','TJ','RO','GW','GT'
					,'GR','GQ','GY','GE','GB','GA','GN','GM','GL','GH','OM','TN','JO'
					,'HR','HT','HU','HN','PR','PS','PT','PY','PA','PG','PE','PK','PH'
					,'PL','ZM','EH','EE','EG','ZA','EC','IT','VN','SB','ET','SO','ZW'
					,'ES','ER','ME','MD','MG','MA','UZ','MM','ML','MN','MN','MW','MR'
					,'UG','MY','MX','IL','FR','XS','FI','FJ','FK','NI','NL','NO','NA'
					,'VU','NC','NE','NG','NZ','NP','XK','CI','CH','CO','CN','CM','CL'
					,'XC','CA','CG','CF','CD','CZ','CY','CR','CU','SZ','SY','KG','KE'
					,'SS','SR','KH','SV','SK','KR','SI','KP','KW','SN','SL','KZ','SA'
					,'SE','SD','DO','DJ','DK','DE','YE','DZ','US','UY','LB','LA','TW'
					,'TT','TR','LK','LV','LT','LU','LR','LS','TH','TF','TG','TD','LY'
					,'AE','VE','AF','IQ','IS','IR','AM','AL','AO','AR','AU','AT','IN'
					,'TZ','AZ','IE','ID','UA','QA','MZ'
				];

function hilightColor() {
	interval = setInterval(function () {
		var map = $('#world_map');
		generateCountry()
		map.empty();
		map.vectorMap({
			map: 'world_mill',
			zoomOnScroll : false,
			backgroundColor: '#000000',
			zoomButtons : false,
			series: {
		      regions: [{
		        values: country,
		        scale: ['#C8EEFF', '#0071A4'],
		        normalizeFunction: 'polynomial'
		      }]
    }
		});
	},500);
};

function generateCountry() {
	var countryIndex = Math.floor( ( Math.random() * countrys.length ) + 1);
	var countryName = countrys[countryIndex];
	country = {};
	country[countryName] = 35 ;
}

$(document).ready(function() {
	var status = false;
	hilightColor();
	$('button').click(function () {
		if(status) {
			hilightColor();
			status = false;
			$(this).html('start');
		}else {
			clearInterval(interval);
			status = true;
			$(this).html('stop');
		}
	});
});