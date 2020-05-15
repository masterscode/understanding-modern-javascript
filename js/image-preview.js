"use strict";

const box = document.querySelector('.show-box');
const imageBox = box.querySelector('#img-box');
const imageInput = box.querySelector('#file');

const FileReadr = new FileReader();

imageInput.addEventListener('change', e => {
    let uploadedImage = e.target.files[0];
    // console.log(uploadedImage);
    FileReadr.readAsDataURL(uploadedImage);
});

FileReadr.onload = e => imageBox.src = e.target.result