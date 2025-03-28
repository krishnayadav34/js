                                              // Forin Loop For Object

const myObject = {
    js :'java script',
    cpp : 'c++',
    rb :'ruby',
    swift : 'swift by apple',
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);

  //  console.log(myObject[key]);
    
    }
