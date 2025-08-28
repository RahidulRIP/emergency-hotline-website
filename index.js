function getElementId(id) {
    const element = document.getElementById(id);
    return element;
}


getElementId('card-box').addEventListener('click', function (e) {

    // coin related 
    const coinCountValue = Number(getElementId('coinCount').innerText);

    if (coinCountValue < 20) {

        return alert('Insufficient Coin');

    };

    // love count 
    if (e.target.className.includes('love')) {
        const loveCount = getElementId('love-count')
        const loveCountValue = Number(loveCount.innerText);
        const currentValue = Number(loveCountValue + 1)
        getElementId('love-count').innerText = currentValue;
    };

    // call Btn related work 
    if (e.target.className.includes('callBtn')) {

        // time format start 
        const timeAndDate = new Date();
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        }
        const time = timeAndDate.toLocaleTimeString('en-US', options)
        // time format end 


        // this is for clicking in the call icon 
        const icon = e.target;
        if (icon.tagName == "I") {
            const heading = icon.parentNode.parentNode.parentNode.children[1].innerText;
            const callNumber = icon.parentNode.parentNode.parentNode.children[3].innerText;

            // coin related 
            const remainingCoin = Number(coinCountValue - 20)
            getElementId('coinCount').innerText = remainingCoin;

            // info add to the history 
            const asideContainer = getElementId('asideContainer')
            const div = document.createElement('div')
            div.innerHTML = `
                   <div>
                          <div class="flex items-center justify-between bg-[#fafafa] p-3 rounded-lg mb-2">
                                <div>
                                    <h2 class="text-lg font-semibold">${heading}</h2>
                                    <p>${callNumber}</p>
                                </div>
                                <div>
                                    <span>${time}</span>
                                </div>
                            </div>
                     </div>
            `
            asideContainer.append(div);
        } else {                                                          // this is for clicking in the calling button 

            // coin related 
            const remainingCoin = Number(coinCountValue - 20)
            getElementId('coinCount').innerText = remainingCoin;

            // call Btn Traverse start 
            const traverseHeading = e.target.parentNode.parentNode.children[1];
            const heading = traverseHeading.innerText;

            const traverseCallNumber = e.target.parentNode.parentNode.children[3];
            const callNumber = traverseCallNumber.innerText;
            // call btn Traverse end 

            // info add to the history 
            const asideContainer = getElementId('asideContainer')
            const div = document.createElement('div')
            div.innerHTML = `
                   <div>
                          <div class="flex items-center justify-between bg-[#fafafa] p-3 rounded-lg mb-2">
                                <div>
                                    <h2 class="text-lg font-semibold">${heading}</h2>
                                    <p>${callNumber}</p>
                                </div>
                                <div>
                                    <span>${time}</span>
                                </div>
                            </div>
                     </div>
            `
            asideContainer.append(div);
        };

    };

    // this is for clear the history 
    getElementId('clearBtn').addEventListener('click', function () {
        const asideContainerClear = getElementId('asideContainer')
        asideContainerClear.innerText = ''
    });

})