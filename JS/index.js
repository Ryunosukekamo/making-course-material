"use strict";

// 表示する画像を入れておくために、空配列を生成
let imgs = [];

// 正誤判定用の配列
let textFiledValues = [];

// 空配列にimgを入れ、HTMLに表示
const displayingElements = () => {
    for (let i = 0; i < 12; i++) {
        imgs.push(`<img src="../img/candy.png" alt="" class="candy">`);
        let candies = document.getElementById('candies');
        candies.innerHTML += `${imgs[i]}`;
    }
}

displayingElements();

// A君用のあめ玉を増やす処理
const increasingDishA = () => {
    // input内の値を取得
    let textFiledA = document.getElementById('text_filed_a');

    // あめ玉を囲う箱をつくる
    let divForImgA = document.createElement('div');
    divForImgA.classList.add('div_for_img_a');

    // 値分A君用のお皿にあめ玉をうつす
    for (let i = 1; i <= textFiledA.value; i++) {

        // あめ玉を入力値分増やす
        let img = document.createElement('img');
        img.id = `imgA${i}`;
        img.classList.add('add');
        img.src = '../img/candy.png';

        // 実際にお皿の上に表示
        let dishA = document.getElementById('dish_a');
        dishA.appendChild(divForImgA);
        divForImgA.appendChild(img);
    }

    // 入力値を正誤判定用に保存
    textFiledValues.push(textFiledA.value);

    deletingDishA(textFiledA.value);
};

// あめ玉を指定した数分、削除する処理
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

    // あめ玉を囲う箱をつくる
    let divForImgB = document.createElement('div');
    divForImgB.classList.add('div_for_img_b');

    // 値分A君用のお皿にあめ玉をうつす
    for (let i = 1; i <= textFiledB.value; i++) {

        // あめ玉を入力値分増やす
        let img = document.createElement('img');
        img.id = `imgB${i}`;
        img.classList.add('add');
        img.src = '../img/candy.png';

        let dishB = document.getElementById('dish_b');
        dishB.appendChild(divForImgB);
        divForImgB.appendChild(img);
    }
    // 入力値を正誤判定用に保存
    textFiledValues.push(textFiledB.value);

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

    // あめ玉を囲う箱をつくる
    let divForImgC = document.createElement('div');
    divForImgC.classList.add('div_for_img_c');

    // 値分A君用のお皿にあめ玉をうつす
    for (let i = 1; i <= textFiledC.value; i++) {

        // あめ玉を入力値分増やす
        let img = document.createElement('img');
        img.id = `imgC${i}`;
        img.classList.add('add');
        img.src = '../img/candy.png';

        let dishC = document.getElementById('dish_c');
        dishC.appendChild(divForImgC);
        divForImgC.appendChild(img);
    }
    // 入力値を正誤判定用に保存
    textFiledValues.push(textFiledC.value);

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


const btn = () => {
    if (textFiledValues.length == 3) {
        if (textFiledValues[0] && textFiledValues[1] && textFiledValues[2] == 4) {
            console.log('正解');
        } else {
            console.log('不正解');
        }
    }

}
