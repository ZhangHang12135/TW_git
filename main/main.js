module.exports = 
function main(str) {
    let led_object ={
        '0' : ['._.','|.|','|_|'],
        '1' : ['...','..|','..|'],
        '2' : ['._.','._|','|_.'],
        '3' : ['._.','._|','._|'],
        '4' : ['...','|_|','..|'],
        '5' : ['._.','|_.','._|'],
        '6' : ['._.','|_.','|_|'],
        '7' : ['._.','..|','..|'],
        '8' : ['._.','|_|','|_|'],
        '9' : ['._.','|_|','..|']
    };
    let result_Array = [];
    for (let index = 0,length=str.length; index < length; index++) {
        const element = str[index];
        if(led_object[element]){
            result_Array.push(led_object[element]);
        }
    }
    let result_string = "";
    for (let index = 0; index < 3; index++) {
       for (let j = 0,length=result_Array.length; j < length; j++) {
           const element = result_Array[j];
           if(j === length-1){
               result_string += element[index] + '\n';
           }else{
                result_string += element[index] + ' ';
           }
       }
    }
    return result_string;
};
// console.log(main('123'));