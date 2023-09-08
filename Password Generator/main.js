class Password{
    constructor(){
        console.log("welcome to password generator")
        this.pass = ""
    }
    generatePassword(len){
        let chars = "abcdefghijklmnopqrstuvwxyz"   
        let nums = "1234567890"
        let special = "!@#$%^&*()_+?~*" 
        if (len < 3) {
            console.log("Your password should be atleast 3 characters long")
        }
        else{
            let i = 0;
            while(i<len){
                this.pass += chars[Math.floor(Math.random()*chars.length)]
                // i++; 
                // if(i >= len){
                //     break;
                // }
                this.pass += nums[Math.floor(Math.random()*nums.length)]
                // i++;
                // if(i >= len){
                //     break;
                // }
                this.pass += special[Math.floor(Math.random()*special.length)]
                // i++;
                i+=3;
            }
        }
        this.pass = this.pass.substring(0, len);
        return this.pass
    }
}

let p = new Password()
console.log(p.generatePassword(7))