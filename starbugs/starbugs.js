function imgSlider(anything){
    document.querySelector('.starbucks').src=anything;
}

function changeCircleColor(color){
  const circle=document.querySelector('.circle');
  circle.computedStyleMap.background=color;
}