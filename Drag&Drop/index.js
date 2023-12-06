import Draggable from 'https://cdn.jsdelivr.net/npm/@shopify/draggable/build/esm/Draggable/Draggable.mjs';
import Droppable from 'https://cdn.jsdelivr.net/npm/@shopify/draggable/build/esm/Droppable/Droppable.mjs';


const items = document.querySelectorAll(".item");


const draggable = new Draggable(document.querySelector('.item-container'), {
  draggable: ".item",
  delay: {
    drag: 10,
  },
  classes: {
    'draggable:start': ["dragging-item"],
  },
});


// const droppable = new Droppable(items, {
//   draggable: ".item",
//   dropzone: ".item",
// });

// draggable.on("drag:start", (e) => {
//   // console.log(index);
//   console.log(e.source);
//   console.log(e.source.tabindex);
// });



// droppable.on("droppable:start", (e) => {
//   console.log(e);
// })