var value = new Vue({
    el: '#app',
    data:{
        exec1:0,
        elem_1:'',
        disp_txt:'',
        ar_txt:[0,1,2],
        angle:3,
        int_speed:0,
        rpm:0
    },
    mounted:function(){
        document.getElementById("speed").addEventListener('input', this.view_control, false)

    },
    methods:{

        view_control:function(){
            this.int_speed=document.getElementById("speed").value


            //************************ fly wheel ********************************** */
            let intsp=this.int_speed
            this.rpm=60/(intsp/100)
            let elem1 = document.getElementsByClassName("anim");
            Array.prototype.forEach.call(elem1, function (element) {
                element.style.animationDuration=  60/(intsp/100)+'s'
            });
            let elem2 = document.getElementsByClassName("anim_r");
            Array.prototype.forEach.call(elem2, function (element) {
                element.style.animationDuration=  60/(intsp/100)+'s'
            });
            let ar_del=new Array('del1','del2','del3','del4','del5')
            let int_loop1=0
            for(int_loop1=0;int_loop1<ar_del.length;int_loop1++){
                let elem1 = document.getElementsByClassName(ar_del[int_loop1]);
                Array.prototype.forEach.call(elem1, function (element) {
                    element.style.animationDelay=  (60/(intsp/100)/5)*int_loop1+'s'
                });
            }
            //************************ fly wheel ********************************** */



            return
        }
    },
    computed:{
  




        currentTurn(){
            if(this.exec1==0){
                this.exec1=1
                this.view_control()




            }

        }
    }
})
