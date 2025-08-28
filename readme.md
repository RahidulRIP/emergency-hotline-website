### Answering the following questions clearly:

#What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

1. getElementById: 'we can gets one element by id'.
2. getElementsByClassName: 'we can get many elements by class using getElementByClassName()'.
3. querySelector: 'we get 1st element from a page by class or id using css rule'.
4. querySelectorAll: 'we get all elements as node list by class using css rule'.



#How do you **create and insert a new element into the DOM**?

const boxContainer = document.getElementById('box');
const div = document.createElement('div');
   div.innerHtml=`<p>hi,Brother</p>`
   boxContainer.appendChild(div);



#What is **Event Bubbling** and how does it work?

1. Event Bubbling: 'event bubbling is down to up flow' .
2. it work: 'when we click in a button of a page ,the button clicked then moves upwards through its parent elements like bubble rising in water'.



#What is **Event Delegation** in JavaScript? Why is it useful?

1. Event Delegation: 'Putting one event listener on a parent element instead of many elements'.
2. Why useful: 'easy to handle very part of page and we avoid looping by this'.



#What is the difference between **preventDefault() and stopPropagation()** methods?

1. preventDefault: 'it helps to prevents reload of a page when we submit data in form'.
2. stopPropagation: 'when we use stopPropagation it helps to stop bubbling  child to parent elements'.


-- -- --

