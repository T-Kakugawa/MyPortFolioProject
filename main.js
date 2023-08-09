//画像を変更する関数
function changeImage() {
    //画像のソース配列
    let images = ["../CompanyHPwithFlexBox/resources/images/shiba.jpeg",
        "../CompanyHPwithFlexBox/resources/images/shibaX.jpeg",
        "../CompanyHPwithFlexBox/resources/images/shiba3.jpeg",
        "../CompanyHPwithFlexBox/resources/images/shiba4.jpeg"];
    //現在表示されている画像のインデックスを取得
    let src = document.getElementById("image").getAttribute("src");
    let previousIndex;
    for(let i=0; i<images.length;i++) {
        if(src===images[i]) {
            previousIndex = i;
        }
    }
    //現在のインデックスと違う番号を選択
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * images.length)
    } while(randomIndex === previousIndex)

    const image = document.getElementById("image");
    image.src = images[randomIndex];
}
const image = document.getElementById("image");
image.addEventListener("click", changeImage);
