(() => {

  type Avenger = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;

  };


  const avenger = {
    nick: "Samuel L. Jackson",
    ironman: "Robert Downey Jr.",
    vision: "Paul Bettany",
    activo: true,
    poder: 1500.123123,
  };

  const { poder, vision } = avenger;

  console.log(poder.toFixed(2), vision.toUpperCase());

  const printAvenger = ({ ironman, ...resto }: Avenger) => {
    console.log(ironman, resto);
  };


  const avengerArr: [string, string, string] = ['Cap. America', 'Ironman', 'Hulk'];


  const [, ironman,]= avengerArr;
  console.log(ironman);
})();
