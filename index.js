
// Area of triangle
document.getElementById('TriangleButton').addEventListener('click',function(){ 
    const base=document.getElementById('TriangeBase');
     const height=document.getElementById('TriangeHeight');
     const Result=0.5*base.value*height.value;

      const area=document.getElementById('Area');
      area.value=Result;
    //   p, div, span egula hole "innerText"
    // input hole "vlaue"

})

document.getElementById('ResultReset').addEventListener('click',function(){
    const Area=document.getElementById('Area');
    Area.value='';
})