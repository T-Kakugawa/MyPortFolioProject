//画像を変更するやつ
function changeImage() {
    let images = ["../CompanyHPwithFlexBox/resources/images/shiba.jpeg",
        "../CompanyHPwithFlexBox/resources/images/shiba3.jpeg",
        "../CompanyHPwithFlexBox/resources/images/shiba4.jpeg",
        "../CompanyHPwithFlexBox/resources/images/草原.jpeg"];
    const image = document.getElementById("image");
    let randomIndex = Math.floor(Math.random() * images.length);
    image.src = images[randomIndex];
}
const image = document.getElementById("image");
image.addEventListener("click",changeImage);
