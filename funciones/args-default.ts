(() =>{

    const fullName = ( firstName: string, lastName?: string, upper: boolean): string =>{


        return `${ firstName } ${ lastName }`;
    }

    const name = fullName ( 'Tony', 'Stark');

    console.log({ name });

})();