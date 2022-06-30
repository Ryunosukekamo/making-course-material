"use strict";

const chaningMainContent = () => {

    new Promise(resolve => {
        // inputに入力した値を取得
        let mainContentFiled = document.getElementById('main_content_filed');
        let mainContentFiledValue = mainContentFiled.value;

        //リボンの長さを変更
        let mainContent = document.getElementById('main_contet');
        mainContent.style.width = `${mainContentFiledValue}%`;
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

}
