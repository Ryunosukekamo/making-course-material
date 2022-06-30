"use strict";

const chaningMainContent = () => {

    // inputに入力した値を取得
    let mainContentFiled = document.getElementById('main_content_filed');
    let mainContentFiledValue = mainContentFiled.value;
    console.log(mainContentFiledValue);

    //リボンの長さを変更
    let mainContent = document.getElementById('main_contet');
    let valueForWith = `${mainContentFiledValue}%`;
    mainContent.style.width = `${valueForWith}`;

    chaningSecondContent(valueForWith);
}

const chaningSecondContent = (valueForWith) => {
    if (valueForWith) {
        // もう一方の入力欄を表示
        let displayingContentFiled = document.getElementById('displaying_content_filed');
        displayingContentFiled.style.display = "block";

        // もう一方に入力した値を取得
        let displayingContentFiledValue = displayingContentFiled.value;
        console.log(displayingContentFiledValue);

        //リボンの長さを変更
        // let mainContent = document.getElementById('main_contet');
        // valueForWith = `${mainContentFiledValue}%`;
        // mainContent.style.width = `${valueForWith}`;
    } else {
        return;
    }
}