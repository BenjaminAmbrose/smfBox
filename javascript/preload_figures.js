var images = [];
function loadExplodedImages() {
    for (var i = 0; i < 40; i++) {
        images[i] = new Image();
		var imsrc = './images/emission_path_explode_images/explode_emission_path_smfScope_Final_{i}.png';
		images[i].src = imsrc;
    }
}

var images = [];
function loadExplodedImagesEx() {
    for (var i = 0; i < 45; i++) {
        images[i] = new Image();
		var imsrc = '/images/Expath/Explode_Excitation_Path_smfScope_Final_{i}.png';
		images[i].src = imsrc;
    }
}

var images = [];
function loadExplodedImagesBox() {
    for (var i = 0; i < 55; i++) {
        images[i] = new Image();
		var imsrc = './images/final_explode_images_microscope_body_smfscope/final_explode_images_microscope_body_{i}.png';
		images[i].src = imsrc;
    }
}

var imagesr = [];
function loadRotatedImages() {
    for (var i = 0; i < 35; i++) {
        imagesr[i] = new Image();
		var imsrc = './images/final_rotation_view_smfscope/final_rotation_view_smfscope_{i}.png';
		imagesr[i].src = imsrc;
    }
}
