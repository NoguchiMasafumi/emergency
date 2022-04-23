var value = new Vue({
    el: '#app',
    data:{
        exec1:0,
        dat:[
            {ss:3},
            {ss:6},
            {ss:9},
            {ss:12},
            {ss:15}
        ],
        insurance:[],
        output_insurance:[],
        yqyr:[],
        output_yqyr:[],
        other_collection:[],
        output_other_collection:[],
        tax:[],
        output_tax:[],
        import_file:'',
        tgt_city:'',
        sss:[],
        int_speed:0,
        safety_1:1,
        str_txt_1:'',
        ar_txt_1:[],
        obj_1:'',
        textcnt:0,
        circleR:0,
        fontH:12,
        dist:0,
        animTime:0,
        aft1:''
    },
    mounted:function(){
        document.getElementById("speed").addEventListener('input', this.view_control, false)
        



    },
    methods:{

        remove_span_1:function(){
            var elems=app.querySelectorAll(".span_2")
            let int_loop2=0
            for(int_loop2;int_loop2<elems.length;int_loop2++){
                //elems[int_loop2].classList.remove("span_1")
                elems[int_loop2].style.transform='translate(0px, 0px) rotateX(90deg) rotateY(0deg)'
                //elems[int_loop2].style.animationDuration = '0s'
                elems[int_loop2].style.animationName="x"

                void elems[int_loop2].offsetWidth;
            }
        },
        add_span_1:function(){
            var elems=app.querySelectorAll(".span_2")
            let int_loop2=0
            for(int_loop2;int_loop2<elems.length;int_loop2++){
                console.log(elems[int_loop2].style)

                elems[int_loop2].classList.add("span_1")
                elems[int_loop2].style.animationName="opacityAnim"
                //console.log(elems[int_loop2].classList)
            }

        },



        view_control:function(){
            this.int_speed=document.getElementById("speed").value/100


            //console.log(this.int_speed)
            if(this.int_speed>0){
    
            //************************ fly wheel ********************************** */
            let intsp=this.int_speed
            this.rpm=60/(intsp)
            let elem1 = document.getElementsByClassName("anim");
            Array.prototype.forEach.call(elem1, function (element) {
                element.style.animationDuration=  60/(intsp)+'s'
            });
            let elem2 = document.getElementsByClassName("anim_r");
            Array.prototype.forEach.call(elem2, function (element) {
                element.style.animationDuration=  60/(intsp)+'s'
            });
            let ar_del=new Array('del1','del2','del3','del4','del5')
            let int_loop1=0
            for(int_loop1=0;int_loop1<ar_del.length;int_loop1++){
                let elem1 = document.getElementsByClassName(ar_del[int_loop1]);
                Array.prototype.forEach.call(elem1, function (element) {
                    element.style.animationDelay=  (60/(intsp)/5)*int_loop1+'s'
                });
            }
            //************************ fly wheel ********************************** */

    
            }











            if(this.int_speed>82){
                document.getElementById("speed").value=8200
            }
    

            if(this.exec1==0){
                this.int_speed=document.getElementById("speed").value/100
                //console.log(this.int_speed)
                this.dat=[]
                let int_loop1=0
                for(int_loop1=0;int_loop1<this.int_speed;int_loop1++){
                    this.dat.push({ss:3})
                }

                this.exec1==1
                return this.int_speed
            }else{
            }
        }
    },
    computed:{
        currentTurn(){

            if(this.exec1==0){

    


                this.view_control()
            }else{

            }

        }
    }
})
