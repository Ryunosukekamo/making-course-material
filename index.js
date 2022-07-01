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

    new Promise(resolve => {
        // もう一方に入力した値を取得
        let displayingContentFiled = document.getElementById('displaying_content_filed');
        let displayingContentFiledValue = displayingContentFiled.value;

        // リボンの長さを変更して、表示
        let outsideDisplayingContent = document.getElementById('outside_displaying_content');
        let displayingContent = document.getElementById('displaying_content');
        outsideDisplayingContent.style.display = "flex";
        displayingContent.style.width = `${displayingContentFiledValue}%`;
        displayingContent.style.display = "block";
        for (let i = 1; i < displayingContentFiledValue; i++) {
        // let content = document.createElement('div');  
        // i.setAttribute("class","displaying_content");
        // displayingContent.appendChild("displayingContent");
        }

        // リボンの長さを保存
        arrayForCalculate.push(displayingContentFiledValue);

        resolve();

    }).then(() => {
        return new Promise(resolve => {
            // 割り算の処理
            const calculating = () => {

                if (arrayForCalculate[0] && arrayForCalculate[1]) {
                    let mainContentValue = parseInt(arrayForCalculate[0]);
                    let secondContentValue = parseInt(arrayForCalculate[1]);
                    console.log(mainContentValue / secondContentValue);

                }

            }

            calculating();

            // ボタンの表示
            let btn = document.getElementById('btn');
            btn.style.display = "block";

            resolve();

        })
    })

}

const loading = () => {
    location.reload();
}



