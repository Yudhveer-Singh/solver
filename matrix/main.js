var out=$("#output");
var result="";
$("#sq").click(function(){
   out.empty();
   square();
   out.html(result);
});
$("#deter").click(function(){
   out.empty();
   determinant();
   out.html("|A|<br>"+result);
});
$("#inverse").click(function(){
   out.empty();
   inverse();
   out.html(result);
});
$("#cube").click(function(){
   out.empty();
   cube();
   out.html(result);
});
$("#reset").on("click",function(){
   _value("a11");
   _value("a12");
   _value("a13");
   _value("a21");
   _value("a22");
   _value("a23");
   _value("a31");
   _value("a32");
   _value("a33");
});
function value(el){
  return document.getElementById(el).value;
}
function _value(el){
  document.getElementById(el).value="";
}
function square(/*a,b,c,x,y,z,l,m,n*/){
   var a=value("a11");
   var b=value("a12");
   var c=value("a13");
   var x=value("a21");
   var y=value("a22");
   var z=value("a23");
   var l=value("a31");
   var m=value("a32");
   var n=value("a33");
   
   var _a=a*a+b*x+c*l;
   var _b=a*b+b*y+c*m;
   var _c=a*c+b*z+c*n;
   var _x=x*a+y*x+z*l;
   var _y=x*b+y*y+z*m;
   var _z=x*c+y*z+z*n;
   var _l=l*a+m*x+n*l;
   var _m=l*b+m*y+n*m;
   var _n=l*c+m*z+n*n;
   
   result= "A<sup>2</sup><br>"+_a+"..."+_b+"..."+_c+"<br>"+_x+"..."+_y+"..."+_z+"<br>"+_l+"..."+_m+"..."+_n+"<br>";
}
function cube(){
   var a=value("a11");
   var b=value("a12");
   var c=value("a13");
   var x=value("a21");
   var y=value("a22");
   var z=value("a23");
   var l=value("a31");
   var m=value("a32");
   var n=value("a33");
   
   var _a=a*a+b*x+c*l;
   var _b=a*b+b*y+c*m;
   var _c=a*c+b*z+c*n;
   var _x=x*a+y*x+z*l;
   var _y=x*b+y*y+z*m;
   var _z=x*c+y*z+z*n;
   var _l=l*a+m*x+n*l;
   var _m=l*b+m*y+n*m;
   var _n=l*c+m*z+n*n;
   
   var oa=_a*a+_b*x+_c*l;
   var ob=_a*b+_b*y+_c*m;
   var oc=_a*c+_b*z+_c*n;
   var ox=_x*a+_y*x+_z*l;
   var oy=_x*b+_y*y+_z*m;
   var oz=_x*c+_y*z+_z*n;
   var ol=_l*a+_m*x+_n*l;
   var om=_l*b+_m*y+_n*m;
   var on=_l*c+_m*z+_n*n;
   
   result= "A<sup>3</sup><br>"+oa+"..."+ob+"..."+oc+"<br>"+ox+"..."+oy+"..."+oz+"<br>"+ol+"..."+om+"..."+on+"<br>";
}
function determinant(){
   var a=value("a11");
   var b=value("a12");
   var c=value("a13");
   var x=value("a21");
   var y=value("a22");
   var z=value("a23");
   var l=value("a31");
   var m=value("a32");
   var n=value("a33");
   
   result= a*(y*n-z*m)-b*(x*n-z*l)+c*(x*m-y*l);
}
function inverse(){
   var a=value("a11");
   var b=value("a12");
   var c=value("a13");
   var x=value("a21");
   var y=value("a22");
   var z=value("a23");
   var l=value("a31");
   var m=value("a32");
   var n=value("a33");
   
   var d= a*(y*n-z*m)-b*(x*n-z*l)+c*(x*m-y*l);
   var _a=(y*n-z*m)/d;
   var _b=(c*m-b*n)/d;
   var _c=(b*z-c*y)/d;
   var _x=(z*l-x*n)/d;
   var _y=(a*n-c*l)/d;
   var _z=(c*x-a*z)/d;
   var _l=(x*m-y*l)/d;
   var _m=(b*l-a*m)/d;
   var _n=(a*y-b*x)/d;
   
   result= "A<sup>-1</sup><br>"+_a+"..."+_b+"..."+_c+"<br>"+_x+"..."+_y+"..."+_z+"<br>"+_l+"..."+_m+"..."+_n+"<br>";
}
$("input").keypress(function(e){
   if(e.which == 13){
      var v= this.id;
      var k= $("#"+v).next().trigger("focus");
      //console.log(k);
   }
});
$("input").click(function(){
   this.value="";
});