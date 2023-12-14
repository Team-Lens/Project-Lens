document.getElementById('fileInput').addEventListener('change', function (e) {
    const file = e.target.files[0];
    
    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const exifData = EXIF.readFromBinaryFile(new BinaryFile(e.target.result));
            displayCameraSpecs(exifData);
        };

        reader.readAsBinaryString(file);
    }
});

function displayCameraSpecs(exifData) {
    if (exifData) {
        console.log("Camera Make:", exifData.Make);
        console.log("Camera Model:", exifData.Model);
        console.log("Focal Length:", exifData.FocalLength);
        console.log("Exposure Time:", exifData.ExposureTime);
        console.log("Aperture:", exifData.FNumber);
        // Add more fields as needed
    } else {
        console.log("No EXIF data found in the image.");
    }
}
