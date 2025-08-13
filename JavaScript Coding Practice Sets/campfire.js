const isSticksFound = true;
  const isLighterFound = true; 
  /* Write your code here */
  
  
  let promiseMethod = (isFound, resolveState, rejectState) => {
     return new Promise((resolve, reject ) => {
          isFound ? resolve(resolveState) : reject(rejectState); 
      })
  }
  
  
  
  let campfire = async  () => {
      try {
          let res1 = await promiseMethod(isSticksFound, "Sticks Gathered", "Sticks Not Found"); 
          console.log(res1); 
          let res2 = await promiseMethod(isSticksFound, "Sticks Arranged"); 
          console.log(res2); 
          let res3 = await promiseMethod(isLighterFound, "Campfire Lighted", "Lighter Not Found"); 
          console.log(res3); 
           
      } catch (e) {
          console.log(e); 
      }
  }
  
  
  
  campfire(); 
  
  