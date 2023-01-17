(() => {

    class Avenger{

        name;
        power;


        constructor( name = 'No name', power = 0){

            this.name = name;
            this.power = power;


        }


    }

    class FlingAvenger extends Avenger {

        flying;

        constuctor(){
            super();
            this.flying = true;
        }
    }


    const hulk = new Avenger()

    console.log(hulk)
})()