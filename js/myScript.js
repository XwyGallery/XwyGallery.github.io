function sendMessage() {
    var inputBox = document.getElementById('inputBox');
    var outputBox = document.getElementById('outputBox');
    const prompt = inputBox.value;
    const apiKey = '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'; //Your own API Key



    // 向 GPT 的 API 发送请求 https://platform.openai.com/account/api-keys
    fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        body: JSON.stringify({model: 'text-davinci-003',
            prompt,
            max_tokens: 100,
            n: 1,
            stop: null,
            temperature: 0.5,}), // 在请求体中传递 engine 参数}),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}` // 将您的 API 密钥放在这里
        }
    })
        .then(response => response.json())
        .then(data => {
            // 获取 GPT 返回的输出信息
            var output = data.choices[0].text;
            var outputElement = document.createElement('p');
            outputElement.textContent = 'token：' + apiKey.slice(-3);
            outputElement.textContent = 'GPT：' + output;
            //outputBox.appendChild(apiKey.slice(-3));
            outputBox.appendChild(outputElement);

        })
        .catch(error => console.error('请求失败：', error));

    inputBox.value = '';
}

function clearOutput() {
    var outputBox = document.getElementById('outputBox');
    outputBox.innerHTML = '';
}