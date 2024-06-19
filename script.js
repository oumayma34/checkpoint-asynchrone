//task 1
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      await delay(1000); 
      console.log(value);
    }
  }
  iterateWithAsyncAwait([1,2,3,4,5,6,7,8,9]);

  //deuxiéme solution pour task 1 : 
let ele =0;
async function iterateWithAsyncAwait(){
    if(ele<tab.length){
        setTimeout(() => {
            console.log(tab[ele]);
            ele++;
            iterateWithAsyncAwait()
        }, 1000);
    }
}
const tab = [1,2,3,4,5,6,7,8,9];
iterateWithAsyncAwait(tab);

//task 2:
  async function fetchData(){
return new Promise((resolve)=>{
    setTimeout(() => {
        resolve({data:'data from API'})
    }, 2000);
})}

async function awaitCall(){
    const response = await fetchData();
    console.log(response.data);
};
awaitCall();

//task 3:
async function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject(new Error('traitement non effectué correctement'))
        }, 2000);
    })}
    
async function awaitCall(){
        try{
        const response = await fetchData();
        console.log(response.data);
    }catch(error){
        console.error('failed');
    }
    };
    awaitCall();





function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

async function Prom1 (){
    await delay(1000);
    console.log('function one completed');
};

async function Prom2 (){
    await delay(1000);
    console.log('function two completed');
};

async function Prom3 (){
    await delay(1000);
    console.log('function three completed');
};

async function chainedAsyncFunctions(){
    await Prom1();
    await Prom2();
    await Prom3();
};
chainedAsyncFunctions();

//task 4 :
async function concurrentRequests() {
    try {
        const reponse1 = new Promise(resolve => setTimeout(() => resolve("Result 1"), 2000));
        const reponse2 = new Promise(resolve => setTimeout(() => resolve("Result 2"), 1500));

        const [result1, result2] = await Promise.all([reponse1, reponse2]);

        console.log("Combined Results:");
        console.log("Result 1:", result1);
        console.log("Result 2:", result2);
    } catch (error) {
        // Handle errors
        console.error("Error", error);
    }
}
concurrentRequests();

//task 5:
async function parallelCalls(urls) {
    try {
        const tasks = urls.map((url, index) => new Promise(resolve => 
            setTimeout(() => 
                resolve(`Response ${index + 1}`), Math.random() * 2000)));
        const responses = await Promise.all(tasks);
        console.log("Responses:");
        responses.forEach((response, index) => {
            console.log(`Response ${index + 1}: ${response}`);
        });
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

const urls = ["url1", "url2", "url3","url4"];
parallelCalls(urls);