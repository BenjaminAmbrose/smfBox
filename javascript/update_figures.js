
// Figure Exploded interactively loads static images, stored locally
function update_figure_exploded() {
  var period = document.getElementById("Figure_exploded_period_slider").value;
  var filename = "./images/emission_path_explode_images/Explode_Emission_Path_smfScope_Final_" + period + ".png";
  var image = document.getElementById("Figure_exploded_image");
  image.src = filename;
}

function update_figure_exploded_ex() {
  var period = document.getElementById("Figure_exploded_period_slider_ex").value;
  var filename = "./images/expath/explode_excitation_path_smfscope_final_" + period + ".png";
  var image = document.getElementById("Figure_exploded_image_ex");
  image.src = filename;
}

function update_figure_exploded_box() {
  var period = document.getElementById("Figure_exploded_period_slider_box").value;
  var filename = "./images/final_explode_images_microscope_body_smfscope/final_explode_images_microscope_body_" + period + ".png";
  var image = document.getElementById("Figure_exploded_image_box");
  image.src = filename;
}
// Figure Rotated interactively loads static images, stored locally
function update_figure_rotated() {
  var period = document.getElementById("Figure_rotated_period_slider").value;
  var id = 0;
  if (period > 0){
	  id = period % 35;
  }else if (period < 0){
	  id = 35-Math.abs(period);
  }else{
	  id = 0;
  }
  var filename = "./images/final_rotation_view_smfscope/final_rotation_view_smfscope_" + id + ".png";
  var image = document.getElementById("Figure_rotated_image");
  image.src = filename;
}
