var musicList=[
				{ 
					musicName:"孤单心事",
					author:"安瑞兮",
					posterImage:"img/12619864.jpg",
					musicSrc:"img/安瑞兮 - 孤单心事.mp3"
				},
				{
					musicName:"Secret Baseret Base",
					author:"软木",
					posterImage:"img/20151125160625_8znws.jpeg",	
					musicSrc:"img/软木 - Secret Base.mp3"
				},
				{
					musicName:"三妻四妾",
					author:"王媛渊",
					posterImage:"img/7730-150914153634-51.jpg",
					musicSrc:"img/王媛渊 - 三妻四妾.mp3"
				},
				{
					musicName:"某月某日",
					author:"许诺 ",
					posterImage:"img/雪纯1.jpg",
					musicSrc:"img/许诺 - 某月某日.mp3"
				},
				{
					musicName:"当蝴离开了蝶",
					author:"庄心妍",
					posterImage:"img/雪纯2.jpg",
					musicSrc:"img/庄心妍 - 当蝴离开了蝶.mp3"
				},
				{
					musicName:"独自唱情歌",
					author:"庄心妍",
					posterImage:"img/雪纯7.jpg",
					musicSrc:"img/庄心妍 - 独自唱情歌.mp3"
				}];
			var list=document.querySelector("#list");
			var mp3=document.querySelector("#mp3")
			var str="";	
			var playState=false;
			var xulie=0;
			
			
			for(var i=0;i<musicList.length;i++){
				 str+="<div id='listItem"+i+"'>"+musicList[i].musicName+"</div>"
			}
			
			list.innerHTML=str;
//			document.body.appendChild(list);
			for(var i=0;i<musicList.length;i++){
					document.querySelector("#listItem"+i).onclick=function(event){
					var idNum=Number(event.target.id.charAt(8));
					console.log(idNum);
					mp3.src=musicList[idNum].musicSrc;
					console.log(idNum+"   "+musicList[idNum].posterImage);
					document.querySelector("#bottomImage img").src = musicList[idNum].posterImage;
					document.querySelector("#inf1").innerHTML=musicList[idNum].author;
					document.querySelector("#inf").innerHTML=musicList[idNum].musicName;
					mp3.play();
					xulie=idNum;
				}
			}
			
			document.querySelector("#playBtn").onclick=function(){
				if(playState){
					mp3.pause();
					playState=false;
				}else{
					mp3.play();
					playState=true;
				}
			}
			document.querySelector("#nextBtn").onclick=function(){
				xulie++;
				if(xulie==musicList.length){
					xulie=0;
				}
				mp3.src=musicList[xulie].musicSrc;
				mp3.play();
			}
			document.querySelector("#preBtn").onclick=function(){
				xulie--;
				if(xulie<0){
					xulie=musicList.length-1;
					
				}
				mp3.src=musicList[xulie].musicSrc;
				mp3.play();
			}