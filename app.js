 app = new Vue ({
    el : "#app",
    data : {
        emails: []
    },
    mounted (){
        for (let index = 0; index < 10; index++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((res) =>{
            this.emails.push(res.data.response)
        })
        }
        
    }
})