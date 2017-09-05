# front-end-interview
知识点&amp;面试题总结
var num = 0;
        for(var i = 1;i<10;i++) {
            if(i%5 == 0) {
                break;
            }
            num++;
        }
        alert(num);

        var a = '20';
        function show() {
            return this.a;
        }
        (function (){
            var a = '25';
            console.log(show.bind(this)());
        })()


        function showCase(value) {
            switch(value) {
                case "A":
                    console.log('case A');
                    break;
                case undefined:
                    console.log('undefined');
                    break;
                default:
                    console.log('don know');

            }
        }
        console.log(showCase(String('A')));