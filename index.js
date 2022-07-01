"use strict";

let arrayForCalculate = [];

const chaningMainContent = () => {

    new Promise(resolve => {
        // inputに入力した値を取得
        let mainContentFiled = document.getElementById('main_content_filed');
        let mainContentFiledValue = mainContentFiled.value;

        //リボンの長さを変更
        let mainContent = document.getElementById('main_contet');
        mainContent.style.width = `${mainContentFiledValue}%`;

        // リボンの長さを保存
        arrayForCalculate.push(mainContentFiledValue);
        resolve();

    }).then(() => {
        return new Promise(resolve => {
            // もう一方の入力欄を表示
            let displayingContentFiled = document.getElementById('displaying_content_filed');
            displayingContentFiled.style.display = "block";
            resolve();

        })
    })


}

const chaningSecondContent = () => {
    // もう一方に入力した値を取得
    let displayingContentFiled = document.getElementById('displaying_content_filed');
    let displayingContentFiledValue = displayingContentFiled.value;

    // リボンの長さを変更して、表示
    let displayingContent = document.getElementById('displaying_content');
    displayingContent.style.width = `${displayingContentFiledValue}%`;
    displayingContent.style.display = "block";

    // リボンの長さを保存
    arrayForCalculate.push(displayingContentFiledValue);

    // 割り算の処理
    const calculating = () => {
        let mainContentValue = parseInt(arrayForCalculate[0]);
        let secondContentValue = parseInt(arrayForCalculate[1]);
        console.log(mainContentValue / secondContentValue);

    }

    calculating();
}
