var images = [];
function loadExplodedImages() {
    for (var i = 0; i < 40; i++) {
        images[i] = new Image();
		var imsrc = 'images/Emission_Path_Explode_Images/Explode_Emission_Path_smfScope_Final_{i}.png';
		images[i].src = imsrc;
    }
}

var images = [];
function loadExplodedImagesEx() {
    for (var i = 0; i < 45; i++) {
        images[i] = new Image();
		var imsrc = 'images/Expath/Explode_Excitation_Path_smfScope_Final_{i}.png';
		images[i].src = imsrc;
    }
}

var images = [];
function loadExplodedImagesBox() {
    for (var i = 0; i < 55; i++) {
        images[i] = new Image();
		var imsrc = 'images/Final_Explode_Images_Microscope_Body_smfScope/Final_Explode_Images_Microscope_Body_{i}.png';
		images[i].src = imsrc;
    }
}

var imagesr = [];
function loadRotatedImages() {
    for (var i = 0; i < 35; i++) {
        imagesr[i] = new Image();
		var imsrc = 'images/Final_Rotation_View_smfScope/Final_Rotation_View_smfScope_{i}.png';
		imagesr[i].src = imsrc;
    }
}
