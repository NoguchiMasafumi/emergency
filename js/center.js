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
        animTime:0
    },
    mounted:function(){
        document.getElementById("speed").addEventListener('input', this.view_control, false)
        



    },
    methods:{
        view_control:function(){


           //console.log(this.int_speed*100)
            if(this.int_speed>0){
                //fly wheel
                this.animTime=parseInt(60/(this.int_speed/2)).toFixed(3)

                //console.log(this.animTime)
    
                let nm_1=0
                let radX=0
                let radY=0
                let txtcnt_2=this.textcnt
                let dist_2=this.dist
                let anitime_2=this.animTime
    
    
    
    
                app.querySelectorAll(".span_1").forEach(function(val,index,ar){
                    nm_1 = index+1
                    radX = Math.sin(360 / txtcnt_2 * nm_1 * (Math.PI / 180))
                    radY = Math.sin((90 - (360 / txtcnt_2 * nm_1)) * (Math.PI / 180))
                    val.style.animationDelay = anitime_2 / txtcnt_2 * nm_1 + 's'
                    val.style.transform='translate(' + dist_2 * radX + 'px, ' + -(dist_2 * radY) + 'px) rotateX(90deg) rotateY(' + 360 / txtcnt_2 * nm_1 + 'deg)'
    
                });
                app.querySelectorAll(".text")[0].style.animationDuration=anitime_2+'s'
    
    
    
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

                //fly wheel
                this.obj_1=document.getElementById('txt_1')
                this.str_txt_1=this.obj_1.innerText
                this.ar_txt_1=this.str_txt_1.split("")
                let after = '';
                this.ar_txt_1.forEach(function(val,index,ar){
                    after += "<span class='span_1'>" + val + "</span>";
                });
                this.obj_1.innerHTML=after
                this.textcnt = this.ar_txt_1.length
                let rect_1=document.getElementsByClassName("circle")[0].getBoundingClientRect()
                this.circleR = (rect_1.height) / 2
                let rect_2=document.getElementsByClassName("inner")[0].getBoundingClientRect()
                this.fontH = rect_2.height
                this.dist = this.circleR - this.fontH;
    
                //let elem_1=document.getElementsByClassName("text")[0]
                //let hhh=window.getComputedStyle(elem_1)
                //let shhh=hhh.getPropertyValue('animation-duration')
                //this.animTime = shhh.slice(0, -1);
    
    


                this.view_control()
            }else{

            }

        }
    }
})
