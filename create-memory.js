//Here we are going to create the MP 

//We create a function that takes an argument(sizeInBytes)
//and creates an array buffer of that length
const createMemory = sizeInBytes => {
    const ab = new ArrayBuffer(sizeInBytes); //Creates a buffer of raw binary data. Its length is "sizeInBytes"
    const dv = new DataView(ab);//provides a low-level interface for reading and writing multiple number types in a binary
    return dv;
};

module.exports = createMemory;