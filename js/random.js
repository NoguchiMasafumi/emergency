var value = new Vue({
    el: '#app',
    data:{
        exec1:0,
        elem_1:'',
        disp_txt:'',
        ar_txt:[0,1,2],
        angle:3,
        int_speed:0,
        dat:[
            {
                ip_from:'1',
                ip_to:'2',
                code_1:'FE',
                code_2:'000000'
            },
            {
                ip_from:'3',
                ip_to:'4',
                code_1:'',
                code_2:''
            },
            {
                ip_from:'5',
                ip_to:'6',
                code_1:'',
                code_2:''
            }
        ]
    },
    mounted:function(){
        document.getElementById("speed").addEventListener('input', this.view_control, false)

    },
    methods:{

        create_ip:function(tgt,ft){
                
                let int_loop3=0
                let int_loop1=0
                for(int_loop1=0;int_loop1<this.ar_txt.length;int_loop1++){
                    let sss=''

                    for(int_loop3=0;int_loop3<4;int_loop3++){
                        var random1 = Math.floor( Math.random() * 255 );
                        random1=("000"+random1).slice(-3)
                        if(int_loop3>0){sss=sss+"."+random1}else{sss=sss+random1}
                    }
                    if(ft=='f'){
                        this.dat[int_loop1].ip_from=sss
                    }else{
                        this.dat[int_loop1].ip_to=sss
                    }
                }

                this.view_control()
        },
        create_code_2:function(tgt){
            let int_loop3=0
            let int_loop2=0
            let int_loop1=0
            for(int_loop1=0;int_loop1<this.ar_txt.length;int_loop1++){
                let sss=''
                for(int_loop2=0;int_loop2<8;int_loop2++){
                    var ccd = Math.floor( Math.random() * 9 );
                    if(int_loop3>0){sss=sss+ccd}else{sss=sss+ccd}
                }
                this.dat[int_loop1].code_2=sss
            }
        },
        create_code_1:function(tgt){
            let int_loop2=0
            let str_let1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let int_loop1=0
            for(int_loop1=0;int_loop1<this.ar_txt.length;int_loop1++){
                let sss=''


                for(int_loop2=0;int_loop2<2;int_loop2++){
                    sss=sss+str_let1[~~(Math.random() * str_let1.length)]
                }

                this.dat[int_loop1].code_1=sss
            }
        },
        view_control:function(){


            this.int_speed=document.getElementById("speed").value


            this.disp_txt=''
            let int_loop1=0
            for(int_loop1=0;int_loop1<this.ar_txt.length;int_loop1++){
                this.disp_txt=this.disp_txt+'            '
                this.disp_txt=this.disp_txt+'FROM:'+this.dat[int_loop1].ip_from+'-TO:'+this.dat[int_loop1].ip_to+' '+this.dat[int_loop1].code_1+':#'+this.dat[int_loop1].code_2
            }
            //console.log(this.disp_txt)

            let angle=360/this.disp_txt.length
            //console.log(angle)
            this.elem_1=document.getElementById("rot")
            
            var parentR = this.elem_1.offsetWidth/2;
            
            var chars = this.disp_txt.split('');
            if(chars.length%2 === 0){
              chars.splice(chars.length/2,0,' ');
            }
            this.elem_1.innerHTML = null;
          

            chars.forEach(function (c, i, arr) {
              var span = document.createElement('span');
              span.textContent = c;
              span.style.display   = 'inline-block';
              span.style.position  = 'absolute';
              span.style.left = '50%';
              span.style.top = '50%';
          
              span.style.transformOrigin = 'left top';
              span.style.transform = 
                'rotate(' + (i*angle-angle*((arr.length/2)>>0)) + 'deg) ' +
                'translate(0%,40%) ' + 
                'translate(0, -' + (parentR) + 'px) ' +
                'translate(-50%,-50%)';
                document.getElementById("rot")  .appendChild(span);
            });
            //console.log(this.int_speed/100)
            if(this.int_speed==0){
                app.style.transform='rotateY(25deg) rotateX(45deg) scale(0,0)'
            }else{
                app.style.transform='rotateY(25deg) rotateX(45deg) scale('+this.int_speed/100+','+this.int_speed/100+')'
            }
            return
        }
    },
    computed:{
  




        currentTurn(){
            if(this.exec1==0){

                this.exec1=1
                this.view_control()
                let int_loop1=0
                for(int_loop1=0;int_loop1<this.ar_txt.length;int_loop1++){
                    this.create_ip(int_loop1,'f')
                    this.create_ip(int_loop1,'t')
                    this.create_code_1(int_loop1)
                    this.create_code_2(int_loop1)
                }

                setInterval(() => {
                    this.create_ip(0,'f')}
                    ,7000
                )

                setInterval(() => {
                    this.create_ip(0,'t')}
                    ,5000
                )
                setInterval(() => {
                    this.create_code_1(0)}
                    ,6500
                )

                setInterval(() => {
                    this.create_code_2(0)}
                    ,6000
                )

            }

        }
    }
})
