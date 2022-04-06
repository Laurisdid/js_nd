class Dog{
    constructor(name,rusis,kailis,akis,kojos,maistas,garsas){
    this.name=name;
    this.rusis=rusis
    this.kailis=kailis;
    this.akis=akis;
    this.kojos=kojos;
    this.garsas=garsas;
    this.maistas=maistas;
    this.sedi=false;

    }
    stovek(){
        this.sedi=false;
        console.log(`${this.name}: I am standing.`)
    }
    sedek(){
        this.sedi=true;
        console.log(`${this.name}: I am sitting.`)
    }
    balsas(){
        console.log(`${this.name}: ${this.garsas}`)
    }
    prisistatyk(){
        if (this.sedi==false){
            console.log(`Hi, I am a DOG and my name is ${this.name}. My color is ${this.kailis}.My eyes are ${this.akis}. I have ${this.kojos} legs. Right now I am standing.`)
        }else{
            console.log(`Hi, I am a DOG and my name is ${this.name}. My color is ${this.kailis}.My eyes are ${this.akis}. I have ${this.kojos} legs. Right now I sitting.`)
        }
    
    }

}
const pirmassuo= new Dog('Rex','Rexas','plaukuotas','rudos',4,'brangus','au au!!')
console.log(pirmassuo)

pirmassuo.balsas()
pirmassuo.prisistatyk()
pirmassuo.stovek()
pirmassuo.prisistatyk()
pirmassuo.sedek()
pirmassuo.prisistatyk()



class Cat{
    constructor(name,rusis,kailis,akis,kojos,maistas,garsas){
    this.name=name;
    this.rusis=rusis
    this.kailis=kailis;
    this.akis=akis;
    this.kojos=kojos;
    this.garsas=garsas;
    this.maistas=maistas;
    this.sedi=false;

    }
    stovek(){
        this.sedi=false;
        console.log(`${this.name}: I am standing.`)
    }
    sedek(){
        this.sedi=true;
        console.log(`${this.name}: I am sitting.`)
    }
    balsas(){
        console.log(`${this.name}: ${this.garsas}`)
    }
    prisistatyk(){
        if (this.sedi==false){
            console.log(`Hi, I am a ${this.rusis}  and my name is ${this.name}. My color is ${this.kailis}.My eyes are ${this.akis}. I have ${this.kojos} legs. Right now I am standing.`)
        }else{
            console.log(`Hi, I am a ${this.rusis} and my name is ${this.name}. My color is ${this.kailis}.My eyes are ${this.akis}. I have ${this.kojos} legs. Right now I sitting.`)
                    
        }
    
    }

}
const pirmascat= new Cat('Rainis','cat','black','blue',4,'brangus','miau miau!!')
pirmascat.prisistatyk()
pirmascat.sedek()


class Parrot{
    constructor(name,rusis,kailis,akis,wings,maistas,garsas){
    this.name=name;
    this.rusis=rusis
    this.kailis=kailis;
    this.akis=akis;
    this.wings=wings;
    this.garsas=garsas;
    this.maistas=maistas;
    this.sedi=false;

    }
    stovek(){
        this.sedi=false;
        console.log(`${this.name}: I am standing.`)
    }
    sedek(){
        this.sedi=true;
        console.log(`${this.name}: I am sitting.`)
    }
    balsas(){
        console.log(`${this.name}: ${this.garsas}`)
    }
    prisistatyk(){
        if (this.sedi==false){
            console.log(`Hi, I am a ${this.rusis}  and my name is ${this.name}. My color is ${this.kailis}.My eyes are ${this.akis}. I have ${this.wings} legs. Right now I am standing.`)
        }else{
            console.log(`Hi, I am a ${this.rusis} and my name is ${this.name}. My color is ${this.kailis}.My eyes are ${this.akis}. I have ${this.wings} legs. Right now I sitting.`)
                    
        }
    
    }

}
const pirmasp= new Parrot('Jack','parrot','black','blue',2,'brangus','I am captain Jack!!')
pirmascat.prisistatyk()
pirmascat.sedek()