(() => {

    type Hero = {

        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }

    let flash: { name: string, age: number, powers: string[], getName?: () => string} = {
      name: "Barry Alen",
      age: 24,
      powers: ["Super Velocidad", "Viajar en el tiempo"],
    };
  
      let superman: { name: string, age: number, powers: string[], getName?: () => string} = {
      name: "Clark Kent",
      age: 60,
      powers: ["Super Velocidad"],
    };
  
   
  })();
  