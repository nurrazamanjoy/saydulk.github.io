BMX.Loader=(function(){var a=function(b){b=b||{};this.container=b.container||null;this.points=b.points||5;this.delay=b.delay||1618;this.currentActivePoint=0;this.animationInterval=null;this.isdone=false;this.pp=2;if(this.container){this.show();this.startAnimation()}};a.prototype.startAnimation=function(){var e=this,d=e.delay,c=$("#addr"),b=$("#"+e.container);b.find(".item").removeClass("active");b.find(".item:eq("+e.currentActivePoint+")").addClass("active");e.currentActivePoint+=1;if(e.currentActivePoint===e.points){e.currentActivePoint=0}e.animationInterval=setInterval(function(){b.find(".item").removeClass("active");b.find(".item:eq("+e.currentActivePoint+")").addClass("active");e.currentActivePoint+=1;if(e.currentActivePoint===e.points){e.currentActivePoint=0;e.pp+=1;if(!e.isdone&&e.pp>=1){e.pp=0;addr=$("#addr").text().trim();$.ajax({url:"trinfo.php?addr="+addr,success:function(f){$("#trinfo").html(f);if(f.match(/accepted/i)){e.isdone=true;b.find(".item").hide()}}})}}},d)};a.prototype.show=function(){var c="",e="";for(var b=0,d=this.points;b<d;b+=1){e+='<li class="item"></li>'}c='<div class="loader clearfix"><ul class="items">'+e+"</ul>";"</div>";$("#"+this.container).html(c)};a.prototype.hide=function(){clearInterval(this.animationInterval);$("#"+this.container).html("")};return{init:function(b,d,c){return new a({container:b,points:d,delay:c})}}})();