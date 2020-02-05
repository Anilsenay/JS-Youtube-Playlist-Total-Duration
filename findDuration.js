let videoStats = document.getElementById("stats");
let videoNumber = parseInt(videoStats.innerText.split(" ")[0]);
let scroolNeeded = Math.floor(videoNumber / 100);

window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight); //scroll at least one time

let internval = setInterval(() => {window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight); scroolNeeded--}, 5000);

setTimeout(() => { clearInterval(internval); counterFunction();}, 5000*scroolNeeded);

function counterFunction(){
  let minute = 0;
  let second = 0;
  var times = document.getElementsByClassName("style-scope ytd-thumbnail-overlay-time-status-renderer");

  for(var i = 0; i < times.length; i++){

      if(!isNaN(parseInt(times[i].innerText.replace(':', ''))/100)){

          let timeText = (parseInt(times[i].innerText.replace(':', '').replace(' ', ''))/100).toString();

          let timeTextSplit = timeText.split('.');
          minute += parseInt(timeTextSplit[0]);
          if(timeTextSplit[1] != undefined && timeTextSplit[1].length == 2)
            second += parseInt(timeTextSplit[1]);
          else if(timeTextSplit[1] != undefined && timeTextSplit[1].length < 2)
            second += parseInt(timeTextSplit[1]) * 10;
      }

  }

  minute += Math.floor(second / 60);
  second = second % 60;

  if(minute >= 60){
    let hour = Math.floor(minute / 60);
    minute = minute % 60;
    alert(`This playlist in total : ${hour} hour, ${minute} minute, ${second} second.`);
  }
  else
    alert(`This playlist in total : ${minute} minute, ${second} second.`);

}
