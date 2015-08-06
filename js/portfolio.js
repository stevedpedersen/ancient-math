var render_video_details = function(data) {
	alert("sometext");
  //var video = video_details_data[ $(data.relatedTarget).parents("div").first().attr("data-video-id") ];
  var row_el = $(".work-reel .portfolio .videos");
  var clone_video = row_el.find(".video").remove();
  var row_videos = [];
  var new_video;

  for (var i = 0, len = data.length; i < len; i++) {
  	window.alert("sometext");
  	new_video = clone_video.clone();
  	new_video.attr("data-video-id", i);
  	new_video.attr("id", data[i].videoId);
  	new_video.find("iframe").attr("src",data[i].vidSource);
  	new_video.find("a").attr("href", data[i].linkTo).text(data[i].description);
  	row_videos.push(new_video);
  }
  row_el.append(row_videos);
}

render_video_details(video_details_data);