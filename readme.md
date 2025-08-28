### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

#getElementById: 'we can gets one element by id'
#getElementsByClassName: 'we can get many elements by class using getElementByClassName()'
#querySelector: 'we get 1st element from a page by class or id using css rule'
#querySelectorAll: 'we get all elements as node list by class using css rule'



2. How do you **create and insert a new element into the DOM**?

const boxContainer = document.getElementById('box');
const div = document.createElement('div');
   div.innerHtml=`<p>hi,Brother</p>`
   boxContainer.appendChild(div)



3. What is **Event Bubbling** and how does it work?

#Event Bubbling: 'event bubbling is down to up flow' ,
#it work: 'when we click in a button of a page ,the button clicked then moves upwards through its parent elements like bubble rising in water'.



4. What is **Event Delegation** in JavaScript? Why is it useful?
#Event Delegation: 'Putting one event listener on a parent element instead of many elements'
#Why useful: 'easy to handle very part of page and we avoid looping by this'



5. What is the difference between **preventDefault() and stopPropagation()** methods?

#preventDefault: 'it helps to prevents reload of a page when we submit data in form'
#stopPropagation: 'when we use stopPropagation it helps to stop bubbling  child to parent elements'


-- -- --

