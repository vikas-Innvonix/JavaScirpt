export function pattern(n){
    let div = document.getElementById("root");
    let middle = Math.round((n-1)/2);
    for(let i=0;i<n;++i){
        for(let j=0;j<n;++j){
            if( j==0 || i==0 || j==(n-1) || i==(n-1) || (j==middle && i==middle)){
                // document.write("&nbsp;*&nbsp;&nbsp;")
                div.innerHTML+="&nbsp;*&nbsp;&nbsp;"
            }
            else{
                div.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
            }
        }
      div.innerHTML += "<br />"
    }
}



export function pattern2(n){
    let div = document.getElementById("root");
    for(let i=0;i<n;++i){
        for(let k=0;k<n-i;++k){
            div.innerHTML+="&nbsp;&nbsp";
        }
        for(let j=0;j<=i;++j){
            div.innerHTML+="*&nbsp;&nbsp;";
        }
        div.innerHTML+="<br />";
    }
    for(let i=n-2;i>=0;--i){
        for(let k=0;k<n-i;++k){
            div.innerHTML+="&nbsp;&nbsp";
        }
        for(let j=0;j<=i;++j){
            div.innerHTML+="*&nbsp;&nbsp;";
        }
        div.innerHTML+="<br />";
    }
}



