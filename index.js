"use strict";

// 
let arrayForCandies = [];

const increasingDishA = () => {
    // input内の値を取得
    let textFiledA = document.getElementById('text_filed_a');
    console.log(textFiledA.value);

    // あめ玉を囲う箱をつくる
    let divForImg = document.createElement('div');
    divForImg.classList.add('div_for_img');

    // 値分A君用のお皿にあめ玉をうつす
    for (let i = 1; i <= textFiledA.value; i++) {

        // あめ玉を入力値分増やす
        let img = document.createElement('img');
        img.id = `img${i}`;
        img.classList.add('add');
        img.src = './img/img.png';

        let dishA = document.getElementById('dish_a');
        dishA.appendChild(divForImg);
        divForImg.appendChild(img);

        // メモ
        //* appendchildに`${img}`するとエラー出る
    }
    // 配列に代入＝値の保存
    arrayForCandies.push(textFiledA.value);

    deletingDishA();
};

const deletingDishA = () => {
    if (arrayForCandies[0]) {
        // 配列の要素を文字列から数値に変換
        parseInt(arrayForCandies[0], 10);

        for (let i = 0; i < arrayForCandies[0]; i++) {
            let candies = document.getElementById('candies');
            candies.removeChild(candies.children[i]);
            console.log( candies.children[i]);
        }
    }
}



