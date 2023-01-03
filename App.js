// const root=document.getElementById("root");
// const heading=document.createElement("h1");
// heading.innerHTML="This is Javascript Based App"
// const subheading=document.createElement("h3");
// subheading.innerHTML="This is subheading";
// heading.appendChild(subheading);
// root.appendChild(heading);
        const reactSubHeading=React.createElement("h6",{id:"Subheading"},"THis is React Subheading");
       
        const reactHeading=React.createElement("h1",{id:"title",style:{color:"red"}},"This is React Based Application");
        
        
        const reactRoot=ReactDOM.createRoot(document.getElementById("root"));
        const container=React.createElement("div",{},[reactHeading,reactSubHeading]);

 
        reactRoot.render(container);


        const users={
            name:"Nitesh",
            age:28,
            sex:"Male",
            degree:["Btech","Mtech","upGrad"]
        }

        let count=0;
        for(key in users){
            count++;
        }
        console.log(count);