
// Area of triangle
document.getElementById('TriangleButton').addEventListener('click',function(){ 
    const base=document.getElementById('TriangeBase');
     const height=document.getElementById('TriangeHeight');
     const Result=0.5*base.value*height.value;

      const area=document.getElementById('Area');
      area.value=Result.toFixed(4);   // for four digits after decimal point
    //   p, div, span egula hole "innerText"
    // input hole "vlaue"

})


// Area of Rectangle
document.getElementById('RectanglButton').addEventListener('click',function(){ 
    const base=document.getElementById('RectangleBase');
     const height=document.getElementById('RectangleHeight');
     const Result=base.value*height.value;

      const area=document.getElementById('Area');
      area.value=Result.toFixed(4);   // for four digits after decimal point
    //   p, div, span egula hole "innerText"
    // input hole "vlaue"

})

// Area of Parallelogram
document.getElementById('ParallelogramButton').addEventListener('click',function(){ 
    const base=document.getElementById('ParallelogramBase');
     const height=document.getElementById('ParallelogramHeight');
     const Result=base.value*height.value;

      const area=document.getElementById('Area');
      area.value=Result.toFixed(4);   // for four digits after decimal point
    //   p, div, span egula hole "innerText"
    // input hole "vlaue"

})

// Area of Rhombus
document.getElementById('RhombusButton').addEventListener('click',function(){ 
    const FirstCorner=document.getElementById('RhombusFirstCorner');
     const SecondCorner=document.getElementById('RhombusSecondCorner');
     const Result=0.5*FirstCorner.value*SecondCorner.value;

      const area=document.getElementById('Area');
      area.value=Result.toFixed(4);   // for four digits after decimal point
    //   p, div, span egula hole "innerText"
    // input hole "vlaue"

})


// Area of Pentagon
document.getElementById('PentagonButton').addEventListener('click',function(){ 
    const Perimeter=document.getElementById('PentagonPerimeter');
     const Apothem=document.getElementById('PentagonPerApothem');
     const Result=0.5*Perimeter.value*Apothem.value;

      const area=document.getElementById('Area');
      area.value=Result.toFixed(4);   // for four digits after decimal point
    //   p, div, span egula hole "innerText"
    // input hole "vlaue"

})

// Area of Ellipse
document.getElementById('EllipseButton').addEventListener('click',function(){ 
    const base=document.getElementById('EllipseBase');
     const height=document.getElementById('EllipseHeight');
     const Result=3.1416*base.value*height.value;

      const area=document.getElementById('Area');
      area.value=Result.toFixed(4);   // for four digits after decimal point
    //   p, div, span egula hole "innerText"
    // input hole "vlaue"

})

document.getElementById('ResultReset').addEventListener('click',function(){
    const Area=document.getElementById('Area');
    Area.value='';
})