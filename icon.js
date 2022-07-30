var arr = ["result1.html","result2.html","result3.html","result4.html"
];

function randSite(){
        location.href = "" + arr[Math.floor (Math.random()*arr.length)];
}
// JavaScript Document