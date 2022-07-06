"use strict";


let array = [];

let imgs = [];
const displayingElements = () => {
    for (let i = 0; i < 12; i++) {
        imgs.push(`<img src="./img/img.png" alt="" class="candy">`);
        let candies = document.getElementById('candies');
        candies.innerHTML += `${imgs[i]}`;
    }
}

displayingElements();


const increasingDishA = () => {
    // input内の値を取得
    let textFiledA = document.getElementById('text_filed_a');
    console.log(textFiledA.value);

    // あめ玉を囲う箱をつくる
    let divForImgA = document.createElement('div');
    divForImgA.classList.add('div_for_img_a');

    // 値分A君用のお皿にあめ玉をうつす
    for (let i = 1; i <= textFiledA.value; i++) {

        // あめ玉を入力値分増やす
        let img = document.createElement('img');
        img.id = `imgA${i}`;
        img.classList.add('add');
        img.src = './img/img.png';

        let dishA = document.getElementById('dish_a');
        dishA.appendChild(divForImgA);
        divForImgA.appendChild(img);

        // メモ
        //* appendchildに`${img}`するとエラー出る
    }
    // 配列に代入＝値の保存
    arrayForCandies.push(textFiledA.value);

    deletingDishA(textFiledA.value);
};

const deletingDishA = (textFiledAValue) => {
    imgs.splice(0, textFiledAValue);
    let candies = document.getElementById('candies');
    candies.innerHTML = "";
    for (let i = 0; i < imgs.length; i++) {
        let candies = document.getElementById('candies');
        candies.innerHTML += `${imgs[i]}`;
    }

}

const increasingDishB = () => {
    // input内の値を取得
    let textFiledB = document.getElementById('text_filed_b');
    console.log(textFiledB.value);

    // あめ玉を囲う箱をつくる
    let divForImgB = document.createElement('div');
    divForImgB.classList.add('div_for_img_b');

    // 値分A君用のお皿にあめ玉をうつす
    for (let i = 1; i <= textFiledB.value; i++) {

        // あめ玉を入力値分増やす
        let img = document.createElement('img');
        img.id = `imgB${i}`;
        img.classList.add('add');
        img.src = './img/img.png';

        let dishB = document.getElementById('dish_b');
        dishB.appendChild(divForImgB);
        divForImgB.appendChild(img);

        // メモ
        //* appendchildに`${img}`するとエラー出る
    }
    // 配列に代入＝値の保存
    arrayForCandies.push(textFiledB.value);

    deletingDishB(textFiledB.value);
};

const deletingDishB = (textFiledBValue) => {
    imgs.splice(0, textFiledBValue);
    let candies = document.getElementById('candies');
    candies.innerHTML = "";
    for (let i = 0; i < imgs.length; i++) {
        let candies = document.getElementById('candies');
        candies.innerHTML += `${imgs[i]}`;
    }
}
const increasingDishC = () => {
    // input内の値を取得
    let textFiledC = document.getElementById('text_filed_c');
    console.log(textFiledC.value);

    // あめ玉を囲う箱をつくる
    let divForImgC = document.createElement('div');
    divForImgC.classList.add('div_for_img_c');

    // 値分A君用のお皿にあめ玉をうつす
    for (let i = 1; i <= textFiledC.value; i++) {

        // あめ玉を入力値分増やす
        let img = document.createElement('img');
        img.id = `imgC${i}`;
        img.classList.add('add');
        img.src = './img/img.png';

        let dishB = document.getElementById('dish_c');
        dishB.appendChild(divForImgC);
        divForImgC.appendChild(img);

        // メモ
        //* appendchildに`${img}`するとエラー出る
    }
    // 配列に代入＝値の保存
    arrayForCandies.push(textFiledC.value);

    deletingDishC(textFiledC.value);
};

const deletingDishC = (textFiledCValue) => {
    imgs.splice(0, textFiledCValue);
    let candies = document.getElementById('candies');
    candies.innerHTML = "";
    for (let i = 0; i < imgs.length; i++) {
        let candies = document.getElementById('candies');
        candies.innerHTML += `${imgs[i]}`;
    }
}


