jQuery(document).ready(function($) {

	var pathName = window.location.pathname;

	var i,j,state;

	var numKit = 12;

	var unitTime = 10;

	$(window).keydown(play);

	for(i=48;i<58;i++)
		document.getElementById(i).addEventListener("click", mouse);
	for(i=65;i<91;i++)
		document.getElementById(i).addEventListener("click", mouse);

	document.getElementById(32).addEventListener("click", mouse);

	document.getElementById(37).addEventListener("click", mouse);
	document.getElementById(39).addEventListener("click", mouse);

	var recOn = false;
	var recOff = false;
	var clickEvent = false;
	var emptySeq = true;

	var mp3 = [];
	var mp3Exist = [];
	var mp3List = [];
	var keySeq = [];
	var numSeq = [];
	var startLoop = [];
	var playLoop = [];
	var endLoop = [];
	var setInt = [];
	var setIntX = [];
	var setInt2 = [];
	var incTime = [];
	var oldNum = [];
	var red = [];
	var t = [];

	for (i=1;i<numKit-1;i++) {
		mp3[i] = [];
		mp3Exist[i] = [];
		mp3List[i] = [];
		startLoop[i] = [];
		playLoop[i] = [];
		endLoop[i] = [];
		setInt[i] = [];
		setIntX[i] = [];
		numSeq[i] = [];
		incTime[i] = [];
		oldNum[i] = [];
		red[i] = [];
		t[i] = [];
		for (j=48;j<58;j++) {
			red[i][j] = [];
			t[i][j] = [];
		}
		for (j=65;j<91;j++) {
			red[i][j] = [];
		}
		for (j=0;j<3;j++) {
			mp3[i][j] = [];
			mp3Exist[i][j] = [];
			startLoop[i][j] = [];
			playLoop[i][j]= [];
			endLoop[i][j] = [];
			setInt[i][j] = [];
			setIntX[i][j] = [];
			numSeq[i][j] = [];
			incTime[i][j] = [];
			oldNum[i][j] = [];
			for(k=0;k<60000/unitTime;k++)
				numSeq[i][j][k] = [];
		}
	}

	setKit(dir,kit);
	update(dir,kit);

	for (i=1;i<numKit-1;i++) {
		for (j=48;j<58;j++) {
			startLoop[i][j] = false;
			playLoop[i][j] = false;
			endLoop[i][j] = false;
			oldNum[i][j] = false;
			incTime[i][j] = 0;
			red[i][j] = 0;
			t[i][j] = false;
		}
		for (j=65;j<91;j++) {
			red[i][j] = 0;
		}
	}

	setInterval(function() {
		for(i=1;i<numKit-1;i++) {
			for(j=48;j<58;j++) {
				if(startLoop[i][j]) {
					if(!playLoop[i][j]) {
						playLoop[i][j] = true;
						loop(i,j);
					}
				}
			}
		}
	}, unitTime);

	function mouse() {
		clickEvent = true;
		key = this.id;
		play(key);
	}

	function play(e) {
		if (!clickEvent)
			key = e.keyCode;
		clickEvent = false;
		if (key==32) {
			if (!recOn) {
				state = 1;
				recOn = true;
				keySeq = [];
				start = parseInt(Date.now()/unitTime);
				before = 0;
				document.getElementById(32).className = "recon";
				for(i=48;i<58;i++) {
					document.getElementById(i).style.opacity = "0.1";
					document.getElementById(i).style.cursor = "default";
				}
				for(i=65;i<91;i++) {
					if(mp3Exist[kit][i]) {
						document.getElementById(i).style.opacity = "1";
						document.getElementById(i).style.cursor = "pointer";
					} else {
						document.getElementById(i).style.opacity = "0.1";
						document.getElementById(i).style.cursor = "default";
					}
				}
			} else {
				state = 0;
				recOn = false;
				if(!emptySeq) {
					state = 2;
					recOff = true;
					emptySeq = true;
					stop = parseInt((Date.now()/unitTime)-start);
					keySeq[stop] = 32;
					for (j=0;j!=-1;j++) {
						if (typeof keySeq[j]!="undefined") {
							keySeq = keySeq.slice(j);
							break;
						}
					}
					if(state==2) {
						for(i=48;i<58;i++) {
							if(!oldNum[kit][i]) {
								document.getElementById(i).style.opacity = "1";
								document.getElementById(i).style.cursor = "pointer";
							} else {
								document.getElementById(i).style.opacity = "0.1";
								document.getElementById(i).style.cursor = "default";
							}
						}
						for(i=65;i<91;i++) {
							document.getElementById(i).style.opacity = "0.1";
							document.getElementById(i).style.cursor = "default";
						}
					}
				} else {
					for(i=48;i<58;i++) {
						if(oldNum[kit][i]) {
							document.getElementById(i).style.opacity = "1";
							document.getElementById(i).style.cursor = "pointer";
						} else {
							document.getElementById(i).style.opacity = "0.1";
							document.getElementById(i).style.cursor = "default";
						}
					}
				}
				document.getElementById(32).className = "recoff";
				if(state===0) {
					for(i=65;i<91;i++) {
						if(mp3Exist[kit][i]) {
							document.getElementById(i).style.opacity = "1";
							document.getElementById(i).style.cursor = "pointer";
						} else {
							document.getElementById(i).style.opacity = "0.1";
							document.getElementById(i).style.cursor = "default";
						}
					}
				}
			}
		} else if (key>64 && key<91 && recOn) {
			for (j=0;j<mp3Length;j++) {
				i = mp3List[kit][j];
				if(i==key) {
					emptySeq = false;
					newTime = parseInt(Date.now()/unitTime);
					lap = parseInt((Date.now()/unitTime)-start);
					keySeq[lap] = key;
				}
			}
			document.getElementById(32).className = "recred";
		} else if (key>47 && key<58) {
			if(recOff) {
				if(!playLoop[kit][key]) {
					state = 3;
					recOff = false;
					numSeq[kit][key] = [];
					len = keySeq.length;
					for(i=0;i<len;i++) {
						if (typeof keySeq[i]!="undefined") {
							numSeq[kit][key][i] = keySeq[i];
						}
					}
					oldNum[kit][key] = true;
					keySeq = [];
					for(i=48;i<58;i++) {
						if(oldNum[kit][i]) {
							document.getElementById(i).style.opacity = "1";
							document.getElementById(i).style.cursor = "pointer";
						} else {
							document.getElementById(i).style.opacity = "0.1";
							document.getElementById(i).style.cursor = "default";
						}
					}
					for(i=65;i<91;i++) {
						if(mp3Exist[kit][i]) {
							document.getElementById(i).style.opacity = "1";
							document.getElementById(i).style.cursor = "pointer";
						} else {
							document.getElementById(i).style.opacity = "0.1";
							document.getElementById(i).style.cursor = "default";
						}
					}
					document.getElementById(32).className = "recoff";
				}
			} else {
				if (oldNum[kit][key]) {
					if (!startLoop[kit][key]) {
						state = 4;
						startLoop[kit][key] = true;
						for(i=48;i<58;i++) {
							if(oldNum[kit][i]) {
								if(startLoop[kit][i]) {
									document.getElementById(i).className = "keyon";
									document.getElementById(i).style.opacity = "1";
								} else {
									document.getElementById(i).className = "keyoff";
									document.getElementById(i).style.opacity = "1";
								}
							} else {
								document.getElementById(i).className = "keyempty";
								document.getElementById(i).style.opacity = "0.1";
							}
						}
						for(i=65;i<91;i++) {
							if(mp3Exist[kit][i]) {
								document.getElementById(i).style.opacity = "1";
								document.getElementById(i).style.cursor = "pointer";
							} else {
								document.getElementById(i).style.opacity = "0.1";
								document.getElementById(i).style.cursor = "default";
							}
						}
					} else {
						startLoop[kit][key] = false;
						playLoop[kit][key] = false;
						clearInterval(setInt[kit][key]);
						clearInterval(setIntX[kit][key]);
						document.getElementById(key).className = "keyoff";
					}
				}
			}
		} else if ((key==37 || key==39) && (state!=1 && state!=2)) {
			if (key==37 && kit!=1) {
				kit--;
				update(dir,kit);
			} else if (key==39 && kit<3) {
				kit++;
				update(dir,kit);
			}
		}
		if (mp3[kit][key] && mp3List[kit][key]==key && key!=9) {
			red[kit][key] = 0;
			mp3[kit][key].play();
			mp3[kit][key].currentTime = 0;
		}
	}

	function loop(i,num) {
		incTime[i][num] = 0;
		if (endLoop[i][num]) {
			endLoop[i][num] = false;
		}
		setInt[i][num] = setInterval(function() {
			key = numSeq[i][num][incTime[i][num]];
			if (typeof key != "undefined") {
				if (key==32) {
					endLoop[i][num] = true;
					clearInterval(setInt[i][num]);
					return loop(i,num);
				} else {
					mp3[i][key].currentTime = 0;
					mp3[i][key].play();
					red[i][key] = 0;
					red[i][num] = 0;
					t[i][num] = true;
				}
			}
			if(i == kit) {
				if(t[i][num]) {
					if(red[i][num]>15) {
						t[i][num] = false;
						red[i][num] = 0;
						document.getElementById(num).className = "keyon";
					} else {
						red[i][num]++;
						document.getElementById(num).className = "keyred";
					}
				}
			}
			incTime[i][num]++;
		}, unitTime);
	}

	function setKit(dir,kit) {
		p = 0;
		for (i=1;i<4;i++) {
			for (j=65;j<91;j++) {
				p=p+1.28;
				console.log(parseInt(p)+"%");
				mp3[i][j] = new Audio(themeURL+"/kit/"+dir+"/"+i+"/"+String.fromCharCode(j)+".mp3");
				http = new XMLHttpRequest();
				http.open("HEAD", themeURL+"/kit/"+dir+"/"+i+"/"+String.fromCharCode(j)+".mp3", false);
				http.send();
				if(http.status!=404) {
					mp3Exist[i][j] = true;
				} else {
					mp3Exist[i][j] = false;
				}
			}
		}
		$("#loading").hide();
		$(".ghost").show();
		$("#keyboard").show();
	}

	var kitnum = $("<div class='kitnum'></div>");
	$("#keyboard").append(kitnum);

	function update(dir,kit) {
		$(kitnum).css("left",(kit-1)*60+9);
		for (i=65;i<91;i++) {
			if(mp3Exist[kit][i]) {
				mp3List[kit][i] = i;
				document.getElementById(i).className = "keyoff";
				document.getElementById(i).style.opacity = "1";
			} else {
				document.getElementById(i).className = "keyempty";
				document.getElementById(i).style.opacity = "0.1";
			}
		}
		for(i=48;i<58;i++) {
			if(oldNum[kit][i]) {
				if(startLoop[kit][i]) {
					document.getElementById(i).className = "keyon";
				} else {
					document.getElementById(i).className = "keyoff";
				}
				document.getElementById(i).style.opacity = "1";
			} else {
				document.getElementById(i).className = "keyempty";
				document.getElementById(i).style.opacity = "0.1";
			}
		}
		mp3Length = mp3Exist[kit].length;
		setInt2[kit];
		document.getElementById("keyboard").style.top = window.innerHeight/2-145+"px";
	}

	setInt2[kit] = setInterval(function() {
		for (j=0;j<mp3Length;j++) {
			i = mp3List[kit][j];
			if(mp3[kit][i]) {
				if(mp3[kit][i].ended) {
					document.getElementById(i).className = "keyoff";
					red[kit][i] = 0;
				} else if (!mp3[kit][i].paused) {
					red[kit][i]++;
					if(red[kit][i]>15) {
						document.getElementById(i).className = "keyon";
					} else {
						document.getElementById(i).className = "keyred";
					}
				}
			}
		}
	}, unitTime);

	window.onkeydown = function(e) {
		 return !(e.keyCode == 32);
	};

	window.addEventListener('keydown',
		function (e) {
			if (e.which==37 || e.which==39) {
				e.preventDefault();
			}
		}
	);

	$(document).mousemove(function() {
		$(".ghost").fadeIn();
	});

	$(document).mousestop(5000,function() {
		$(".ghost").fadeOut();
	});

	$('.numbers').tooltip({title: "Press NUMBERS to play, stop or store loops"});
	$('.letters').tooltip({title: "Press LETTERS to play sounds", placement: "left"});
	$('.kitnum').tooltip({title: "This circle is the KIT's number"});
	$('#32').tooltip({title: "Press SPACEBAR to record a loop of LETTERS and store it in a NUMBER", placement: "bottom"});
	$('.row').tooltip({title: "Press rows LEFT and RIGHT to switch KITs", placement: "right"});

});