let site = {
    siteName: "W3Docs",
    bookName: "Javascript",
    get fullName(){
        return this.siteName + " " +this.bookName;
    },
    set fullName(siteName){
        this.siteName=siteName;
        this.bookName="CSS";
    }
    
};

//1

console.log(site.fullName);

//2

site.fullName="W3";
console.log(site.fullName);

console.log(site.siteName);
console.log(site.bookName);


//3

Object.defineProperty(site, "getName", {
    get : function (){
       return this.siteName + " " + this.bookName; 
    }
});
console.log(site.getName); 