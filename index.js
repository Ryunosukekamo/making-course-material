"use strict";

const chaningMainContent = () => {
    
    // inputに入力した値を取得
    let mainContentFiled = document.getElementById('main_content_filed');
    let mainContentFiledValue = mainContentFiled.value;
    console.log(mainContentFiledValue);

    //リボンの長さを変更
    let mainContent = document.getElementById('main_contet');
    mainContent.style.width=`${mainContentFiledValue}%`;
    
}