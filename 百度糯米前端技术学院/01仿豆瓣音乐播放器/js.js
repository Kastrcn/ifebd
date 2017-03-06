/**
 * Created by 赵天 on 2017/2/28.
 */
class WYPlay{
    constructor(){
        this.audio = new Audio()
        this.audio.src="http://mr3.doubanio.com/d588210a016465151ab4ca05a3322a14/0/fm/song/p1451104_128k.mp3";
        console.log(this.audio);
        let _this= this;

        // document.querySelector('.play').addEventListener("click",function () {
        //     _this.audio.play();
        // })
        // document.querySelector('.pause').addEventListener("click",function () {
        //     _this.audio.pause();
        // })

    }
}


const plays=new WYPlay();
// console.log(this.audio)
