  let person = {
        name: "Mark",
        class: "Black / African - American",
        species_family: "Human",
        height: "5'7",
        set size(size){
            return this.height = this.size;
        },
        weight: "up to 125lbs",
        get family(){
            return this.species_family;
        },
        home: "Harlem, NY",
        diet_type: function(){alert("Omnivorous")},
        description: function(){
            console.log("The " + this.name + "is an " + this.diet_type + " species of " + this.species_family + " found somewhere in " + this.home + "." + " living life " + this.size + " and weighting " + this.weight + ".")
        }


    };
    Animal.diet_type()
    Animal.size = "around 5 feet";
    Animal.family
